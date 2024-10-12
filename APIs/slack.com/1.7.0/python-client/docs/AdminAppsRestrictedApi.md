# openapi_client.AdminAppsRestrictedApi

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**admin_apps_restricted_list**](AdminAppsRestrictedApi.md#admin_apps_restricted_list) | **GET** /admin.apps.restricted.list | 


# **admin_apps_restricted_list**
> DefaultSuccessTemplate admin_apps_restricted_list(token, limit=limit, cursor=cursor, team_id=team_id, enterprise_id=enterprise_id)



List restricted apps for an org or workspace.

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
    api_instance = openapi_client.AdminAppsRestrictedApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `admin.apps:read`
    limit = 56 # int | The maximum number of items to return. Must be between 1 - 1000 both inclusive. (optional)
    cursor = 'cursor_example' # str | Set `cursor` to `next_cursor` returned by the previous call to list items in the next page (optional)
    team_id = 'team_id_example' # str |  (optional)
    enterprise_id = 'enterprise_id_example' # str |  (optional)

    try:
        api_response = api_instance.admin_apps_restricted_list(token, limit=limit, cursor=cursor, team_id=team_id, enterprise_id=enterprise_id)
        print("The response of AdminAppsRestrictedApi->admin_apps_restricted_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminAppsRestrictedApi->admin_apps_restricted_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.apps:read&#x60; | 
 **limit** | **int**| The maximum number of items to return. Must be between 1 - 1000 both inclusive. | [optional] 
 **cursor** | **str**| Set &#x60;cursor&#x60; to &#x60;next_cursor&#x60; returned by the previous call to list items in the next page | [optional] 
 **team_id** | **str**|  | [optional] 
 **enterprise_id** | **str**|  | [optional] 

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

