# openapi_client.UserSavingsApi

All URIs are relative to *https://api.mastercard.com/plo/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersavings_get**](UserSavingsApi.md#usersavings_get) | **GET** /usersavings | Returns Savings for the User


# **usersavings_get**
> UserSavingsResponse usersavings_get(fid, user_token)

Returns Savings for the User

This resource returns the accumulated and potential savings for a Personalized Offers user. 

### Example


```python
import openapi_client
from openapi_client.models.user_savings_response import UserSavingsResponse
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
    api_instance = openapi_client.UserSavingsApi(api_client)
    fid = '999999' # str | Financial Institution Identifier. Code that specifies the platform and configuration instance, provided by Mastercard during implementation.
    user_token = 'user_token_example' # str | Session identifier as returned by the UserToken resource.

    try:
        # Returns Savings for the User
        api_response = api_instance.usersavings_get(fid, user_token)
        print("The response of UserSavingsApi->usersavings_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserSavingsApi->usersavings_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fid** | **str**| Financial Institution Identifier. Code that specifies the platform and configuration instance, provided by Mastercard during implementation. | 
 **user_token** | **str**| Session identifier as returned by the UserToken resource. | 

### Return type

[**UserSavingsResponse**](UserSavingsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This resource returns the accumulated and potential savings for a Personalized Offers user. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

