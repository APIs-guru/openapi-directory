# openapi_client.UsersProfileApi

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**users_profile_get**](UsersProfileApi.md#users_profile_get) | **GET** /users.profile.get | 
[**users_profile_set**](UsersProfileApi.md#users_profile_set) | **POST** /users.profile.set | 


# **users_profile_get**
> UsersProfileGetSchema users_profile_get(token, include_labels=include_labels, user=user)



Retrieves a user's profile information.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.users_profile_get_schema import UsersProfileGetSchema
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
    api_instance = openapi_client.UsersProfileApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `users.profile:read`
    include_labels = True # bool | Include labels for each ID in custom profile fields (optional)
    user = 'user_example' # str | User to retrieve profile info for (optional)

    try:
        api_response = api_instance.users_profile_get(token, include_labels=include_labels, user=user)
        print("The response of UsersProfileApi->users_profile_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersProfileApi->users_profile_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;users.profile:read&#x60; | 
 **include_labels** | **bool**| Include labels for each ID in custom profile fields | [optional] 
 **user** | **str**| User to retrieve profile info for | [optional] 

### Return type

[**UsersProfileGetSchema**](UsersProfileGetSchema.md)

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

# **users_profile_set**
> UsersProfileSetSchema users_profile_set(token, name=name, profile=profile, user=user, value=value)



Set the profile information for a user.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.users_profile_set_schema import UsersProfileSetSchema
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
    api_instance = openapi_client.UsersProfileApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `users.profile:write`
    name = 'name_example' # str | Name of a single key to set. Usable only if `profile` is not passed. (optional)
    profile = 'profile_example' # str | Collection of key:value pairs presented as a URL-encoded JSON hash. At most 50 fields may be set. Each field name is limited to 255 characters. (optional)
    user = 'user_example' # str | ID of user to change. This argument may only be specified by team admins on paid teams. (optional)
    value = 'value_example' # str | Value to set a single key to. Usable only if `profile` is not passed. (optional)

    try:
        api_response = api_instance.users_profile_set(token, name=name, profile=profile, user=user, value=value)
        print("The response of UsersProfileApi->users_profile_set:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersProfileApi->users_profile_set: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;users.profile:write&#x60; | 
 **name** | **str**| Name of a single key to set. Usable only if &#x60;profile&#x60; is not passed. | [optional] 
 **profile** | **str**| Collection of key:value pairs presented as a URL-encoded JSON hash. At most 50 fields may be set. Each field name is limited to 255 characters. | [optional] 
 **user** | **str**| ID of user to change. This argument may only be specified by team admins on paid teams. | [optional] 
 **value** | **str**| Value to set a single key to. Usable only if &#x60;profile&#x60; is not passed. | [optional] 

### Return type

[**UsersProfileSetSchema**](UsersProfileSetSchema.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

