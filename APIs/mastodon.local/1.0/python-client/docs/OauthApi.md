# openapi_client.OauthApi

All URIs are relative to *http://mastodon.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**oauth_authorize_get**](OauthApi.md#oauth_authorize_get) | **GET** /oauth/authorize | 
[**oauth_revoke_post**](OauthApi.md#oauth_revoke_post) | **POST** /oauth/revoke | 
[**oauth_token_post**](OauthApi.md#oauth_token_post) | **POST** /oauth/token | 


# **oauth_authorize_get**
> oauth_authorize_get(response_type, client_id, redirect_uri, scope=scope, force_login=force_login)



Displays an authorization form to the user. If approved, it will create and return an authorization code, then redirect to the desired redirect_uri, or show the authorization code if urn:ietf:wg:oauth:2.0:oob was requested. The authorization code can be used while requesting a token to obtain access to user-level methods.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://mastodon.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://mastodon.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OauthApi(api_client)
    response_type = 'response_type_example' # str | Should be set equal to code.
    client_id = 'client_id_example' # str | Client ID, obtained during app registration.
    redirect_uri = 'redirect_uri_example' # str | Set a URI to redirect the user to. If this parameter is set to urn:ietf:wg:oauth:2.0:oob then the authorization code will be shown instead. Must match one of the redirect URIs declared during app registration.
    scope = 'scope_example' # str | List of requested OAuth scopes, separated by spaces (or by pluses, if using query parameters). Must be a subset of scopes declared during app registration. If not provided, defaults to read. (optional)
    force_login = True # bool | Added in 2.6.0. Forces the user to re-login, which is necessary for authorizing with multiple accounts from the same instance. (optional)

    try:
        api_instance.oauth_authorize_get(response_type, client_id, redirect_uri, scope=scope, force_login=force_login)
    except Exception as e:
        print("Exception when calling OauthApi->oauth_authorize_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **response_type** | **str**| Should be set equal to code. | 
 **client_id** | **str**| Client ID, obtained during app registration. | 
 **redirect_uri** | **str**| Set a URI to redirect the user to. If this parameter is set to urn:ietf:wg:oauth:2.0:oob then the authorization code will be shown instead. Must match one of the redirect URIs declared during app registration. | 
 **scope** | **str**| List of requested OAuth scopes, separated by spaces (or by pluses, if using query parameters). Must be a subset of scopes declared during app registration. If not provided, defaults to read. | [optional] 
 **force_login** | **bool**| Added in 2.6.0. Forces the user to re-login, which is necessary for authorizing with multiple accounts from the same instance. | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The authorization code will be returned as a query parameter named code. |  -  |
**400** | If the authorization code is incorrect or has been used already, the request will fail. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **oauth_revoke_post**
> oauth_revoke_post(oauth_revoke_post_request=oauth_revoke_post_request)



Revoke an access token to make it no longer valid for use.

### Example


```python
import openapi_client
from openapi_client.models.oauth_revoke_post_request import OauthRevokePostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://mastodon.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://mastodon.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OauthApi(api_client)
    oauth_revoke_post_request = openapi_client.OauthRevokePostRequest() # OauthRevokePostRequest |  (optional)

    try:
        api_instance.oauth_revoke_post(oauth_revoke_post_request=oauth_revoke_post_request)
    except Exception as e:
        print("Exception when calling OauthApi->oauth_revoke_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oauth_revoke_post_request** | [**OauthRevokePostRequest**](OauthRevokePostRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | If you own the provided token, the API call will provide an empty response. This operation is idempotent, so calling this API multiple times will still return OK. |  -  |
**403** | If you provide a token you do not own, or no token at all, the API call will return a 403 error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **oauth_token_post**
> OauthTokenPost200Response oauth_token_post(oauth_token_post_request=oauth_token_post_request)



Returns an access token, to be used during API calls that are not public.

### Example


```python
import openapi_client
from openapi_client.models.oauth_token_post200_response import OauthTokenPost200Response
from openapi_client.models.oauth_token_post_request import OauthTokenPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://mastodon.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://mastodon.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OauthApi(api_client)
    oauth_token_post_request = openapi_client.OauthTokenPostRequest() # OauthTokenPostRequest |  (optional)

    try:
        api_response = api_instance.oauth_token_post(oauth_token_post_request=oauth_token_post_request)
        print("The response of OauthApi->oauth_token_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OauthApi->oauth_token_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oauth_token_post_request** | [**OauthTokenPostRequest**](OauthTokenPostRequest.md)|  | [optional] 

### Return type

[**OauthTokenPost200Response**](OauthTokenPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Store this access_token for later use with auth-required methods. The token should be passed as an HTTP Authorization header when making API calls, with the value Bearer access_token |  -  |
**400** | If you try to request a scope that was not included when registering the app, the request will fail. |  -  |
**401** | If client_id and client_secret do not match or are invalid, the request will fail. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

