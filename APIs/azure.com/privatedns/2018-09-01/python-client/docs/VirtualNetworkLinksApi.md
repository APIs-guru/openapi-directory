# openapi_client.VirtualNetworkLinksApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**virtual_network_links_create_or_update**](VirtualNetworkLinksApi.md#virtual_network_links_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateZoneName}/virtualNetworkLinks/{virtualNetworkLinkName} | 
[**virtual_network_links_delete**](VirtualNetworkLinksApi.md#virtual_network_links_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateZoneName}/virtualNetworkLinks/{virtualNetworkLinkName} | 
[**virtual_network_links_get**](VirtualNetworkLinksApi.md#virtual_network_links_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateZoneName}/virtualNetworkLinks/{virtualNetworkLinkName} | 
[**virtual_network_links_list**](VirtualNetworkLinksApi.md#virtual_network_links_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateZoneName}/virtualNetworkLinks | 
[**virtual_network_links_update**](VirtualNetworkLinksApi.md#virtual_network_links_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateZoneName}/virtualNetworkLinks/{virtualNetworkLinkName} | 


# **virtual_network_links_create_or_update**
> VirtualNetworkLink virtual_network_links_create_or_update(resource_group_name, private_zone_name, virtual_network_link_name, api_version, subscription_id, parameters, if_match=if_match, if_none_match=if_none_match)



Creates or updates a virtual network link to the specified Private DNS zone.

### Example


```python
import openapi_client
from openapi_client.models.virtual_network_link import VirtualNetworkLink
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
    api_instance = openapi_client.VirtualNetworkLinksApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    private_zone_name = 'private_zone_name_example' # str | The name of the Private DNS zone (without a terminating dot).
    virtual_network_link_name = 'virtual_network_link_name_example' # str | The name of the virtual network link.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.VirtualNetworkLink() # VirtualNetworkLink | Parameters supplied to the CreateOrUpdate operation.
    if_match = 'if_match_example' # str | The ETag of the virtual network link to the Private DNS zone. Omit this value to always overwrite the current virtual network link. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes. (optional)
    if_none_match = 'if_none_match_example' # str | Set to '*' to allow a new virtual network link to the Private DNS zone to be created, but to prevent updating an existing link. Other values will be ignored. (optional)

    try:
        api_response = api_instance.virtual_network_links_create_or_update(resource_group_name, private_zone_name, virtual_network_link_name, api_version, subscription_id, parameters, if_match=if_match, if_none_match=if_none_match)
        print("The response of VirtualNetworkLinksApi->virtual_network_links_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualNetworkLinksApi->virtual_network_links_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **private_zone_name** | **str**| The name of the Private DNS zone (without a terminating dot). | 
 **virtual_network_link_name** | **str**| The name of the virtual network link. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**VirtualNetworkLink**](VirtualNetworkLink.md)| Parameters supplied to the CreateOrUpdate operation. | 
 **if_match** | **str**| The ETag of the virtual network link to the Private DNS zone. Omit this value to always overwrite the current virtual network link. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes. | [optional] 
 **if_none_match** | **str**| Set to &#39;*&#39; to allow a new virtual network link to the Private DNS zone to be created, but to prevent updating an existing link. Other values will be ignored. | [optional] 

### Return type

[**VirtualNetworkLink**](VirtualNetworkLink.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The virtual network link to the Private DNS zone has been updated. |  -  |
**201** | The virtual network link to the Private DNS zone has been created. |  -  |
**202** | The operation to upsert virtual network link to the Private DNS zone has been accepted and will complete asynchronously. |  -  |
**0** | Default response. It will be deserialized as per the Error definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_network_links_delete**
> virtual_network_links_delete(resource_group_name, private_zone_name, virtual_network_link_name, api_version, subscription_id, if_match=if_match)



Deletes a virtual network link to the specified Private DNS zone. WARNING: In case of a registration virtual network, all auto-registered DNS records in the zone for the virtual network will also be deleted. This operation cannot be undone.

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
    api_instance = openapi_client.VirtualNetworkLinksApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    private_zone_name = 'private_zone_name_example' # str | The name of the Private DNS zone (without a terminating dot).
    virtual_network_link_name = 'virtual_network_link_name_example' # str | The name of the virtual network link.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    if_match = 'if_match_example' # str | The ETag of the virtual network link to the Private DNS zone. Omit this value to always delete the current zone. Specify the last-seen ETag value to prevent accidentally deleting any concurrent changes. (optional)

    try:
        api_instance.virtual_network_links_delete(resource_group_name, private_zone_name, virtual_network_link_name, api_version, subscription_id, if_match=if_match)
    except Exception as e:
        print("Exception when calling VirtualNetworkLinksApi->virtual_network_links_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **private_zone_name** | **str**| The name of the Private DNS zone (without a terminating dot). | 
 **virtual_network_link_name** | **str**| The name of the virtual network link. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **if_match** | **str**| The ETag of the virtual network link to the Private DNS zone. Omit this value to always delete the current zone. Specify the last-seen ETag value to prevent accidentally deleting any concurrent changes. | [optional] 

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
**200** | The virtual network link to the Private DNS zone has been deleted. |  -  |
**202** | The operation to delete virtual network link to the Private DNS zone has been accepted and will complete asynchronously. |  -  |
**204** | The virtual network link to the Private DNS zone was not found. |  -  |
**0** | Default response. It will be deserialized as per the Error definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_network_links_get**
> VirtualNetworkLink virtual_network_links_get(resource_group_name, private_zone_name, virtual_network_link_name, api_version, subscription_id)



Gets a virtual network link to the specified Private DNS zone.

### Example


```python
import openapi_client
from openapi_client.models.virtual_network_link import VirtualNetworkLink
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
    api_instance = openapi_client.VirtualNetworkLinksApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    private_zone_name = 'private_zone_name_example' # str | The name of the Private DNS zone (without a terminating dot).
    virtual_network_link_name = 'virtual_network_link_name_example' # str | The name of the virtual network link.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.virtual_network_links_get(resource_group_name, private_zone_name, virtual_network_link_name, api_version, subscription_id)
        print("The response of VirtualNetworkLinksApi->virtual_network_links_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualNetworkLinksApi->virtual_network_links_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **private_zone_name** | **str**| The name of the Private DNS zone (without a terminating dot). | 
 **virtual_network_link_name** | **str**| The name of the virtual network link. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**VirtualNetworkLink**](VirtualNetworkLink.md)

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

# **virtual_network_links_list**
> VirtualNetworkLinkListResult virtual_network_links_list(resource_group_name, private_zone_name, api_version, subscription_id, top=top)



Lists the virtual network links to the specified Private DNS zone.

### Example


```python
import openapi_client
from openapi_client.models.virtual_network_link_list_result import VirtualNetworkLinkListResult
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
    api_instance = openapi_client.VirtualNetworkLinksApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    private_zone_name = 'private_zone_name_example' # str | The name of the Private DNS zone (without a terminating dot).
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    top = 56 # int | The maximum number of virtual network links to return. If not specified, returns up to 100 virtual network links. (optional)

    try:
        api_response = api_instance.virtual_network_links_list(resource_group_name, private_zone_name, api_version, subscription_id, top=top)
        print("The response of VirtualNetworkLinksApi->virtual_network_links_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualNetworkLinksApi->virtual_network_links_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **private_zone_name** | **str**| The name of the Private DNS zone (without a terminating dot). | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **top** | **int**| The maximum number of virtual network links to return. If not specified, returns up to 100 virtual network links. | [optional] 

### Return type

[**VirtualNetworkLinkListResult**](VirtualNetworkLinkListResult.md)

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

# **virtual_network_links_update**
> VirtualNetworkLink virtual_network_links_update(resource_group_name, private_zone_name, virtual_network_link_name, api_version, subscription_id, parameters, if_match=if_match)



Updates a virtual network link to the specified Private DNS zone.

### Example


```python
import openapi_client
from openapi_client.models.virtual_network_link import VirtualNetworkLink
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
    api_instance = openapi_client.VirtualNetworkLinksApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    private_zone_name = 'private_zone_name_example' # str | The name of the Private DNS zone (without a terminating dot).
    virtual_network_link_name = 'virtual_network_link_name_example' # str | The name of the virtual network link.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.VirtualNetworkLink() # VirtualNetworkLink | Parameters supplied to the Update operation.
    if_match = 'if_match_example' # str | The ETag of the virtual network link to the Private DNS zone. Omit this value to always overwrite the current virtual network link. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes. (optional)

    try:
        api_response = api_instance.virtual_network_links_update(resource_group_name, private_zone_name, virtual_network_link_name, api_version, subscription_id, parameters, if_match=if_match)
        print("The response of VirtualNetworkLinksApi->virtual_network_links_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualNetworkLinksApi->virtual_network_links_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **private_zone_name** | **str**| The name of the Private DNS zone (without a terminating dot). | 
 **virtual_network_link_name** | **str**| The name of the virtual network link. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**VirtualNetworkLink**](VirtualNetworkLink.md)| Parameters supplied to the Update operation. | 
 **if_match** | **str**| The ETag of the virtual network link to the Private DNS zone. Omit this value to always overwrite the current virtual network link. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes. | [optional] 

### Return type

[**VirtualNetworkLink**](VirtualNetworkLink.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The virtual network link to the Private DNS zone has been updated. |  -  |
**202** | The operation to link virtual network link to Private DNS zone has been accepted and will complete asynchronously. |  -  |
**0** | Default response. It will be deserialized as per the Error definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

