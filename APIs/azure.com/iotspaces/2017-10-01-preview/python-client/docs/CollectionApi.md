# openapi_client.CollectionApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**io_t_spaces_list**](CollectionApi.md#io_t_spaces_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.IoTSpaces/Graph | 
[**io_t_spaces_list_by_resource_group**](CollectionApi.md#io_t_spaces_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTSpaces/Graph | 


# **io_t_spaces_list**
> IoTSpacesDescriptionListResult io_t_spaces_list(api_version, subscription_id)



Get all the IoTSpaces instances in a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.io_t_spaces_description_list_result import IoTSpacesDescriptionListResult
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
    api_instance = openapi_client.CollectionApi(api_client)
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.

    try:
        api_response = api_instance.io_t_spaces_list(api_version, subscription_id)
        print("The response of CollectionApi->io_t_spaces_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollectionApi->io_t_spaces_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The subscription identifier. | 

### Return type

[**IoTSpacesDescriptionListResult**](IoTSpacesDescriptionListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This is a synchronous operation. The body contains a JSON-serialized array of the metadata from all the IoTSpaces instances in the subscription. |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **io_t_spaces_list_by_resource_group**
> IoTSpacesDescriptionListResult io_t_spaces_list_by_resource_group(api_version, subscription_id, resource_group_name)



Get all the IoTSpaces instances in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.io_t_spaces_description_list_result import IoTSpacesDescriptionListResult
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
    api_instance = openapi_client.CollectionApi(api_client)
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the IoTSpaces instance.

    try:
        api_response = api_instance.io_t_spaces_list_by_resource_group(api_version, subscription_id, resource_group_name)
        print("The response of CollectionApi->io_t_spaces_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollectionApi->io_t_spaces_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the IoTSpaces instance. | 

### Return type

[**IoTSpacesDescriptionListResult**](IoTSpacesDescriptionListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This is a synchronous operation. The body contains a JSON-serialized array of the metadata from all the IoTSpaces instances in the resource group. |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

