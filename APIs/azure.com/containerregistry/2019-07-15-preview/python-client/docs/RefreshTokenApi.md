# openapi_client.RefreshTokenApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_acr_refresh_token_from_exchange_0**](RefreshTokenApi.md#get_acr_refresh_token_from_exchange_0) | **POST** /oauth2/exchange | 


# **get_acr_refresh_token_from_exchange_0**
> RefreshToken get_acr_refresh_token_from_exchange_0(grant_type, service, tenant=tenant, refresh_token=refresh_token, access_token=access_token)



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
    api_instance = openapi_client.RefreshTokenApi(api_client)
    grant_type = 'grant_type_example' # str | Can take a value of access_token_refresh_token, or access_token, or refresh_token
    service = 'service_example' # str | Indicates the name of your Azure container registry.
    tenant = 'tenant_example' # str | AAD tenant associated to the AAD credentials. (optional)
    refresh_token = 'refresh_token_example' # str | AAD refresh token, mandatory when grant_type is access_token_refresh_token or refresh_token (optional)
    access_token = 'access_token_example' # str | AAD access token, mandatory when grant_type is access_token_refresh_token or access_token. (optional)

    try:
        api_response = api_instance.get_acr_refresh_token_from_exchange_0(grant_type, service, tenant=tenant, refresh_token=refresh_token, access_token=access_token)
        print("The response of RefreshTokenApi->get_acr_refresh_token_from_exchange_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RefreshTokenApi->get_acr_refresh_token_from_exchange_0: %s\n" % e)
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

