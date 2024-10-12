# openapi_client.AuthApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**auth_token_create**](AuthApi.md#auth_token_create) | **POST** /auth/token | 
[**auth_token_refresh**](AuthApi.md#auth_token_refresh) | **POST** /auth/refresh | 


# **auth_token_create**
> AuthToken auth_token_create(auth_token_request=auth_token_request)



Authenticate an API user identified by `api_key` and `api_secret`.

### Example


```python
import openapi_client
from openapi_client.models.auth_token import AuthToken
from openapi_client.models.auth_token_request import AuthTokenRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthApi(api_client)
    auth_token_request = openapi_client.AuthTokenRequest() # AuthTokenRequest | AuthTokenRequest (optional)

    try:
        api_response = api_instance.auth_token_create(auth_token_request=auth_token_request)
        print("The response of AuthApi->auth_token_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthApi->auth_token_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **auth_token_request** | [**AuthTokenRequest**](AuthTokenRequest.md)| AuthTokenRequest | [optional] 

### Return type

[**AuthToken**](AuthToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | AuthToken |  -  |
**400** | ValidationError |  -  |
**401** | Authentication |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **auth_token_refresh**
> AuthToken auth_token_refresh(refresh_token_request=refresh_token_request)



Reauthenticate the API user, issue a new `access_token` and `refresh_token` pair by providing the `refresh_token` in the request body.

### Example


```python
import openapi_client
from openapi_client.models.auth_token import AuthToken
from openapi_client.models.refresh_token_request import RefreshTokenRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthApi(api_client)
    refresh_token_request = openapi_client.RefreshTokenRequest() # RefreshTokenRequest | RefreshTokenRequest (optional)

    try:
        api_response = api_instance.auth_token_refresh(refresh_token_request=refresh_token_request)
        print("The response of AuthApi->auth_token_refresh:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthApi->auth_token_refresh: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refresh_token_request** | [**RefreshTokenRequest**](RefreshTokenRequest.md)| RefreshTokenRequest | [optional] 

### Return type

[**AuthToken**](AuthToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | AuthToken |  -  |
**400** | ValidationError |  -  |
**401** | Authentication |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

