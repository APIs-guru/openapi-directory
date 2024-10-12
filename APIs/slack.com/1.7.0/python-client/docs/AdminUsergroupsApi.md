# openapi_client.AdminUsergroupsApi

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**admin_usergroups_add_channels**](AdminUsergroupsApi.md#admin_usergroups_add_channels) | **POST** /admin.usergroups.addChannels | 
[**admin_usergroups_add_teams**](AdminUsergroupsApi.md#admin_usergroups_add_teams) | **POST** /admin.usergroups.addTeams | 
[**admin_usergroups_list_channels**](AdminUsergroupsApi.md#admin_usergroups_list_channels) | **GET** /admin.usergroups.listChannels | 
[**admin_usergroups_remove_channels**](AdminUsergroupsApi.md#admin_usergroups_remove_channels) | **POST** /admin.usergroups.removeChannels | 


# **admin_usergroups_add_channels**
> DefaultSuccessTemplate admin_usergroups_add_channels(token, channel_ids, usergroup_id, team_id=team_id)



Add one or more default channels to an IDP group.

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
    api_instance = openapi_client.AdminUsergroupsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `admin.usergroups:write`
    channel_ids = 'channel_ids_example' # str | Comma separated string of channel IDs.
    usergroup_id = 'usergroup_id_example' # str | ID of the IDP group to add default channels for.
    team_id = 'team_id_example' # str | The workspace to add default channels in. (optional)

    try:
        api_response = api_instance.admin_usergroups_add_channels(token, channel_ids, usergroup_id, team_id=team_id)
        print("The response of AdminUsergroupsApi->admin_usergroups_add_channels:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminUsergroupsApi->admin_usergroups_add_channels: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.usergroups:write&#x60; | 
 **channel_ids** | **str**| Comma separated string of channel IDs. | 
 **usergroup_id** | **str**| ID of the IDP group to add default channels for. | 
 **team_id** | **str**| The workspace to add default channels in. | [optional] 

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
**0** | Typical error response if the token provided is not associated with an Org Admin or Owner |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_usergroups_add_teams**
> DefaultSuccessTemplate admin_usergroups_add_teams(token, team_ids, usergroup_id, auto_provision=auto_provision)



Associate one or more default workspaces with an organization-wide IDP group.

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
    api_instance = openapi_client.AdminUsergroupsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `admin.teams:write`
    team_ids = 'team_ids_example' # str | A comma separated list of encoded team (workspace) IDs. Each workspace *MUST* belong to the organization associated with the token.
    usergroup_id = 'usergroup_id_example' # str | An encoded usergroup (IDP Group) ID.
    auto_provision = True # bool | When `true`, this method automatically creates new workspace accounts for the IDP group members. (optional)

    try:
        api_response = api_instance.admin_usergroups_add_teams(token, team_ids, usergroup_id, auto_provision=auto_provision)
        print("The response of AdminUsergroupsApi->admin_usergroups_add_teams:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminUsergroupsApi->admin_usergroups_add_teams: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.teams:write&#x60; | 
 **team_ids** | **str**| A comma separated list of encoded team (workspace) IDs. Each workspace *MUST* belong to the organization associated with the token. | 
 **usergroup_id** | **str**| An encoded usergroup (IDP Group) ID. | 
 **auto_provision** | **bool**| When &#x60;true&#x60;, this method automatically creates new workspace accounts for the IDP group members. | [optional] 

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

# **admin_usergroups_list_channels**
> DefaultSuccessTemplate admin_usergroups_list_channels(token, usergroup_id, team_id=team_id, include_num_members=include_num_members)



List the channels linked to an org-level IDP group (user group).

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
    api_instance = openapi_client.AdminUsergroupsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `admin.usergroups:read`
    usergroup_id = 'usergroup_id_example' # str | ID of the IDP group to list default channels for.
    team_id = 'team_id_example' # str | ID of the the workspace. (optional)
    include_num_members = True # bool | Flag to include or exclude the count of members per channel. (optional)

    try:
        api_response = api_instance.admin_usergroups_list_channels(token, usergroup_id, team_id=team_id, include_num_members=include_num_members)
        print("The response of AdminUsergroupsApi->admin_usergroups_list_channels:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminUsergroupsApi->admin_usergroups_list_channels: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.usergroups:read&#x60; | 
 **usergroup_id** | **str**| ID of the IDP group to list default channels for. | 
 **team_id** | **str**| ID of the the workspace. | [optional] 
 **include_num_members** | **bool**| Flag to include or exclude the count of members per channel. | [optional] 

### Return type

[**DefaultSuccessTemplate**](DefaultSuccessTemplate.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response |  -  |
**0** | Typical error response if the token provided is not associated with an Org Admin or Owner |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_usergroups_remove_channels**
> DefaultSuccessTemplate admin_usergroups_remove_channels(token, channel_ids, usergroup_id)



Remove one or more default channels from an org-level IDP group (user group).

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
    api_instance = openapi_client.AdminUsergroupsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `admin.usergroups:write`
    channel_ids = 'channel_ids_example' # str | Comma-separated string of channel IDs
    usergroup_id = 'usergroup_id_example' # str | ID of the IDP Group

    try:
        api_response = api_instance.admin_usergroups_remove_channels(token, channel_ids, usergroup_id)
        print("The response of AdminUsergroupsApi->admin_usergroups_remove_channels:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminUsergroupsApi->admin_usergroups_remove_channels: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.usergroups:write&#x60; | 
 **channel_ids** | **str**| Comma-separated string of channel IDs | 
 **usergroup_id** | **str**| ID of the IDP Group | 

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
**0** | Typical error response if the token provided is not associated with an Org Admin or Owner |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

