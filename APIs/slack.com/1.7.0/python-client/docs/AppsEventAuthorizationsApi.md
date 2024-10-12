# openapi_client.AppsEventAuthorizationsApi

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apps_event_authorizations_list**](AppsEventAuthorizationsApi.md#apps_event_authorizations_list) | **GET** /apps.event.authorizations.list | 


# **apps_event_authorizations_list**
> DefaultSuccessTemplate apps_event_authorizations_list(token, event_context, cursor=cursor, limit=limit)



Get a list of authorizations for the given event context. Each authorization represents an app installation that the event is visible to.

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
    api_instance = openapi_client.AppsEventAuthorizationsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `authorizations:read`
    event_context = 'event_context_example' # str | 
    cursor = 'cursor_example' # str |  (optional)
    limit = 56 # int |  (optional)

    try:
        api_response = api_instance.apps_event_authorizations_list(token, event_context, cursor=cursor, limit=limit)
        print("The response of AppsEventAuthorizationsApi->apps_event_authorizations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsEventAuthorizationsApi->apps_event_authorizations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;authorizations:read&#x60; | 
 **event_context** | **str**|  | 
 **cursor** | **str**|  | [optional] 
 **limit** | **int**|  | [optional] 

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

