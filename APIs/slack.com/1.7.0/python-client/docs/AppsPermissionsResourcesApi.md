# openapi_client.AppsPermissionsResourcesApi

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apps_permissions_resources_list**](AppsPermissionsResourcesApi.md#apps_permissions_resources_list) | **GET** /apps.permissions.resources.list | 


# **apps_permissions_resources_list**
> AppsPermissionsResourcesListSuccessSchema apps_permissions_resources_list(token, cursor=cursor, limit=limit)



Returns list of resource grants this app has on a team.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.apps_permissions_resources_list_success_schema import AppsPermissionsResourcesListSuccessSchema
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
    api_instance = openapi_client.AppsPermissionsResourcesApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `none`
    cursor = 'cursor_example' # str | Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first \"page\" of the collection. See [pagination](/docs/pagination) for more detail. (optional)
    limit = 56 # int | The maximum number of items to return. (optional)

    try:
        api_response = api_instance.apps_permissions_resources_list(token, cursor=cursor, limit=limit)
        print("The response of AppsPermissionsResourcesApi->apps_permissions_resources_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsPermissionsResourcesApi->apps_permissions_resources_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;none&#x60; | 
 **cursor** | **str**| Paginate through collections of data by setting the &#x60;cursor&#x60; parameter to a &#x60;next_cursor&#x60; attribute returned by a previous request&#39;s &#x60;response_metadata&#x60;. Default value fetches the first \&quot;page\&quot; of the collection. See [pagination](/docs/pagination) for more detail. | [optional] 
 **limit** | **int**| The maximum number of items to return. | [optional] 

### Return type

[**AppsPermissionsResourcesListSuccessSchema**](AppsPermissionsResourcesListSuccessSchema.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical successful paginated response |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

