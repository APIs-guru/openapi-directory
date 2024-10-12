# openapi_client.OperationsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**operations_get**](OperationsApi.md#operations_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/locations/{regionId}/operationResults/{operationId} | Implements get of async operation
[**operations_list**](OperationsApi.md#operations_list) | **GET** /providers/Microsoft.VMwareCloudSimple/operations | Implements list of available operations


# **operations_get**
> OperationResource operations_get(subscription_id, api_version, region_id, referer, operation_id)

Implements get of async operation

Return an async operation

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.operation_resource import OperationResource
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
    api_instance = openapi_client.OperationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    api_version = 'api_version_example' # str | Client API version.
    region_id = 'region_id_example' # str | The region Id (westus, eastus)
    referer = 'referer_example' # str | referer url
    operation_id = 'operation_id_example' # str | operation id

    try:
        # Implements get of async operation
        api_response = api_instance.operations_get(subscription_id, api_version, region_id, referer, operation_id)
        print("The response of OperationsApi->operations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->operations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **api_version** | **str**| Client API version. | 
 **region_id** | **str**| The region Id (westus, eastus) | 
 **referer** | **str**| referer url | 
 **operation_id** | **str**| operation id | 

### Return type

[**OperationResource**](OperationResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**202** | Operation is still running |  * Retry-After -  <br>  * Location -  <br>  |
**204** | No Content |  -  |
**0** | General Error |  * Content-Type -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operations_list**
> AvailableOperationsListResponse operations_list(api_version)

Implements list of available operations

Return list of operations

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.available_operations_list_response import AvailableOperationsListResponse
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
    api_instance = openapi_client.OperationsApi(api_client)
    api_version = 'api_version_example' # str | Client API version.

    try:
        # Implements list of available operations
        api_response = api_instance.operations_list(api_version)
        print("The response of OperationsApi->operations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->operations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 

### Return type

[**AvailableOperationsListResponse**](AvailableOperationsListResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**0** | General Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

