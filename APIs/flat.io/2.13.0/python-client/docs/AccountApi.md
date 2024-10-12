# openapi_client.AccountApi

All URIs are relative to *https://api.flat.io/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_authenticated_user**](AccountApi.md#get_authenticated_user) | **GET** /me | Get current user profile


# **get_authenticated_user**
> UserDetails get_authenticated_user(only_id=only_id)

Get current user profile

Get details about the current authenticated User. 

### Example

* OAuth Authentication (OAuth2):

```python
import openapi_client
from openapi_client.models.user_details import UserDetails
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flat.io/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flat.io/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    only_id = False # bool | Only return the user id (optional) (default to False)

    try:
        # Get current user profile
        api_response = api_instance.get_authenticated_user(only_id=only_id)
        print("The response of AccountApi->get_authenticated_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->get_authenticated_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **only_id** | **bool**| Only return the user id | [optional] [default to False]

### Return type

[**UserDetails**](UserDetails.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Current user details |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

