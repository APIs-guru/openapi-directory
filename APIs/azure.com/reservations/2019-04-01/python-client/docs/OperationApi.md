# openapi_client.OperationApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**operation_list**](OperationApi.md#operation_list) | **GET** /providers/Microsoft.Capacity/operations | Get operations.


# **operation_list**
> OperationList operation_list(api_version)

Get operations.

List all the operations.

### Example


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


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OperationApi(api_client)
    api_version = 'api_version_example' # str | Supported version for this document is 2019-04-01

    try:
        # Get operations.
        api_response = api_instance.operation_list(api_version)
        print("The response of OperationApi->operation_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationApi->operation_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Supported version for this document is 2019-04-01 | 

### Return type

[**OperationList**](OperationList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List all the operations. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

