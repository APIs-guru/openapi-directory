# openapi_client.AuthenticationApi

All URIs are relative to *https://api.sakari.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**auth_token**](AuthenticationApi.md#auth_token) | **POST** /oauth2/token | Get token for accessing APIs


# **auth_token**
> TokenResponse auth_token(token_request=token_request)

Get token for accessing APIs

### Example


```python
import openapi_client
from openapi_client.models.token_request import TokenRequest
from openapi_client.models.token_response import TokenResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.sakari.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.sakari.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthenticationApi(api_client)
    token_request = openapi_client.TokenRequest() # TokenRequest |  (optional)

    try:
        # Get token for accessing APIs
        api_response = api_instance.auth_token(token_request=token_request)
        print("The response of AuthenticationApi->auth_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthenticationApi->auth_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token_request** | [**TokenRequest**](TokenRequest.md)|  | [optional] 

### Return type

[**TokenResponse**](TokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

