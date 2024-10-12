# openapi_client.UserLoginApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**access_tokens_get_from_login_1**](UserLoginApi.md#access_tokens_get_from_login_1) | **GET** /oauth2/token | 


# **access_tokens_get_from_login_1**
> AccessToken access_tokens_get_from_login_1(service, scope)



Exchange Username, Password and Scope an ACR Access Token

### Example

* Basic Authentication (registry_auth):

```python
import openapi_client
from openapi_client.models.access_token import AccessToken
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: registry_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserLoginApi(api_client)
    service = 'service_example' # str | Indicates the name of your Azure container registry.
    scope = 'scope_example' # str | Expected to be a valid scope, and can be specified more than once for multiple scope requests. You can obtain this from the Www-Authenticate response header from the challenge.

    try:
        api_response = api_instance.access_tokens_get_from_login_1(service, scope)
        print("The response of UserLoginApi->access_tokens_get_from_login_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserLoginApi->access_tokens_get_from_login_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service** | **str**| Indicates the name of your Azure container registry. | 
 **scope** | **str**| Expected to be a valid scope, and can be specified more than once for multiple scope requests. You can obtain this from the Www-Authenticate response header from the challenge. | 

### Return type

[**AccessToken**](AccessToken.md)

### Authorization

[registry_auth](../README.md#registry_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Access token acquired |  -  |
**0** | ACR error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

