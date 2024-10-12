# openapi_client.MachineLearningComputeOperationsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**machine_learning_compute_list_available_operations**](MachineLearningComputeOperationsApi.md#machine_learning_compute_list_available_operations) | **GET** /providers/Microsoft.MachineLearningCompute/operations | 


# **machine_learning_compute_list_available_operations**
> AvailableOperations machine_learning_compute_list_available_operations(api_version)



Gets all available operations.

### Example


```python
import openapi_client
from openapi_client.models.available_operations import AvailableOperations
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
    api_instance = openapi_client.MachineLearningComputeOperationsApi(api_client)
    api_version = 'api_version_example' # str | The version of the Microsoft.MachineLearningCompute resource provider API to use.

    try:
        api_response = api_instance.machine_learning_compute_list_available_operations(api_version)
        print("The response of MachineLearningComputeOperationsApi->machine_learning_compute_list_available_operations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MachineLearningComputeOperationsApi->machine_learning_compute_list_available_operations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the Microsoft.MachineLearningCompute resource provider API to use. | 

### Return type

[**AvailableOperations**](AvailableOperations.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

