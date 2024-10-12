# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**available_service_aliases_list**](DefaultApi.md#available_service_aliases_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Network/locations/{location}/availableServiceAliases | 
[**available_service_aliases_list_by_resource_group**](DefaultApi.md#available_service_aliases_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/locations/{location}/availableServiceAliases | 


# **available_service_aliases_list**
> AvailableServiceAliasesResult available_service_aliases_list(location, subscription_id, api_version)



Gets all available service aliases for this subscription in this region.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.available_service_aliases_result import AvailableServiceAliasesResult
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
    api_instance = openapi_client.DefaultApi(api_client)
    location = 'location_example' # str | The location.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API version.

    try:
        api_response = api_instance.available_service_aliases_list(location, subscription_id, api_version)
        print("The response of DefaultApi->available_service_aliases_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->available_service_aliases_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **str**| The location. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API version. | 

### Return type

[**AvailableServiceAliasesResult**](AvailableServiceAliasesResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. Returns all available service aliases for the subscription in the region. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **available_service_aliases_list_by_resource_group**
> AvailableServiceAliasesResult available_service_aliases_list_by_resource_group(resource_group_name, location, subscription_id, api_version)



Gets all available service aliases for this resource group in this region.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.available_service_aliases_result import AvailableServiceAliasesResult
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
    api_instance = openapi_client.DefaultApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    location = 'location_example' # str | The location.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API version.

    try:
        api_response = api_instance.available_service_aliases_list_by_resource_group(resource_group_name, location, subscription_id, api_version)
        print("The response of DefaultApi->available_service_aliases_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->available_service_aliases_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **location** | **str**| The location. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API version. | 

### Return type

[**AvailableServiceAliasesResult**](AvailableServiceAliasesResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. Returns all available service aliases for the resource group in the region. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

