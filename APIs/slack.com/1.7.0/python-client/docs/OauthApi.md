# openapi_client.OauthApi

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**oauth_access**](OauthApi.md#oauth_access) | **GET** /oauth.access | 
[**oauth_token**](OauthApi.md#oauth_token) | **GET** /oauth.token | 
[**oauth_v2_access_0**](OauthApi.md#oauth_v2_access_0) | **GET** /oauth.v2.access | 


# **oauth_access**
> DefaultSuccessTemplate oauth_access(client_id=client_id, client_secret=client_secret, code=code, redirect_uri=redirect_uri, single_channel=single_channel)



Exchanges a temporary OAuth verifier code for an access token.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.default_success_template import DefaultSuccessTemplate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://slack.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://slack.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OauthApi(api_client)
    client_id = 'client_id_example' # str | Issued when you created your application. (optional)
    client_secret = 'client_secret_example' # str | Issued when you created your application. (optional)
    code = 'code_example' # str | The `code` param returned via the OAuth callback. (optional)
    redirect_uri = 'redirect_uri_example' # str | This must match the originally submitted URI (if one was sent). (optional)
    single_channel = True # bool | Request the user to add your app only to a single channel. Only valid with a [legacy workspace app](https://api.slack.com/legacy-workspace-apps). (optional)

    try:
        api_response = api_instance.oauth_access(client_id=client_id, client_secret=client_secret, code=code, redirect_uri=redirect_uri, single_channel=single_channel)
        print("The response of OauthApi->oauth_access:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OauthApi->oauth_access: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_id** | **str**| Issued when you created your application. | [optional] 
 **client_secret** | **str**| Issued when you created your application. | [optional] 
 **code** | **str**| The &#x60;code&#x60; param returned via the OAuth callback. | [optional] 
 **redirect_uri** | **str**| This must match the originally submitted URI (if one was sent). | [optional] 
 **single_channel** | **bool**| Request the user to add your app only to a single channel. Only valid with a [legacy workspace app](https://api.slack.com/legacy-workspace-apps). | [optional] 

### Return type

[**DefaultSuccessTemplate**](DefaultSuccessTemplate.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful user token negotiation for a single scope |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **oauth_token**
> DefaultSuccessTemplate oauth_token(client_id=client_id, client_secret=client_secret, code=code, redirect_uri=redirect_uri, single_channel=single_channel)



Exchanges a temporary OAuth verifier code for a workspace token.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.default_success_template import DefaultSuccessTemplate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://slack.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://slack.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OauthApi(api_client)
    client_id = 'client_id_example' # str | Issued when you created your application. (optional)
    client_secret = 'client_secret_example' # str | Issued when you created your application. (optional)
    code = 'code_example' # str | The `code` param returned via the OAuth callback. (optional)
    redirect_uri = 'redirect_uri_example' # str | This must match the originally submitted URI (if one was sent). (optional)
    single_channel = True # bool | Request the user to add your app only to a single channel. (optional)

    try:
        api_response = api_instance.oauth_token(client_id=client_id, client_secret=client_secret, code=code, redirect_uri=redirect_uri, single_channel=single_channel)
        print("The response of OauthApi->oauth_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OauthApi->oauth_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_id** | **str**| Issued when you created your application. | [optional] 
 **client_secret** | **str**| Issued when you created your application. | [optional] 
 **code** | **str**| The &#x60;code&#x60; param returned via the OAuth callback. | [optional] 
 **redirect_uri** | **str**| This must match the originally submitted URI (if one was sent). | [optional] 
 **single_channel** | **bool**| Request the user to add your app only to a single channel. | [optional] 

### Return type

[**DefaultSuccessTemplate**](DefaultSuccessTemplate.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success example using a workspace app produces a very different kind of response |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **oauth_v2_access_0**
> DefaultSuccessTemplate oauth_v2_access_0(code, client_id=client_id, client_secret=client_secret, redirect_uri=redirect_uri)



Exchanges a temporary OAuth verifier code for an access token.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.default_success_template import DefaultSuccessTemplate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://slack.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://slack.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OauthApi(api_client)
    code = 'code_example' # str | The `code` param returned via the OAuth callback.
    client_id = 'client_id_example' # str | Issued when you created your application. (optional)
    client_secret = 'client_secret_example' # str | Issued when you created your application. (optional)
    redirect_uri = 'redirect_uri_example' # str | This must match the originally submitted URI (if one was sent). (optional)

    try:
        api_response = api_instance.oauth_v2_access_0(code, client_id=client_id, client_secret=client_secret, redirect_uri=redirect_uri)
        print("The response of OauthApi->oauth_v2_access_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OauthApi->oauth_v2_access_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| The &#x60;code&#x60; param returned via the OAuth callback. | 
 **client_id** | **str**| Issued when you created your application. | [optional] 
 **client_secret** | **str**| Issued when you created your application. | [optional] 
 **redirect_uri** | **str**| This must match the originally submitted URI (if one was sent). | [optional] 

### Return type

[**DefaultSuccessTemplate**](DefaultSuccessTemplate.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful token request with scopes for both a bot user and a user token |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

