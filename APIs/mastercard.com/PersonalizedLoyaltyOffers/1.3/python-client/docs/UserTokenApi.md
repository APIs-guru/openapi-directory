# openapi_client.UserTokenApi

All URIs are relative to *https://api.mastercard.com/plo/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usertoken_get**](UserTokenApi.md#usertoken_get) | **GET** /usertoken | Returns User Session Token


# **usertoken_get**
> UserTokenResponse usertoken_get(fid, auth_info)

Returns User Session Token

This resource creates the user session. It must be called prior to any other API calls for the specified user. The Token value does not expire. 

### Example


```python
import openapi_client
from openapi_client.models.user_token_response import UserTokenResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mastercard.com/plo/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mastercard.com/plo/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserTokenApi(api_client)
    fid = '999999' # str | Financial Institution Identifier. Code that specifies the platform and configuration instance, provided by Mastercard during implementation.
    auth_info = 'auth_info_example' # str | Authorization Information. AES 128-bit encrypted concatenation of \"User ID as specified in enrollment:FI ID as provided by Mastercard:current Unix time\". Key exchange and establishment of maintenance procedures occur during implementation.

    try:
        # Returns User Session Token
        api_response = api_instance.usertoken_get(fid, auth_info)
        print("The response of UserTokenApi->usertoken_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserTokenApi->usertoken_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fid** | **str**| Financial Institution Identifier. Code that specifies the platform and configuration instance, provided by Mastercard during implementation. | 
 **auth_info** | **str**| Authorization Information. AES 128-bit encrypted concatenation of \&quot;User ID as specified in enrollment:FI ID as provided by Mastercard:current Unix time\&quot;. Key exchange and establishment of maintenance procedures occur during implementation. | 

### Return type

[**UserTokenResponse**](UserTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This resource returns the user session token (UserToken), which is a required input to all other API resources. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

