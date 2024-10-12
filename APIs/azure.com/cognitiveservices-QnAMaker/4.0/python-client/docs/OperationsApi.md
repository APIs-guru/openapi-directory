# openapi_client.OperationsApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**operations_get_details**](OperationsApi.md#operations_get_details) | **GET** /operations/{operationId} | Gets details of a specific long running operation.


# **operations_get_details**
> Operation operations_get_details(operation_id)

Gets details of a specific long running operation.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.operation import Operation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OperationsApi(api_client)
    operation_id = 'operation_id_example' # str | Operation id.

    try:
        # Gets details of a specific long running operation.
        api_response = api_instance.operations_get_details(operation_id)
        print("The response of OperationsApi->operations_get_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->operations_get_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **operation_id** | **str**| Operation id. | 

### Return type

[**Operation**](Operation.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Details of the long running operation. |  * RetryAfter - Indicates how long the client should wait before sending a follow up request. The header will be present only if the operation is running or has not started yet. <br>  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

