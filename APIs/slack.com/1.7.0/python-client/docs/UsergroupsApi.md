# openapi_client.UsergroupsApi

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usergroups_create**](UsergroupsApi.md#usergroups_create) | **POST** /usergroups.create | 
[**usergroups_disable**](UsergroupsApi.md#usergroups_disable) | **POST** /usergroups.disable | 
[**usergroups_enable**](UsergroupsApi.md#usergroups_enable) | **POST** /usergroups.enable | 
[**usergroups_list**](UsergroupsApi.md#usergroups_list) | **GET** /usergroups.list | 
[**usergroups_update**](UsergroupsApi.md#usergroups_update) | **POST** /usergroups.update | 
[**usergroups_users_list_0**](UsergroupsApi.md#usergroups_users_list_0) | **GET** /usergroups.users.list | 
[**usergroups_users_update_0**](UsergroupsApi.md#usergroups_users_update_0) | **POST** /usergroups.users.update | 


# **usergroups_create**
> UsergroupsCreateSchema usergroups_create(token, name, channels=channels, description=description, handle=handle, include_count=include_count)



Create a User Group

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.usergroups_create_schema import UsergroupsCreateSchema
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
    api_instance = openapi_client.UsergroupsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `usergroups:write`
    name = 'name_example' # str | A name for the User Group. Must be unique among User Groups.
    channels = 'channels_example' # str | A comma separated string of encoded channel IDs for which the User Group uses as a default. (optional)
    description = 'description_example' # str | A short description of the User Group. (optional)
    handle = 'handle_example' # str | A mention handle. Must be unique among channels, users and User Groups. (optional)
    include_count = True # bool | Include the number of users in each User Group. (optional)

    try:
        api_response = api_instance.usergroups_create(token, name, channels=channels, description=description, handle=handle, include_count=include_count)
        print("The response of UsergroupsApi->usergroups_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsergroupsApi->usergroups_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;usergroups:write&#x60; | 
 **name** | **str**| A name for the User Group. Must be unique among User Groups. | 
 **channels** | **str**| A comma separated string of encoded channel IDs for which the User Group uses as a default. | [optional] 
 **description** | **str**| A short description of the User Group. | [optional] 
 **handle** | **str**| A mention handle. Must be unique among channels, users and User Groups. | [optional] 
 **include_count** | **bool**| Include the number of users in each User Group. | [optional] 

### Return type

[**UsergroupsCreateSchema**](UsergroupsCreateSchema.md)

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

# **usergroups_disable**
> UsergroupsDisableSchema usergroups_disable(token, usergroup, include_count=include_count)



Disable an existing User Group

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.usergroups_disable_schema import UsergroupsDisableSchema
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
    api_instance = openapi_client.UsergroupsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `usergroups:write`
    usergroup = 'usergroup_example' # str | The encoded ID of the User Group to disable.
    include_count = True # bool | Include the number of users in the User Group. (optional)

    try:
        api_response = api_instance.usergroups_disable(token, usergroup, include_count=include_count)
        print("The response of UsergroupsApi->usergroups_disable:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsergroupsApi->usergroups_disable: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;usergroups:write&#x60; | 
 **usergroup** | **str**| The encoded ID of the User Group to disable. | 
 **include_count** | **bool**| Include the number of users in the User Group. | [optional] 

### Return type

[**UsergroupsDisableSchema**](UsergroupsDisableSchema.md)

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

# **usergroups_enable**
> UsergroupsEnableSchema usergroups_enable(token, usergroup, include_count=include_count)



Enable a User Group

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.usergroups_enable_schema import UsergroupsEnableSchema
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
    api_instance = openapi_client.UsergroupsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `usergroups:write`
    usergroup = 'usergroup_example' # str | The encoded ID of the User Group to enable.
    include_count = True # bool | Include the number of users in the User Group. (optional)

    try:
        api_response = api_instance.usergroups_enable(token, usergroup, include_count=include_count)
        print("The response of UsergroupsApi->usergroups_enable:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsergroupsApi->usergroups_enable: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;usergroups:write&#x60; | 
 **usergroup** | **str**| The encoded ID of the User Group to enable. | 
 **include_count** | **bool**| Include the number of users in the User Group. | [optional] 

### Return type

[**UsergroupsEnableSchema**](UsergroupsEnableSchema.md)

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

# **usergroups_list**
> UsergroupsListSchema usergroups_list(token, include_users=include_users, include_count=include_count, include_disabled=include_disabled)



List all User Groups for a team

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.usergroups_list_schema import UsergroupsListSchema
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
    api_instance = openapi_client.UsergroupsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `usergroups:read`
    include_users = True # bool | Include the list of users for each User Group. (optional)
    include_count = True # bool | Include the number of users in each User Group. (optional)
    include_disabled = True # bool | Include disabled User Groups. (optional)

    try:
        api_response = api_instance.usergroups_list(token, include_users=include_users, include_count=include_count, include_disabled=include_disabled)
        print("The response of UsergroupsApi->usergroups_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsergroupsApi->usergroups_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;usergroups:read&#x60; | 
 **include_users** | **bool**| Include the list of users for each User Group. | [optional] 
 **include_count** | **bool**| Include the number of users in each User Group. | [optional] 
 **include_disabled** | **bool**| Include disabled User Groups. | [optional] 

### Return type

[**UsergroupsListSchema**](UsergroupsListSchema.md)

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

# **usergroups_update**
> UsergroupsUpdateSchema usergroups_update(token, usergroup, channels=channels, description=description, handle=handle, include_count=include_count, name=name)



Update an existing User Group

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.usergroups_update_schema import UsergroupsUpdateSchema
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
    api_instance = openapi_client.UsergroupsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `usergroups:write`
    usergroup = 'usergroup_example' # str | The encoded ID of the User Group to update.
    channels = 'channels_example' # str | A comma separated string of encoded channel IDs for which the User Group uses as a default. (optional)
    description = 'description_example' # str | A short description of the User Group. (optional)
    handle = 'handle_example' # str | A mention handle. Must be unique among channels, users and User Groups. (optional)
    include_count = True # bool | Include the number of users in the User Group. (optional)
    name = 'name_example' # str | A name for the User Group. Must be unique among User Groups. (optional)

    try:
        api_response = api_instance.usergroups_update(token, usergroup, channels=channels, description=description, handle=handle, include_count=include_count, name=name)
        print("The response of UsergroupsApi->usergroups_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsergroupsApi->usergroups_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;usergroups:write&#x60; | 
 **usergroup** | **str**| The encoded ID of the User Group to update. | 
 **channels** | **str**| A comma separated string of encoded channel IDs for which the User Group uses as a default. | [optional] 
 **description** | **str**| A short description of the User Group. | [optional] 
 **handle** | **str**| A mention handle. Must be unique among channels, users and User Groups. | [optional] 
 **include_count** | **bool**| Include the number of users in the User Group. | [optional] 
 **name** | **str**| A name for the User Group. Must be unique among User Groups. | [optional] 

### Return type

[**UsergroupsUpdateSchema**](UsergroupsUpdateSchema.md)

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

# **usergroups_users_list_0**
> UsergroupsUsersListSchema usergroups_users_list_0(token, usergroup, include_disabled=include_disabled)



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
    api_instance = openapi_client.UsergroupsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `usergroups:read`
    usergroup = 'usergroup_example' # str | The encoded ID of the User Group to update.
    include_disabled = True # bool | Allow results that involve disabled User Groups. (optional)

    try:
        api_response = api_instance.usergroups_users_list_0(token, usergroup, include_disabled=include_disabled)
        print("The response of UsergroupsApi->usergroups_users_list_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsergroupsApi->usergroups_users_list_0: %s\n" % e)
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

# **usergroups_users_update_0**
> UsergroupsUsersUpdateSchema usergroups_users_update_0(token, usergroup, users, include_count=include_count)



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
    api_instance = openapi_client.UsergroupsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `usergroups:write`
    usergroup = 'usergroup_example' # str | The encoded ID of the User Group to update.
    users = 'users_example' # str | A comma separated string of encoded user IDs that represent the entire list of users for the User Group.
    include_count = True # bool | Include the number of users in the User Group. (optional)

    try:
        api_response = api_instance.usergroups_users_update_0(token, usergroup, users, include_count=include_count)
        print("The response of UsergroupsApi->usergroups_users_update_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsergroupsApi->usergroups_users_update_0: %s\n" % e)
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

