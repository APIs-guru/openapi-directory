# openapi_client.OauthV2Api

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**oauth_v2_access**](OauthV2Api.md#oauth_v2_access) | **GET** /oauth.v2.access | 


# **oauth_v2_access**
> DefaultSuccessTemplate oauth_v2_access(code, client_id=client_id, client_secret=client_secret, redirect_uri=redirect_uri)



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
    api_instance = openapi_client.OauthV2Api(api_client)
    code = 'code_example' # str | The `code` param returned via the OAuth callback.
    client_id = 'client_id_example' # str | Issued when you created your application. (optional)
    client_secret = 'client_secret_example' # str | Issued when you created your application. (optional)
    redirect_uri = 'redirect_uri_example' # str | This must match the originally submitted URI (if one was sent). (optional)

    try:
        api_response = api_instance.oauth_v2_access(code, client_id=client_id, client_secret=client_secret, redirect_uri=redirect_uri)
        print("The response of OauthV2Api->oauth_v2_access:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OauthV2Api->oauth_v2_access: %s\n" % e)
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

