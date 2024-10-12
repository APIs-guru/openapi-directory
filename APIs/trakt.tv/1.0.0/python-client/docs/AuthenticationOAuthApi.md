# openapi_client.AuthenticationOAuthApi

All URIs are relative to *https://api.trakt.tv*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authorize_application**](AuthenticationOAuthApi.md#authorize_application) | **GET** /oauth/authorize | Authorize Application
[**exchange_refresh_token_for_access_token**](AuthenticationOAuthApi.md#exchange_refresh_token_for_access_token) | **POST** /oauth/token | Exchange refresh_token for access_token
[**revoke_an_access_token**](AuthenticationOAuthApi.md#revoke_an_access_token) | **POST** /oauth/revoke | Revoke an access_token


# **authorize_application**
> authorize_application(response_type, client_id, redirect_uri, state=state, body=body)

Authorize Application

Construct then redirect to this URL. The Trakt website will request permissions for your app, which the user needs to approve. If the user isn't signed into Trakt, it will ask them to do so. Send `signup=true` if you prefer the account sign up page to be the default.  **Note:** You should use the normal **https://trakt.tv** hostname when creating this URL and not the API URL.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthenticationOAuthApi(api_client)
    response_type = 'code' # str | Must be set to code.
    client_id = ' ' # str | Get this from your app settings.
    redirect_uri = ' ' # str | URI specified in your app settings.
    state = ' ' # str | State variable for CSRF purposes. (optional)
    body = 'body_example' # str | Default to the sign up page. (optional)

    try:
        # Authorize Application
        api_instance.authorize_application(response_type, client_id, redirect_uri, state=state, body=body)
    except Exception as e:
        print("Exception when calling AuthenticationOAuthApi->authorize_application: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **response_type** | **str**| Must be set to code. | 
 **client_id** | **str**| Get this from your app settings. | 
 **redirect_uri** | **str**| URI specified in your app settings. | 
 **state** | **str**| State variable for CSRF purposes. | [optional] 
 **body** | **str**| Default to the sign up page. | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **exchange_refresh_token_for_access_token**
> exchange_refresh_token_for_access_token(exchange_refresh_token_for_access_token_request=exchange_refresh_token_for_access_token_request)

Exchange refresh_token for access_token

Use the `refresh_token` to get a new `access_token` without asking the user to re-authenticate. The `access_token` is valid for 3 months before it needs to be refreshed again.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | `refresh_token` <span style=\"color:red;\">*</a> | string | Saved from the initial token method. | | `client_id` <span style=\"color:red;\">*</a> | string | Get this from your app settings. | | `client_secret` <span style=\"color:red;\">*</a> | string | Get this from your app settings. | | `redirect_uri` <span style=\"color:red;\">*</a> | string | URI specified in your app settings. | | `grant_type` <span style=\"color:red;\">* </a> | string | `refresh_token` |

### Example


```python
import openapi_client
from openapi_client.models.exchange_refresh_token_for_access_token_request import ExchangeRefreshTokenForAccessTokenRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthenticationOAuthApi(api_client)
    exchange_refresh_token_for_access_token_request = openapi_client.ExchangeRefreshTokenForAccessTokenRequest() # ExchangeRefreshTokenForAccessTokenRequest |  (optional)

    try:
        # Exchange refresh_token for access_token
        api_instance.exchange_refresh_token_for_access_token(exchange_refresh_token_for_access_token_request=exchange_refresh_token_for_access_token_request)
    except Exception as e:
        print("Exception when calling AuthenticationOAuthApi->exchange_refresh_token_for_access_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exchange_refresh_token_for_access_token_request** | [**ExchangeRefreshTokenForAccessTokenRequest**](ExchangeRefreshTokenForAccessTokenRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | If the &#x60;refresh_token&#x60; is valid, you&#39;ll get the &#x60;access_token&#x60; back. |  -  |
**401** | If the &#x60;refresh_token&#x60; is invalid, you&#39;ll get a &#x60;401&#x60; error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **revoke_an_access_token**
> revoke_an_access_token(revoke_an_access_token_request=revoke_an_access_token_request)

Revoke an access_token

An `access_token` can be revoked when a user signs out of their Trakt account in your app. This is not required, but might improve the user experience so the user doesn't have an unused app connection hanging around.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | `token` <span style=\"color:red;\">*</a> | string | A valid OAuth `access_token`. | | `client_id` <span style=\"color:red;\">*</a> | string | Get this from your app settings. | | `client_secret` <span style=\"color:red;\">*</a> | string | Get this from your app settings. |

### Example


```python
import openapi_client
from openapi_client.models.revoke_an_access_token_request import RevokeAnAccessTokenRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthenticationOAuthApi(api_client)
    revoke_an_access_token_request = openapi_client.RevokeAnAccessTokenRequest() # RevokeAnAccessTokenRequest |  (optional)

    try:
        # Revoke an access_token
        api_instance.revoke_an_access_token(revoke_an_access_token_request=revoke_an_access_token_request)
    except Exception as e:
        print("Exception when calling AuthenticationOAuthApi->revoke_an_access_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **revoke_an_access_token_request** | [**RevokeAnAccessTokenRequest**](RevokeAnAccessTokenRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

