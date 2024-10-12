# openapi_client.SoftwarePlanOperationsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**operations_list**](SoftwarePlanOperationsApi.md#operations_list) | **GET** /{scope}/providers/Microsoft.SoftwarePlan/operations | Get operations.


# **operations_list**
> OperationList operations_list(scope, api_version)

Get operations.

List all the operations.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.operation_list import OperationList
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
    api_instance = openapi_client.SoftwarePlanOperationsApi(api_client)
    scope = 'scope_example' # str | The scope at which the operation is performed. This is limited to Microsoft.Compute/virtualMachines and Microsoft.Compute/hostGroups/hosts for now
    api_version = 'api_version_example' # str | The api-version to be used by the service

    try:
        # Get operations.
        api_response = api_instance.operations_list(scope, api_version)
        print("The response of SoftwarePlanOperationsApi->operations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SoftwarePlanOperationsApi->operations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The scope at which the operation is performed. This is limited to Microsoft.Compute/virtualMachines and Microsoft.Compute/hostGroups/hosts for now | 
 **api_version** | **str**| The api-version to be used by the service | 

### Return type

[**OperationList**](OperationList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List all the operations. |  -  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

