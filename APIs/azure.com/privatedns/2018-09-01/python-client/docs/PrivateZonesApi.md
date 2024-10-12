# openapi_client.PrivateZonesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**private_zones_create_or_update**](PrivateZonesApi.md#private_zones_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateZoneName} | 
[**private_zones_delete**](PrivateZonesApi.md#private_zones_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateZoneName} | 
[**private_zones_get**](PrivateZonesApi.md#private_zones_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateZoneName} | 
[**private_zones_list**](PrivateZonesApi.md#private_zones_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Network/privateDnsZones | 
[**private_zones_list_by_resource_group**](PrivateZonesApi.md#private_zones_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones | 
[**private_zones_update**](PrivateZonesApi.md#private_zones_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateZoneName} | 


# **private_zones_create_or_update**
> PrivateZone private_zones_create_or_update(resource_group_name, private_zone_name, api_version, subscription_id, parameters, if_match=if_match, if_none_match=if_none_match)



Creates or updates a Private DNS zone. Does not modify Links to virtual networks or DNS records within the zone.

### Example


```python
import openapi_client
from openapi_client.models.private_zone import PrivateZone
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PrivateZonesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    private_zone_name = 'private_zone_name_example' # str | The name of the Private DNS zone (without a terminating dot).
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.PrivateZone() # PrivateZone | Parameters supplied to the CreateOrUpdate operation.
    if_match = 'if_match_example' # str | The ETag of the Private DNS zone. Omit this value to always overwrite the current zone. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes. (optional)
    if_none_match = 'if_none_match_example' # str | Set to '*' to allow a new Private DNS zone to be created, but to prevent updating an existing zone. Other values will be ignored. (optional)

    try:
        api_response = api_instance.private_zones_create_or_update(resource_group_name, private_zone_name, api_version, subscription_id, parameters, if_match=if_match, if_none_match=if_none_match)
        print("The response of PrivateZonesApi->private_zones_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateZonesApi->private_zones_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **private_zone_name** | **str**| The name of the Private DNS zone (without a terminating dot). | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**PrivateZone**](PrivateZone.md)| Parameters supplied to the CreateOrUpdate operation. | 
 **if_match** | **str**| The ETag of the Private DNS zone. Omit this value to always overwrite the current zone. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes. | [optional] 
 **if_none_match** | **str**| Set to &#39;*&#39; to allow a new Private DNS zone to be created, but to prevent updating an existing zone. Other values will be ignored. | [optional] 

### Return type

[**PrivateZone**](PrivateZone.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Private DNS zone has been updated. |  -  |
**201** | The Private DNS zone has been created. |  -  |
**202** | The Private DNS zone upsert operation has been accepted and will complete asynchronously. |  -  |
**0** | Default response. It will be deserialized as per the Error definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_zones_delete**
> private_zones_delete(resource_group_name, private_zone_name, api_version, subscription_id, if_match=if_match)



Deletes a Private DNS zone. WARNING: All DNS records in the zone will also be deleted. This operation cannot be undone. Private DNS zone cannot be deleted unless all virtual network links to it are removed.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PrivateZonesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    private_zone_name = 'private_zone_name_example' # str | The name of the Private DNS zone (without a terminating dot).
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    if_match = 'if_match_example' # str | The ETag of the Private DNS zone. Omit this value to always delete the current zone. Specify the last-seen ETag value to prevent accidentally deleting any concurrent changes. (optional)

    try:
        api_instance.private_zones_delete(resource_group_name, private_zone_name, api_version, subscription_id, if_match=if_match)
    except Exception as e:
        print("Exception when calling PrivateZonesApi->private_zones_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **private_zone_name** | **str**| The name of the Private DNS zone (without a terminating dot). | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **if_match** | **str**| The ETag of the Private DNS zone. Omit this value to always delete the current zone. Specify the last-seen ETag value to prevent accidentally deleting any concurrent changes. | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Private DNS zone has been deleted. |  -  |
**202** | The Private DNS zone delete operation has been accepted and will complete asynchronously. |  -  |
**204** | The Private DNS zone was not found. |  -  |
**0** | Default response. It will be deserialized as per the Error definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_zones_get**
> PrivateZone private_zones_get(resource_group_name, private_zone_name, api_version, subscription_id)



Gets a Private DNS zone. Retrieves the zone properties, but not the virtual networks links or the record sets within the zone.

### Example


```python
import openapi_client
from openapi_client.models.private_zone import PrivateZone
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PrivateZonesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    private_zone_name = 'private_zone_name_example' # str | The name of the Private DNS zone (without a terminating dot).
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.private_zones_get(resource_group_name, private_zone_name, api_version, subscription_id)
        print("The response of PrivateZonesApi->private_zones_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateZonesApi->private_zones_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **private_zone_name** | **str**| The name of the Private DNS zone (without a terminating dot). | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**PrivateZone**](PrivateZone.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. |  -  |
**0** | Default response. It will be deserialized as per the Error definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_zones_list**
> PrivateZoneListResult private_zones_list(api_version, subscription_id, top=top)



Lists the Private DNS zones in all resource groups in a subscription.

### Example


```python
import openapi_client
from openapi_client.models.private_zone_list_result import PrivateZoneListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PrivateZonesApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    top = 56 # int | The maximum number of Private DNS zones to return. If not specified, returns up to 100 zones. (optional)

    try:
        api_response = api_instance.private_zones_list(api_version, subscription_id, top=top)
        print("The response of PrivateZonesApi->private_zones_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateZonesApi->private_zones_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **top** | **int**| The maximum number of Private DNS zones to return. If not specified, returns up to 100 zones. | [optional] 

### Return type

[**PrivateZoneListResult**](PrivateZoneListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. |  -  |
**0** | Default response. It will be deserialized as per the Error definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_zones_list_by_resource_group**
> PrivateZoneListResult private_zones_list_by_resource_group(resource_group_name, api_version, subscription_id, top=top)



Lists the Private DNS zones within a resource group.

### Example


```python
import openapi_client
from openapi_client.models.private_zone_list_result import PrivateZoneListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PrivateZonesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    top = 56 # int | The maximum number of record sets to return. If not specified, returns up to 100 record sets. (optional)

    try:
        api_response = api_instance.private_zones_list_by_resource_group(resource_group_name, api_version, subscription_id, top=top)
        print("The response of PrivateZonesApi->private_zones_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateZonesApi->private_zones_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **top** | **int**| The maximum number of record sets to return. If not specified, returns up to 100 record sets. | [optional] 

### Return type

[**PrivateZoneListResult**](PrivateZoneListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. |  -  |
**0** | Default response. It will be deserialized as per the Error definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_zones_update**
> PrivateZone private_zones_update(resource_group_name, private_zone_name, api_version, subscription_id, parameters, if_match=if_match)



Updates a Private DNS zone. Does not modify virtual network links or DNS records within the zone.

### Example


```python
import openapi_client
from openapi_client.models.private_zone import PrivateZone
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PrivateZonesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    private_zone_name = 'private_zone_name_example' # str | The name of the Private DNS zone (without a terminating dot).
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.PrivateZone() # PrivateZone | Parameters supplied to the Update operation.
    if_match = 'if_match_example' # str | The ETag of the Private DNS zone. Omit this value to always overwrite the current zone. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes. (optional)

    try:
        api_response = api_instance.private_zones_update(resource_group_name, private_zone_name, api_version, subscription_id, parameters, if_match=if_match)
        print("The response of PrivateZonesApi->private_zones_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateZonesApi->private_zones_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **private_zone_name** | **str**| The name of the Private DNS zone (without a terminating dot). | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**PrivateZone**](PrivateZone.md)| Parameters supplied to the Update operation. | 
 **if_match** | **str**| The ETag of the Private DNS zone. Omit this value to always overwrite the current zone. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes. | [optional] 

### Return type

[**PrivateZone**](PrivateZone.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Private DNS zone has been updated. |  -  |
**202** | The Private DNS zone update operation has been accepted and will complete asynchronously. |  -  |
**0** | Default response. It will be deserialized as per the Error definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

