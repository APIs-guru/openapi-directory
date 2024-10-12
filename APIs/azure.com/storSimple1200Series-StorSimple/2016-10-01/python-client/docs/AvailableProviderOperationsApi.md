# openapi_client.AvailableProviderOperationsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**available_provider_operations_list**](AvailableProviderOperationsApi.md#available_provider_operations_list) | **GET** /providers/Microsoft.StorSimple/operations | 


# **available_provider_operations_list**
> AvailableProviderOperations available_provider_operations_list(api_version)



List of AvailableProviderOperations

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.available_provider_operations import AvailableProviderOperations
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
    api_instance = openapi_client.AvailableProviderOperationsApi(api_client)
    api_version = 'api_version_example' # str | The api version

    try:
        api_response = api_instance.available_provider_operations_list(api_version)
        print("The response of AvailableProviderOperationsApi->available_provider_operations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AvailableProviderOperationsApi->available_provider_operations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The api version | 

### Return type

[**AvailableProviderOperations**](AvailableProviderOperations.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Default Response. It will be deserialized as per the Error definition specified in the schema. Exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

