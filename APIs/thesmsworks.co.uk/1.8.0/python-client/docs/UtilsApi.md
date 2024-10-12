# openapi_client.UtilsApi

All URIs are relative to *https://api.thesmsworks.co.uk/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**utils_errors_errorcode_get**](UtilsApi.md#utils_errors_errorcode_get) | **GET** /utils/errors/{errorcode} | 
[**utils_test_get**](UtilsApi.md#utils_test_get) | **GET** /utils/test | 


# **utils_errors_errorcode_get**
> ExtendedErrorModel utils_errors_errorcode_get(errorcode)



Returns a sample error object for the given error code. Useful for designing code to react to errors when they occur for real.

### Example

* Api Key Authentication (JWT):

```python
import openapi_client
from openapi_client.models.extended_error_model import ExtendedErrorModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.thesmsworks.co.uk/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.thesmsworks.co.uk/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: JWT
configuration.api_key['JWT'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['JWT'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UtilsApi(api_client)
    errorcode = 'errorcode_example' # str | The code of the error you would like returned

    try:
        api_response = api_instance.utils_errors_errorcode_get(errorcode)
        print("The response of UtilsApi->utils_errors_errorcode_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UtilsApi->utils_errors_errorcode_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **errorcode** | **str**| The code of the error you would like returned | 

### Return type

[**ExtendedErrorModel**](ExtendedErrorModel.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **utils_test_get**
> TestResponse utils_test_get()



Returns the customer ID to the caller

### Example

* Api Key Authentication (JWT):

```python
import openapi_client
from openapi_client.models.test_response import TestResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.thesmsworks.co.uk/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.thesmsworks.co.uk/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: JWT
configuration.api_key['JWT'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['JWT'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UtilsApi(api_client)

    try:
        api_response = api_instance.utils_test_get()
        print("The response of UtilsApi->utils_test_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UtilsApi->utils_test_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**TestResponse**](TestResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

