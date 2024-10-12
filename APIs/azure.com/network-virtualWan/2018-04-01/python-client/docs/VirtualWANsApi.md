# openapi_client.VirtualWANsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**virtual_hubs_update_tags**](VirtualWANsApi.md#virtual_hubs_update_tags) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualHubs/{virtualHubName} | 
[**virtual_wans_update_tags**](VirtualWANsApi.md#virtual_wans_update_tags) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualWans/{VirtualWANName} | 


# **virtual_hubs_update_tags**
> VirtualHub virtual_hubs_update_tags(subscription_id, resource_group_name, virtual_hub_name, api_version, virtual_hub_parameters)



Updates VirtualHub tags.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_hub import VirtualHub
from openapi_client.models.virtual_hubs_update_tags_request import VirtualHubsUpdateTagsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VirtualWANsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The resource group name of the VirtualHub.
    virtual_hub_name = 'virtual_hub_name_example' # str | The name of the VirtualHub.
    api_version = 'api_version_example' # str | Client API version.
    virtual_hub_parameters = openapi_client.VirtualHubsUpdateTagsRequest() # VirtualHubsUpdateTagsRequest | Parameters supplied to update VirtualHub tags.

    try:
        api_response = api_instance.virtual_hubs_update_tags(subscription_id, resource_group_name, virtual_hub_name, api_version, virtual_hub_parameters)
        print("The response of VirtualWANsApi->virtual_hubs_update_tags:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualWANsApi->virtual_hubs_update_tags: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The resource group name of the VirtualHub. | 
 **virtual_hub_name** | **str**| The name of the VirtualHub. | 
 **api_version** | **str**| Client API version. | 
 **virtual_hub_parameters** | [**VirtualHubsUpdateTagsRequest**](VirtualHubsUpdateTagsRequest.md)| Parameters supplied to update VirtualHub tags. | 

### Return type

[**VirtualHub**](VirtualHub.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. Returns the details of the VirtualHub updated. |  -  |
**201** | Request received successfully. Returns the details of the VirtualHub updated. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_wans_update_tags**
> VirtualWAN virtual_wans_update_tags(subscription_id, resource_group_name, virtual_wan_name, api_version, wan_parameters)



Updates a VirtualWAN tags.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_hubs_update_tags_request import VirtualHubsUpdateTagsRequest
from openapi_client.models.virtual_wan import VirtualWAN
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VirtualWANsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The resource group name of the VirtualWan.
    virtual_wan_name = 'virtual_wan_name_example' # str | The name of the VirtualWAN being updated.
    api_version = 'api_version_example' # str | Client API version.
    wan_parameters = openapi_client.VirtualHubsUpdateTagsRequest() # VirtualHubsUpdateTagsRequest | Parameters supplied to Update VirtualWAN tags.

    try:
        api_response = api_instance.virtual_wans_update_tags(subscription_id, resource_group_name, virtual_wan_name, api_version, wan_parameters)
        print("The response of VirtualWANsApi->virtual_wans_update_tags:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualWANsApi->virtual_wans_update_tags: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The resource group name of the VirtualWan. | 
 **virtual_wan_name** | **str**| The name of the VirtualWAN being updated. | 
 **api_version** | **str**| Client API version. | 
 **wan_parameters** | [**VirtualHubsUpdateTagsRequest**](VirtualHubsUpdateTagsRequest.md)| Parameters supplied to Update VirtualWAN tags. | 

### Return type

[**VirtualWAN**](VirtualWAN.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. Returns the details of the VirtualWAN updated. |  -  |
**201** | Request received successfully. Returns the details of the VirtualWAN updated. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

