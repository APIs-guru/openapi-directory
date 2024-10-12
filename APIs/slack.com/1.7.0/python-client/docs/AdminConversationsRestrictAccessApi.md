# openapi_client.AdminConversationsRestrictAccessApi

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**admin_conversations_restrict_access_add_group**](AdminConversationsRestrictAccessApi.md#admin_conversations_restrict_access_add_group) | **POST** /admin.conversations.restrictAccess.addGroup | 
[**admin_conversations_restrict_access_list_groups**](AdminConversationsRestrictAccessApi.md#admin_conversations_restrict_access_list_groups) | **GET** /admin.conversations.restrictAccess.listGroups | 
[**admin_conversations_restrict_access_remove_group**](AdminConversationsRestrictAccessApi.md#admin_conversations_restrict_access_remove_group) | **POST** /admin.conversations.restrictAccess.removeGroup | 


# **admin_conversations_restrict_access_add_group**
> DefaultSuccessTemplate admin_conversations_restrict_access_add_group(channel_id, group_id, token, team_id=team_id)



Add an allowlist of IDP groups for accessing a channel

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
    api_instance = openapi_client.AdminConversationsRestrictAccessApi(api_client)
    channel_id = 'channel_id_example' # str | The channel to link this group to.
    group_id = 'group_id_example' # str | The [IDP Group](https://slack.com/help/articles/115001435788-Connect-identity-provider-groups-to-your-Enterprise-Grid-org) ID to be an allowlist for the private channel.
    token = 'token_example' # str | Authentication token. Requires scope: `admin.conversations:write`
    team_id = 'team_id_example' # str | The workspace where the channel exists. This argument is required for channels only tied to one workspace, and optional for channels that are shared across an organization. (optional)

    try:
        api_response = api_instance.admin_conversations_restrict_access_add_group(channel_id, group_id, token, team_id=team_id)
        print("The response of AdminConversationsRestrictAccessApi->admin_conversations_restrict_access_add_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminConversationsRestrictAccessApi->admin_conversations_restrict_access_add_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channel_id** | **str**| The channel to link this group to. | 
 **group_id** | **str**| The [IDP Group](https://slack.com/help/articles/115001435788-Connect-identity-provider-groups-to-your-Enterprise-Grid-org) ID to be an allowlist for the private channel. | 
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.conversations:write&#x60; | 
 **team_id** | **str**| The workspace where the channel exists. This argument is required for channels only tied to one workspace, and optional for channels that are shared across an organization. | [optional] 

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

# **admin_conversations_restrict_access_list_groups**
> DefaultSuccessTemplate admin_conversations_restrict_access_list_groups(token, channel_id, team_id=team_id)



List all IDP Groups linked to a channel

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
    api_instance = openapi_client.AdminConversationsRestrictAccessApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `admin.conversations:read`
    channel_id = 'channel_id_example' # str | 
    team_id = 'team_id_example' # str | The workspace where the channel exists. This argument is required for channels only tied to one workspace, and optional for channels that are shared across an organization. (optional)

    try:
        api_response = api_instance.admin_conversations_restrict_access_list_groups(token, channel_id, team_id=team_id)
        print("The response of AdminConversationsRestrictAccessApi->admin_conversations_restrict_access_list_groups:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminConversationsRestrictAccessApi->admin_conversations_restrict_access_list_groups: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.conversations:read&#x60; | 
 **channel_id** | **str**|  | 
 **team_id** | **str**| The workspace where the channel exists. This argument is required for channels only tied to one workspace, and optional for channels that are shared across an organization. | [optional] 

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
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_conversations_restrict_access_remove_group**
> DefaultSuccessTemplate admin_conversations_restrict_access_remove_group(channel_id, group_id, team_id, token)



Remove a linked IDP group linked from a private channel

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
    api_instance = openapi_client.AdminConversationsRestrictAccessApi(api_client)
    channel_id = 'channel_id_example' # str | The channel to remove the linked group from.
    group_id = 'group_id_example' # str | The [IDP Group](https://slack.com/help/articles/115001435788-Connect-identity-provider-groups-to-your-Enterprise-Grid-org) ID to remove from the private channel.
    team_id = 'team_id_example' # str | The workspace where the channel exists. This argument is required for channels only tied to one workspace, and optional for channels that are shared across an organization.
    token = 'token_example' # str | Authentication token. Requires scope: `admin.conversations:write`

    try:
        api_response = api_instance.admin_conversations_restrict_access_remove_group(channel_id, group_id, team_id, token)
        print("The response of AdminConversationsRestrictAccessApi->admin_conversations_restrict_access_remove_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminConversationsRestrictAccessApi->admin_conversations_restrict_access_remove_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channel_id** | **str**| The channel to remove the linked group from. | 
 **group_id** | **str**| The [IDP Group](https://slack.com/help/articles/115001435788-Connect-identity-provider-groups-to-your-Enterprise-Grid-org) ID to remove from the private channel. | 
 **team_id** | **str**| The workspace where the channel exists. This argument is required for channels only tied to one workspace, and optional for channels that are shared across an organization. | 
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.conversations:write&#x60; | 

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

