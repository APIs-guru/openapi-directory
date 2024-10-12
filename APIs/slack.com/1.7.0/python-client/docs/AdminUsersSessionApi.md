# openapi_client.AdminUsersSessionApi

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**admin_users_session_invalidate**](AdminUsersSessionApi.md#admin_users_session_invalidate) | **POST** /admin.users.session.invalidate | 
[**admin_users_session_reset**](AdminUsersSessionApi.md#admin_users_session_reset) | **POST** /admin.users.session.reset | 


# **admin_users_session_invalidate**
> DefaultSuccessTemplate admin_users_session_invalidate(token, session_id, team_id)



Invalidate a single session for a user by session_id

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.default_success_template import DefaultSuccessTemplate
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
    api_instance = openapi_client.AdminUsersSessionApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `admin.users:write`
    session_id = 56 # int | 
    team_id = 'team_id_example' # str | ID of the team that the session belongs to

    try:
        api_response = api_instance.admin_users_session_invalidate(token, session_id, team_id)
        print("The response of AdminUsersSessionApi->admin_users_session_invalidate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminUsersSessionApi->admin_users_session_invalidate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.users:write&#x60; | 
 **session_id** | **int**|  | 
 **team_id** | **str**| ID of the team that the session belongs to | 

### Return type

[**DefaultSuccessTemplate**](DefaultSuccessTemplate.md)

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

# **admin_users_session_reset**
> DefaultSuccessTemplate admin_users_session_reset(token, user_id, mobile_only=mobile_only, web_only=web_only)



Wipes all valid sessions on all devices for a given user

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.default_success_template import DefaultSuccessTemplate
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
    api_instance = openapi_client.AdminUsersSessionApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `admin.users:write`
    user_id = 'user_id_example' # str | The ID of the user to wipe sessions for
    mobile_only = True # bool | Only expire mobile sessions (default: false) (optional)
    web_only = True # bool | Only expire web sessions (default: false) (optional)

    try:
        api_response = api_instance.admin_users_session_reset(token, user_id, mobile_only=mobile_only, web_only=web_only)
        print("The response of AdminUsersSessionApi->admin_users_session_reset:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminUsersSessionApi->admin_users_session_reset: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.users:write&#x60; | 
 **user_id** | **str**| The ID of the user to wipe sessions for | 
 **mobile_only** | **bool**| Only expire mobile sessions (default: false) | [optional] 
 **web_only** | **bool**| Only expire web sessions (default: false) | [optional] 

### Return type

[**DefaultSuccessTemplate**](DefaultSuccessTemplate.md)

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

