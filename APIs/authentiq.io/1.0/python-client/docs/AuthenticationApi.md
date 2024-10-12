# openapi_client.AuthenticationApi

All URIs are relative to *https://connect.authentiq.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authorize**](AuthenticationApi.md#authorize) | **GET** /authorize | Authenticate a user
[**token**](AuthenticationApi.md#token) | **POST** /token | Obtain an ID Token
[**user_info**](AuthenticationApi.md#user_info) | **GET** /userinfo | Retrieve a user profile


# **authorize**
> authorize(client_id, response_type, scope, redirect_uri, state, response_mode=response_mode, nonce=nonce, display=display, prompt=prompt, max_age=max_age, ui_locales=ui_locales)

Authenticate a user

Start a session with Authentiq Connect to authenticate a user.  ``` GET https://connect.authentiq.io/authorize?client_id=<your-client-id>&response_type=code+id_token&scope=openid+email&redirect_uri=<your-redirect-uri>&state=0123456789 ```  This endpoint also supports the POST method. 

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.authentiq.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.authentiq.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthenticationApi(api_client)
    client_id = 'client_id_example' # str | A client ID obtained from the [Dashboard](https://dashboard.authentiq.com/). 
    response_type = 'response_type_example' # str | The OIDC response type to use for this authentication flow. Valid choices are `code`, `id_token`, `token`, `token id_token`, `code id_token` `code token` and `code token id_token`, but a client can be configured with a more restricted set. 
    scope = 'scope_example' # str | The space-separated identity claims to request from the end-user. Always include `openid` as a scope for compatibility with OIDC. 
    redirect_uri = 'redirect_uri_example' # str | The location to redirect to after (un)successful authentication. See OIDC for the parameters passed in the query string (`response_mode=query`) or as fragments (`response_mode=fragment`). Unless the client is in test-mode this must be one of the registered redirect URLs. 
    state = 'state_example' # str | An opaque string that will be passed back to the redirect URL and therefore can be used to communicate client side state and prevent CSRF attacks. 
    response_mode = 'response_mode_example' # str | Whether to append parameters to the redirect URL in the query string (`query`) or as fragments (`fragment`). This option usually has a sensible default for each of the response types.  (optional)
    nonce = 'nonce_example' # str | An nonce provided by the client (and opaque to Authentiq Connect) that will be included in any ID Token generated for this session. Clients should use the nonce to mitigate replay attacks.  (optional)
    display = 'page' # str | The authentication display mode, which can be one of `page`, `popup` or `modal`. Defaults to `page`.  (optional) (default to 'page')
    prompt = 'login' # str | Space-delimited, case sensitive list of ASCII string values that specifies whether the Authorization Server prompts the End-User for reauthentication and consent. The supported values are: `none`, `login`, `consent`. If `consent` the end-user is asked to (re)confirm what claims they share. Use `none` to check for an active session.  (optional) (default to 'login')
    max_age = 0 # int | Specifies the allowable elapsed time in seconds since the last time the end-user was actively authenticated.  (optional) (default to 0)
    ui_locales = 'ui_locales_example' # str | Specifies the preferred language to use on the authorization page, as a space-separated list of BCP47 language tags. Ignored at the moment.  (optional)

    try:
        # Authenticate a user
        api_instance.authorize(client_id, response_type, scope, redirect_uri, state, response_mode=response_mode, nonce=nonce, display=display, prompt=prompt, max_age=max_age, ui_locales=ui_locales)
    except Exception as e:
        print("Exception when calling AuthenticationApi->authorize: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_id** | **str**| A client ID obtained from the [Dashboard](https://dashboard.authentiq.com/).  | 
 **response_type** | **str**| The OIDC response type to use for this authentication flow. Valid choices are &#x60;code&#x60;, &#x60;id_token&#x60;, &#x60;token&#x60;, &#x60;token id_token&#x60;, &#x60;code id_token&#x60; &#x60;code token&#x60; and &#x60;code token id_token&#x60;, but a client can be configured with a more restricted set.  | 
 **scope** | **str**| The space-separated identity claims to request from the end-user. Always include &#x60;openid&#x60; as a scope for compatibility with OIDC.  | 
 **redirect_uri** | **str**| The location to redirect to after (un)successful authentication. See OIDC for the parameters passed in the query string (&#x60;response_mode&#x3D;query&#x60;) or as fragments (&#x60;response_mode&#x3D;fragment&#x60;). Unless the client is in test-mode this must be one of the registered redirect URLs.  | 
 **state** | **str**| An opaque string that will be passed back to the redirect URL and therefore can be used to communicate client side state and prevent CSRF attacks.  | 
 **response_mode** | **str**| Whether to append parameters to the redirect URL in the query string (&#x60;query&#x60;) or as fragments (&#x60;fragment&#x60;). This option usually has a sensible default for each of the response types.  | [optional] 
 **nonce** | **str**| An nonce provided by the client (and opaque to Authentiq Connect) that will be included in any ID Token generated for this session. Clients should use the nonce to mitigate replay attacks.  | [optional] 
 **display** | **str**| The authentication display mode, which can be one of &#x60;page&#x60;, &#x60;popup&#x60; or &#x60;modal&#x60;. Defaults to &#x60;page&#x60;.  | [optional] [default to &#39;page&#39;]
 **prompt** | **str**| Space-delimited, case sensitive list of ASCII string values that specifies whether the Authorization Server prompts the End-User for reauthentication and consent. The supported values are: &#x60;none&#x60;, &#x60;login&#x60;, &#x60;consent&#x60;. If &#x60;consent&#x60; the end-user is asked to (re)confirm what claims they share. Use &#x60;none&#x60; to check for an active session.  | [optional] [default to &#39;login&#39;]
 **max_age** | **int**| Specifies the allowable elapsed time in seconds since the last time the end-user was actively authenticated.  | [optional] [default to 0]
 **ui_locales** | **str**| Specifies the preferred language to use on the authorization page, as a space-separated list of BCP47 language tags. Ignored at the moment.  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**302** | A successful or erroneous authentication response.  |  -  |
**303** | *Sign in with Authentiq* page, popup or modal.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **token**
> Token token(client_id, client_secret, code, grant_type, redirect_uri, authorization=authorization)

Obtain an ID Token

Exchange en authorization code for an ID Token or Access Token.  This endpoint supports both `client_secret_basic` (default) and `client_secret_basic` authentication methods, as specified by the client's `token_endpoint_auth_method`. 

### Example


```python
import openapi_client
from openapi_client.models.token import Token
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.authentiq.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.authentiq.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthenticationApi(api_client)
    client_id = 'client_id_example' # str | The registered client ID. 
    client_secret = 'client_secret_example' # str | The registered client ID secret. 
    code = 'code_example' # str | The authorization code previously obtained from the Authentication endpoint. 
    grant_type = 'grant_type_example' # str | The authorization grant type, must be `authorization_code`. 
    redirect_uri = 'redirect_uri_example' # str | The redirect URL that was used previously with the Authentication endpoint. 
    authorization = 'authorization_example' # str | HTTP Basic authorization header.  (optional)

    try:
        # Obtain an ID Token
        api_response = api_instance.token(client_id, client_secret, code, grant_type, redirect_uri, authorization=authorization)
        print("The response of AuthenticationApi->token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthenticationApi->token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_id** | **str**| The registered client ID.  | 
 **client_secret** | **str**| The registered client ID secret.  | 
 **code** | **str**| The authorization code previously obtained from the Authentication endpoint.  | 
 **grant_type** | **str**| The authorization grant type, must be &#x60;authorization_code&#x60;.  | 
 **redirect_uri** | **str**| The redirect URL that was used previously with the Authentication endpoint.  | 
 **authorization** | **str**| HTTP Basic authorization header.  | [optional] 

### Return type

[**Token**](Token.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/problem+json, application/x-www-form-urlencoded, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Token response |  -  |
**400** | OAuth 2.0 error response |  -  |
**401** | OAuth 2.0 error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_info**
> UserInfo user_info()

Retrieve a user profile

Use this endpoint to retrieve a user's profile in case you are unable to parse an ID Token or you've not already obtained enough details from the ID Token via the Token Endpoint. 

### Example

* OAuth Authentication (oauth_code):
* OAuth Authentication (oauth_implicit):

```python
import openapi_client
from openapi_client.models.user_info import UserInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.authentiq.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.authentiq.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthenticationApi(api_client)

    try:
        # Retrieve a user profile
        api_response = api_instance.user_info()
        print("The response of AuthenticationApi->user_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthenticationApi->user_info: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**UserInfo**](UserInfo.md)

### Authorization

[oauth_code](../README.md#oauth_code), [oauth_implicit](../README.md#oauth_implicit)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json, application/x-www-form-urlencoded, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | UserInfo response |  -  |
**401** | OAuth 2.0 error response |  -  |
**0** | OAuth 2.0 error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

