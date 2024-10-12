# openapi_client.AdminTeamsAdminsApi

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**admin_teams_admins_list**](AdminTeamsAdminsApi.md#admin_teams_admins_list) | **GET** /admin.teams.admins.list | 


# **admin_teams_admins_list**
> DefaultSuccessTemplate admin_teams_admins_list(token, team_id, limit=limit, cursor=cursor)



List all of the admins on a given workspace.

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
    api_instance = openapi_client.AdminTeamsAdminsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `admin.teams:read`
    team_id = 'team_id_example' # str | 
    limit = 56 # int | The maximum number of items to return. (optional)
    cursor = 'cursor_example' # str | Set `cursor` to `next_cursor` returned by the previous call to list items in the next page. (optional)

    try:
        api_response = api_instance.admin_teams_admins_list(token, team_id, limit=limit, cursor=cursor)
        print("The response of AdminTeamsAdminsApi->admin_teams_admins_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminTeamsAdminsApi->admin_teams_admins_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.teams:read&#x60; | 
 **team_id** | **str**|  | 
 **limit** | **int**| The maximum number of items to return. | [optional] 
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

