# openapi_client.AuthApi

All URIs are relative to *https://api.nativeads.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**auth_default_login_post**](AuthApi.md#auth_default_login_post) | **POST** /auth/default/login | 


# **auth_default_login_post**
> AuthResponse auth_default_login_post(username, password)



Returns Native Ads Publisher API token

### Example


```python
import openapi_client
from openapi_client.models.auth_response import AuthResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nativeads.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nativeads.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthApi(api_client)
    username = 'username_example' # str | Native Ads Publisher username
    password = 'password_example' # str | Native Ads Publisher password

    try:
        api_response = api_instance.auth_default_login_post(username, password)
        print("The response of AuthApi->auth_default_login_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthApi->auth_default_login_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| Native Ads Publisher username | 
 **password** | **str**| Native Ads Publisher password | 

### Return type

[**AuthResponse**](AuthResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | authentication response |  -  |
**400** | error message |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

