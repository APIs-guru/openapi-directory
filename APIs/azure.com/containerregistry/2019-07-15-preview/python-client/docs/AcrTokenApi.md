# openapi_client.AcrTokenApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_acr_access_token**](AcrTokenApi.md#get_acr_access_token) | **POST** /oauth2/token | 
[**get_acr_access_token_from_login**](AcrTokenApi.md#get_acr_access_token_from_login) | **GET** /oauth2/token | 
[**get_acr_refresh_token_from_exchange**](AcrTokenApi.md#get_acr_refresh_token_from_exchange) | **POST** /oauth2/exchange | 


# **get_acr_access_token**
> AccessToken get_acr_access_token(grant_type, service, scope, refresh_token)



Exchange ACR Refresh token for an ACR Access Token

### Example


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


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AcrTokenApi(api_client)
    grant_type = 'grant_type_example' # str | Grant type is expected to be refresh_token
    service = 'service_example' # str | Indicates the name of your Azure container registry.
    scope = 'scope_example' # str | Which is expected to be a valid scope, and can be specified more than once for multiple scope requests. You obtained this from the Www-Authenticate response header from the challenge.
    refresh_token = 'refresh_token_example' # str | Must be a valid ACR refresh token

    try:
        api_response = api_instance.get_acr_access_token(grant_type, service, scope, refresh_token)
        print("The response of AcrTokenApi->get_acr_access_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AcrTokenApi->get_acr_access_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grant_type** | **str**| Grant type is expected to be refresh_token | 
 **service** | **str**| Indicates the name of your Azure container registry. | 
 **scope** | **str**| Which is expected to be a valid scope, and can be specified more than once for multiple scope requests. You obtained this from the Www-Authenticate response header from the challenge. | 
 **refresh_token** | **str**| Must be a valid ACR refresh token | 

### Return type

[**AccessToken**](AccessToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Access token acquired |  -  |
**0** | ACR error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_acr_access_token_from_login**
> AccessToken get_acr_access_token_from_login(service, scope)



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
    api_instance = openapi_client.AcrTokenApi(api_client)
    service = 'service_example' # str | Indicates the name of your Azure container registry.
    scope = 'scope_example' # str | Expected to be a valid scope, and can be specified more than once for multiple scope requests. You can obtain this from the Www-Authenticate response header from the challenge.

    try:
        api_response = api_instance.get_acr_access_token_from_login(service, scope)
        print("The response of AcrTokenApi->get_acr_access_token_from_login:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AcrTokenApi->get_acr_access_token_from_login: %s\n" % e)
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

# **get_acr_refresh_token_from_exchange**
> RefreshToken get_acr_refresh_token_from_exchange(grant_type, service, tenant=tenant, refresh_token=refresh_token, access_token=access_token)



Exchange AAD tokens for an ACR refresh Token

### Example


```python
import openapi_client
from openapi_client.models.refresh_token import RefreshToken
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AcrTokenApi(api_client)
    grant_type = 'grant_type_example' # str | Can take a value of access_token_refresh_token, or access_token, or refresh_token
    service = 'service_example' # str | Indicates the name of your Azure container registry.
    tenant = 'tenant_example' # str | AAD tenant associated to the AAD credentials. (optional)
    refresh_token = 'refresh_token_example' # str | AAD refresh token, mandatory when grant_type is access_token_refresh_token or refresh_token (optional)
    access_token = 'access_token_example' # str | AAD access token, mandatory when grant_type is access_token_refresh_token or access_token. (optional)

    try:
        api_response = api_instance.get_acr_refresh_token_from_exchange(grant_type, service, tenant=tenant, refresh_token=refresh_token, access_token=access_token)
        print("The response of AcrTokenApi->get_acr_refresh_token_from_exchange:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AcrTokenApi->get_acr_refresh_token_from_exchange: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grant_type** | **str**| Can take a value of access_token_refresh_token, or access_token, or refresh_token | 
 **service** | **str**| Indicates the name of your Azure container registry. | 
 **tenant** | **str**| AAD tenant associated to the AAD credentials. | [optional] 
 **refresh_token** | **str**| AAD refresh token, mandatory when grant_type is access_token_refresh_token or refresh_token | [optional] 
 **access_token** | **str**| AAD access token, mandatory when grant_type is access_token_refresh_token or access_token. | [optional] 

### Return type

[**RefreshToken**](RefreshToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Refresh token acquired |  -  |
**0** | ACR error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

