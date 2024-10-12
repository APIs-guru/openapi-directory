# openapi_client.AuthenticationApi

All URIs are relative to *http://uebermaps.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authentication_post**](AuthenticationApi.md#authentication_post) | **POST** /authentication | Sign in user


# **authentication_post**
> UserFullProfile authentication_post(user)

Sign in user

Sign in user. Wrap authentication parameters in [user].

### Example


```python
import openapi_client
from openapi_client.models.user_authentication import UserAuthentication
from openapi_client.models.user_full_profile import UserFullProfile
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://uebermaps.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://uebermaps.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthenticationApi(api_client)
    user = openapi_client.UserAuthentication() # UserAuthentication | user authentication attributes

    try:
        # Sign in user
        api_response = api_instance.authentication_post(user)
        print("The response of AuthenticationApi->authentication_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthenticationApi->authentication_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**UserAuthentication**](UserAuthentication.md)| user authentication attributes | 

### Return type

[**UserFullProfile**](UserFullProfile.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains user data including authentication token for subsequent requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

