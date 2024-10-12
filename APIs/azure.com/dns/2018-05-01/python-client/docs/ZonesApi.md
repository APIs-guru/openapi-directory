# openapi_client.ZonesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**zones_create_or_update**](ZonesApi.md#zones_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName} | 
[**zones_delete**](ZonesApi.md#zones_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName} | 
[**zones_get**](ZonesApi.md#zones_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName} | 
[**zones_list**](ZonesApi.md#zones_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Network/dnszones | 
[**zones_list_by_resource_group**](ZonesApi.md#zones_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones | 
[**zones_update**](ZonesApi.md#zones_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName} | 


# **zones_create_or_update**
> Zone zones_create_or_update(resource_group_name, zone_name, api_version, subscription_id, parameters, if_match=if_match, if_none_match=if_none_match)



Creates or updates a DNS zone. Does not modify DNS records within the zone.

### Example


```python
import openapi_client
from openapi_client.models.zone import Zone
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
    api_instance = openapi_client.ZonesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    zone_name = 'zone_name_example' # str | The name of the DNS zone (without a terminating dot).
    api_version = 'api_version_example' # str | Specifies the API version.
    subscription_id = 'subscription_id_example' # str | Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.
    parameters = openapi_client.Zone() # Zone | Parameters supplied to the CreateOrUpdate operation.
    if_match = 'if_match_example' # str | The etag of the DNS zone. Omit this value to always overwrite the current zone. Specify the last-seen etag value to prevent accidentally overwriting any concurrent changes. (optional)
    if_none_match = 'if_none_match_example' # str | Set to '*' to allow a new DNS zone to be created, but to prevent updating an existing zone. Other values will be ignored. (optional)

    try:
        api_response = api_instance.zones_create_or_update(resource_group_name, zone_name, api_version, subscription_id, parameters, if_match=if_match, if_none_match=if_none_match)
        print("The response of ZonesApi->zones_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ZonesApi->zones_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **zone_name** | **str**| The name of the DNS zone (without a terminating dot). | 
 **api_version** | **str**| Specifies the API version. | 
 **subscription_id** | **str**| Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription. | 
 **parameters** | [**Zone**](Zone.md)| Parameters supplied to the CreateOrUpdate operation. | 
 **if_match** | **str**| The etag of the DNS zone. Omit this value to always overwrite the current zone. Specify the last-seen etag value to prevent accidentally overwriting any concurrent changes. | [optional] 
 **if_none_match** | **str**| Set to &#39;*&#39; to allow a new DNS zone to be created, but to prevent updating an existing zone. Other values will be ignored. | [optional] 

### Return type

[**Zone**](Zone.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The DNS zone has been updated. |  -  |
**201** | The DNS zone has been created. |  -  |
**0** | Default response. It will be deserialized as per the Error definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **zones_delete**
> zones_delete(resource_group_name, zone_name, api_version, subscription_id, if_match=if_match)



Deletes a DNS zone. WARNING: All DNS records in the zone will also be deleted. This operation cannot be undone.

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
    api_instance = openapi_client.ZonesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    zone_name = 'zone_name_example' # str | The name of the DNS zone (without a terminating dot).
    api_version = 'api_version_example' # str | Specifies the API version.
    subscription_id = 'subscription_id_example' # str | Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.
    if_match = 'if_match_example' # str | The etag of the DNS zone. Omit this value to always delete the current zone. Specify the last-seen etag value to prevent accidentally deleting any concurrent changes. (optional)

    try:
        api_instance.zones_delete(resource_group_name, zone_name, api_version, subscription_id, if_match=if_match)
    except Exception as e:
        print("Exception when calling ZonesApi->zones_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **zone_name** | **str**| The name of the DNS zone (without a terminating dot). | 
 **api_version** | **str**| Specifies the API version. | 
 **subscription_id** | **str**| Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription. | 
 **if_match** | **str**| The etag of the DNS zone. Omit this value to always delete the current zone. Specify the last-seen etag value to prevent accidentally deleting any concurrent changes. | [optional] 

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
**200** | The DNS zone has been deleted. |  -  |
**202** | The DNS zone delete operation has been accepted and will complete asynchronously. |  -  |
**204** | The DNS zone was not found. |  -  |
**0** | Default response. It will be deserialized as per the Error definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **zones_get**
> Zone zones_get(resource_group_name, zone_name, api_version, subscription_id)



Gets a DNS zone. Retrieves the zone properties, but not the record sets within the zone.

### Example


```python
import openapi_client
from openapi_client.models.zone import Zone
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
    api_instance = openapi_client.ZonesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    zone_name = 'zone_name_example' # str | The name of the DNS zone (without a terminating dot).
    api_version = 'api_version_example' # str | Specifies the API version.
    subscription_id = 'subscription_id_example' # str | Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.

    try:
        api_response = api_instance.zones_get(resource_group_name, zone_name, api_version, subscription_id)
        print("The response of ZonesApi->zones_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ZonesApi->zones_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **zone_name** | **str**| The name of the DNS zone (without a terminating dot). | 
 **api_version** | **str**| Specifies the API version. | 
 **subscription_id** | **str**| Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription. | 

### Return type

[**Zone**](Zone.md)

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

# **zones_list**
> ZoneListResult zones_list(api_version, subscription_id, top=top)



Lists the DNS zones in all resource groups in a subscription.

### Example


```python
import openapi_client
from openapi_client.models.zone_list_result import ZoneListResult
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
    api_instance = openapi_client.ZonesApi(api_client)
    api_version = 'api_version_example' # str | Specifies the API version.
    subscription_id = 'subscription_id_example' # str | Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.
    top = 56 # int | The maximum number of DNS zones to return. If not specified, returns up to 100 zones. (optional)

    try:
        api_response = api_instance.zones_list(api_version, subscription_id, top=top)
        print("The response of ZonesApi->zones_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ZonesApi->zones_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Specifies the API version. | 
 **subscription_id** | **str**| Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription. | 
 **top** | **int**| The maximum number of DNS zones to return. If not specified, returns up to 100 zones. | [optional] 

### Return type

[**ZoneListResult**](ZoneListResult.md)

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

# **zones_list_by_resource_group**
> ZoneListResult zones_list_by_resource_group(resource_group_name, api_version, subscription_id, top=top)



Lists the DNS zones within a resource group.

### Example


```python
import openapi_client
from openapi_client.models.zone_list_result import ZoneListResult
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
    api_instance = openapi_client.ZonesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    api_version = 'api_version_example' # str | Specifies the API version.
    subscription_id = 'subscription_id_example' # str | Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.
    top = 56 # int | The maximum number of record sets to return. If not specified, returns up to 100 record sets. (optional)

    try:
        api_response = api_instance.zones_list_by_resource_group(resource_group_name, api_version, subscription_id, top=top)
        print("The response of ZonesApi->zones_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ZonesApi->zones_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **api_version** | **str**| Specifies the API version. | 
 **subscription_id** | **str**| Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription. | 
 **top** | **int**| The maximum number of record sets to return. If not specified, returns up to 100 record sets. | [optional] 

### Return type

[**ZoneListResult**](ZoneListResult.md)

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

# **zones_update**
> Zone zones_update(resource_group_name, zone_name, api_version, subscription_id, parameters, if_match=if_match)



Updates a DNS zone. Does not modify DNS records within the zone.

### Example


```python
import openapi_client
from openapi_client.models.zone import Zone
from openapi_client.models.zone_update import ZoneUpdate
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
    api_instance = openapi_client.ZonesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    zone_name = 'zone_name_example' # str | The name of the DNS zone (without a terminating dot).
    api_version = 'api_version_example' # str | Specifies the API version.
    subscription_id = 'subscription_id_example' # str | Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.
    parameters = openapi_client.ZoneUpdate() # ZoneUpdate | Parameters supplied to the Update operation.
    if_match = 'if_match_example' # str | The etag of the DNS zone. Omit this value to always overwrite the current zone. Specify the last-seen etag value to prevent accidentally overwriting any concurrent changes. (optional)

    try:
        api_response = api_instance.zones_update(resource_group_name, zone_name, api_version, subscription_id, parameters, if_match=if_match)
        print("The response of ZonesApi->zones_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ZonesApi->zones_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **zone_name** | **str**| The name of the DNS zone (without a terminating dot). | 
 **api_version** | **str**| Specifies the API version. | 
 **subscription_id** | **str**| Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription. | 
 **parameters** | [**ZoneUpdate**](ZoneUpdate.md)| Parameters supplied to the Update operation. | 
 **if_match** | **str**| The etag of the DNS zone. Omit this value to always overwrite the current zone. Specify the last-seen etag value to prevent accidentally overwriting any concurrent changes. | [optional] 

### Return type

[**Zone**](Zone.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The DNS zone has been updated. |  -  |
**0** | Default response. It will be deserialized as per the Error definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

