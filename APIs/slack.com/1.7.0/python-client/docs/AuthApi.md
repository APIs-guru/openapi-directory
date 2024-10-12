# openapi_client.AuthApi

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**auth_revoke**](AuthApi.md#auth_revoke) | **GET** /auth.revoke | 
[**auth_test**](AuthApi.md#auth_test) | **GET** /auth.test | 


# **auth_revoke**
> AuthRevokeSchema auth_revoke(token, test=test)



Revokes a token.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.auth_revoke_schema import AuthRevokeSchema
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
    api_instance = openapi_client.AuthApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `none`
    test = True # bool | Setting this parameter to `1` triggers a _testing mode_ where the specified token will not actually be revoked. (optional)

    try:
        api_response = api_instance.auth_revoke(token, test=test)
        print("The response of AuthApi->auth_revoke:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthApi->auth_revoke: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;none&#x60; | 
 **test** | **bool**| Setting this parameter to &#x60;1&#x60; triggers a _testing mode_ where the specified token will not actually be revoked. | [optional] 

### Return type

[**AuthRevokeSchema**](AuthRevokeSchema.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **auth_test**
> AuthTestSuccessSchema auth_test(token)



Checks authentication & identity.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.auth_test_success_schema import AuthTestSuccessSchema
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
    api_instance = openapi_client.AuthApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `none`

    try:
        api_response = api_instance.auth_test(token)
        print("The response of AuthApi->auth_test:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthApi->auth_test: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;none&#x60; | 

### Return type

[**AuthTestSuccessSchema**](AuthTestSuccessSchema.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Standard success response when used with a user token |  -  |
**0** | Standard failure response when used with an invalid token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

