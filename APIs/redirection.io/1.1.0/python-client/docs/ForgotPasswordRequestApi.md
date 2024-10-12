# openapi_client.ForgotPasswordRequestApi

All URIs are relative to *https://api.redirection.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**post_forgot_password_request_collection**](ForgotPasswordRequestApi.md#post_forgot_password_request_collection) | **POST** /users/forgot-password-request | Creates a ForgotPasswordRequest resource.


# **post_forgot_password_request_collection**
> ForgotPasswordRequest post_forgot_password_request_collection(forgot_password_request=forgot_password_request)

Creates a ForgotPasswordRequest resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.forgot_password_request import ForgotPasswordRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.redirection.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.redirection.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ForgotPasswordRequestApi(api_client)
    forgot_password_request = openapi_client.ForgotPasswordRequest() # ForgotPasswordRequest | The new ForgotPasswordRequest resource (optional)

    try:
        # Creates a ForgotPasswordRequest resource.
        api_response = api_instance.post_forgot_password_request_collection(forgot_password_request=forgot_password_request)
        print("The response of ForgotPasswordRequestApi->post_forgot_password_request_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ForgotPasswordRequestApi->post_forgot_password_request_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **forgot_password_request** | [**ForgotPasswordRequest**](ForgotPasswordRequest.md)| The new ForgotPasswordRequest resource | [optional] 

### Return type

[**ForgotPasswordRequest**](ForgotPasswordRequest.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/ld+json, application/json, text/html, text/csv
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | ForgotPasswordRequest resource created |  -  |
**400** | Invalid input |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

