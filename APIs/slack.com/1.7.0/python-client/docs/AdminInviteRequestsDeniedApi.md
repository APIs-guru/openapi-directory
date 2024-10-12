# openapi_client.AdminInviteRequestsDeniedApi

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**admin_invite_requests_denied_list**](AdminInviteRequestsDeniedApi.md#admin_invite_requests_denied_list) | **GET** /admin.inviteRequests.denied.list | 


# **admin_invite_requests_denied_list**
> DefaultSuccessTemplate admin_invite_requests_denied_list(token, team_id=team_id, cursor=cursor, limit=limit)



List all denied workspace invite requests.

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
    api_instance = openapi_client.AdminInviteRequestsDeniedApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `admin.invites:read`
    team_id = 'team_id_example' # str | ID for the workspace where the invite requests were made. (optional)
    cursor = 'cursor_example' # str | Value of the `next_cursor` field sent as part of the previous api response (optional)
    limit = 56 # int | The number of results that will be returned by the API on each invocation. Must be between 1 - 1000 both inclusive (optional)

    try:
        api_response = api_instance.admin_invite_requests_denied_list(token, team_id=team_id, cursor=cursor, limit=limit)
        print("The response of AdminInviteRequestsDeniedApi->admin_invite_requests_denied_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminInviteRequestsDeniedApi->admin_invite_requests_denied_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.invites:read&#x60; | 
 **team_id** | **str**| ID for the workspace where the invite requests were made. | [optional] 
 **cursor** | **str**| Value of the &#x60;next_cursor&#x60; field sent as part of the previous api response | [optional] 
 **limit** | **int**| The number of results that will be returned by the API on each invocation. Must be between 1 - 1000 both inclusive | [optional] 

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

