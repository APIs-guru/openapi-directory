# openapi_client.AdminConversationsEkmApi

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**admin_conversations_ekm_list_original_connected_channel_info**](AdminConversationsEkmApi.md#admin_conversations_ekm_list_original_connected_channel_info) | **GET** /admin.conversations.ekm.listOriginalConnectedChannelInfo | 


# **admin_conversations_ekm_list_original_connected_channel_info**
> DefaultSuccessTemplate admin_conversations_ekm_list_original_connected_channel_info(token, channel_ids=channel_ids, team_ids=team_ids, limit=limit, cursor=cursor)



List all disconnected channels—i.e., channels that were once connected to other workspaces and then disconnected—and the corresponding original channel IDs for key revocation with EKM.

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
    api_instance = openapi_client.AdminConversationsEkmApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `admin.conversations:read`
    channel_ids = 'channel_ids_example' # str | A comma-separated list of channels to filter to. (optional)
    team_ids = 'team_ids_example' # str | A comma-separated list of the workspaces to which the channels you would like returned belong. (optional)
    limit = 56 # int | The maximum number of items to return. Must be between 1 - 1000 both inclusive. (optional)
    cursor = 'cursor_example' # str | Set `cursor` to `next_cursor` returned by the previous call to list items in the next page. (optional)

    try:
        api_response = api_instance.admin_conversations_ekm_list_original_connected_channel_info(token, channel_ids=channel_ids, team_ids=team_ids, limit=limit, cursor=cursor)
        print("The response of AdminConversationsEkmApi->admin_conversations_ekm_list_original_connected_channel_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminConversationsEkmApi->admin_conversations_ekm_list_original_connected_channel_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.conversations:read&#x60; | 
 **channel_ids** | **str**| A comma-separated list of channels to filter to. | [optional] 
 **team_ids** | **str**| A comma-separated list of the workspaces to which the channels you would like returned belong. | [optional] 
 **limit** | **int**| The maximum number of items to return. Must be between 1 - 1000 both inclusive. | [optional] 
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

