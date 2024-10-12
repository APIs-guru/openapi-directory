# openapi_client.GetTokenApi

All URIs are relative to *http://169.254.169.254/metadata*

Method | HTTP request | Description
------------- | ------------- | -------------
[**identity_get_token**](GetTokenApi.md#identity_get_token) | **GET** /identity/oauth2/token | 


# **identity_get_token**
> IdentityTokenResponse identity_get_token(metadata, resource, api_version, client_id=client_id, object_id=object_id, msi_res_id=msi_res_id, authority=authority, bypass_cache=bypass_cache)



Get a Token from Azure AD

### Example


```python
import openapi_client
from openapi_client.models.identity_token_response import IdentityTokenResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://169.254.169.254/metadata
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://169.254.169.254/metadata"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GetTokenApi(api_client)
    metadata = 'metadata_example' # str | This must be set to 'true'.
    resource = 'resource_example' # str | This is the urlencoded identifier URI of the sink resource for the requested Azure AD token. The resulting token contains the corresponding aud for this resource.
    api_version = 'api_version_example' # str | This is the API version to use.
    client_id = 'client_id_example' # str | This identifies, by Azure AD client id, a specific explicit identity to use when authenticating to Azure AD. Mutually exclusive with object_id and msi_res_id. (optional)
    object_id = 'object_id_example' # str | This identifies, by Azure AD object id, a specific explicit identity to use when authenticating to Azure AD. Mutually exclusive with client_id and msi_res_id. (optional)
    msi_res_id = 'msi_res_id_example' # str | This identifies, by urlencoded ARM resource id, a specific explicit identity to use when authenticating to Azure AD. Mutually exclusive with client_id and object_id. (optional)
    authority = 'authority_example' # str | This indicates the authority to request AAD tokens from. Defaults to the known authority of the identity to be used. (optional)
    bypass_cache = 'bypass_cache_example' # str | If provided, the value must be 'true'. This indicates to the server that the token must be retrieved from Azure AD and cannot be retrieved from an internal cache. (optional)

    try:
        api_response = api_instance.identity_get_token(metadata, resource, api_version, client_id=client_id, object_id=object_id, msi_res_id=msi_res_id, authority=authority, bypass_cache=bypass_cache)
        print("The response of GetTokenApi->identity_get_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GetTokenApi->identity_get_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **metadata** | **str**| This must be set to &#39;true&#39;. | 
 **resource** | **str**| This is the urlencoded identifier URI of the sink resource for the requested Azure AD token. The resulting token contains the corresponding aud for this resource. | 
 **api_version** | **str**| This is the API version to use. | 
 **client_id** | **str**| This identifies, by Azure AD client id, a specific explicit identity to use when authenticating to Azure AD. Mutually exclusive with object_id and msi_res_id. | [optional] 
 **object_id** | **str**| This identifies, by Azure AD object id, a specific explicit identity to use when authenticating to Azure AD. Mutually exclusive with client_id and msi_res_id. | [optional] 
 **msi_res_id** | **str**| This identifies, by urlencoded ARM resource id, a specific explicit identity to use when authenticating to Azure AD. Mutually exclusive with client_id and object_id. | [optional] 
 **authority** | **str**| This indicates the authority to request AAD tokens from. Defaults to the known authority of the identity to be used. | [optional] 
 **bypass_cache** | **str**| If provided, the value must be &#39;true&#39;. This indicates to the server that the token must be retrieved from Azure AD and cannot be retrieved from an internal cache. | [optional] 

### Return type

[**IdentityTokenResponse**](IdentityTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

