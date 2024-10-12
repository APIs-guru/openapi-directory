# openapi_client.UsergroupsUsersApi

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usergroups_users_list**](UsergroupsUsersApi.md#usergroups_users_list) | **GET** /usergroups.users.list | 
[**usergroups_users_update**](UsergroupsUsersApi.md#usergroups_users_update) | **POST** /usergroups.users.update | 


# **usergroups_users_list**
> UsergroupsUsersListSchema usergroups_users_list(token, usergroup, include_disabled=include_disabled)



List all users in a User Group

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.usergroups_users_list_schema import UsergroupsUsersListSchema
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
    api_instance = openapi_client.UsergroupsUsersApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `usergroups:read`
    usergroup = 'usergroup_example' # str | The encoded ID of the User Group to update.
    include_disabled = True # bool | Allow results that involve disabled User Groups. (optional)

    try:
        api_response = api_instance.usergroups_users_list(token, usergroup, include_disabled=include_disabled)
        print("The response of UsergroupsUsersApi->usergroups_users_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsergroupsUsersApi->usergroups_users_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;usergroups:read&#x60; | 
 **usergroup** | **str**| The encoded ID of the User Group to update. | 
 **include_disabled** | **bool**| Allow results that involve disabled User Groups. | [optional] 

### Return type

[**UsergroupsUsersListSchema**](UsergroupsUsersListSchema.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Standard success response when used with a user token |  -  |
**0** | Standard failure response when used with an invalid token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usergroups_users_update**
> UsergroupsUsersUpdateSchema usergroups_users_update(token, usergroup, users, include_count=include_count)



Update the list of users for a User Group

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.usergroups_users_update_schema import UsergroupsUsersUpdateSchema
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
    api_instance = openapi_client.UsergroupsUsersApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `usergroups:write`
    usergroup = 'usergroup_example' # str | The encoded ID of the User Group to update.
    users = 'users_example' # str | A comma separated string of encoded user IDs that represent the entire list of users for the User Group.
    include_count = True # bool | Include the number of users in the User Group. (optional)

    try:
        api_response = api_instance.usergroups_users_update(token, usergroup, users, include_count=include_count)
        print("The response of UsergroupsUsersApi->usergroups_users_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsergroupsUsersApi->usergroups_users_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;usergroups:write&#x60; | 
 **usergroup** | **str**| The encoded ID of the User Group to update. | 
 **users** | **str**| A comma separated string of encoded user IDs that represent the entire list of users for the User Group. | 
 **include_count** | **bool**| Include the number of users in the User Group. | [optional] 

### Return type

[**UsergroupsUsersUpdateSchema**](UsergroupsUsersUpdateSchema.md)

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

