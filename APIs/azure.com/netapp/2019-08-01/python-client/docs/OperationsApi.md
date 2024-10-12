# openapi_client.OperationsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**operations_list**](OperationsApi.md#operations_list) | **GET** /providers/Microsoft.NetApp/operations | Describes the Resource Provider


# **operations_list**
> OperationListResult operations_list(api_version)

Describes the Resource Provider

Lists all of the available Microsoft.NetApp Rest API operations

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.operation_list_result import OperationListResult
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
    api_version = '2019-08-01' # str | Version of the API to be used with the client request. (default to '2019-08-01')

    try:
        # Describes the Resource Provider
        api_response = api_instance.operations_list(api_version)
        print("The response of OperationsApi->operations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->operations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. | [default to &#39;2019-08-01&#39;]

### Return type

[**OperationListResult**](OperationListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

