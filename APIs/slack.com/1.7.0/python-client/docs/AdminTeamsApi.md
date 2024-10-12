# openapi_client.AdminTeamsApi

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**admin_teams_create**](AdminTeamsApi.md#admin_teams_create) | **POST** /admin.teams.create | 
[**admin_teams_list**](AdminTeamsApi.md#admin_teams_list) | **GET** /admin.teams.list | 


# **admin_teams_create**
> DefaultSuccessTemplate admin_teams_create(token, team_domain, team_name, team_description=team_description, team_discoverability=team_discoverability)



Create an Enterprise team.

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
    api_instance = openapi_client.AdminTeamsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `admin.teams:write`
    team_domain = 'team_domain_example' # str | Team domain (for example, slacksoftballteam).
    team_name = 'team_name_example' # str | Team name (for example, Slack Softball Team).
    team_description = 'team_description_example' # str | Description for the team. (optional)
    team_discoverability = 'team_discoverability_example' # str | Who can join the team. A team's discoverability can be `open`, `closed`, `invite_only`, or `unlisted`. (optional)

    try:
        api_response = api_instance.admin_teams_create(token, team_domain, team_name, team_description=team_description, team_discoverability=team_discoverability)
        print("The response of AdminTeamsApi->admin_teams_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminTeamsApi->admin_teams_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.teams:write&#x60; | 
 **team_domain** | **str**| Team domain (for example, slacksoftballteam). | 
 **team_name** | **str**| Team name (for example, Slack Softball Team). | 
 **team_description** | **str**| Description for the team. | [optional] 
 **team_discoverability** | **str**| Who can join the team. A team&#39;s discoverability can be &#x60;open&#x60;, &#x60;closed&#x60;, &#x60;invite_only&#x60;, or &#x60;unlisted&#x60;. | [optional] 

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

# **admin_teams_list**
> DefaultSuccessTemplate admin_teams_list(token, limit=limit, cursor=cursor)



List all teams on an Enterprise organization

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
    api_instance = openapi_client.AdminTeamsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `admin.teams:read`
    limit = 56 # int | The maximum number of items to return. Must be between 1 - 100 both inclusive. (optional)
    cursor = 'cursor_example' # str | Set `cursor` to `next_cursor` returned by the previous call to list items in the next page. (optional)

    try:
        api_response = api_instance.admin_teams_list(token, limit=limit, cursor=cursor)
        print("The response of AdminTeamsApi->admin_teams_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminTeamsApi->admin_teams_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.teams:read&#x60; | 
 **limit** | **int**| The maximum number of items to return. Must be between 1 - 100 both inclusive. | [optional] 
 **cursor** | **str**| Set &#x60;cursor&#x60; to &#x60;next_cursor&#x60; returned by the previous call to list items in the next page. | [optional] 

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

