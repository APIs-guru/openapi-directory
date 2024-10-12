# openapi_client.AppsPermissionsScopesApi

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apps_permissions_scopes_list**](AppsPermissionsScopesApi.md#apps_permissions_scopes_list) | **GET** /apps.permissions.scopes.list | 


# **apps_permissions_scopes_list**
> ApiPermissionsScopesListSuccessSchema apps_permissions_scopes_list(token)



Returns list of scopes this app has on a team.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.api_permissions_scopes_list_success_schema import ApiPermissionsScopesListSuccessSchema
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
    api_instance = openapi_client.AppsPermissionsScopesApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `none`

    try:
        api_response = api_instance.apps_permissions_scopes_list(token)
        print("The response of AppsPermissionsScopesApi->apps_permissions_scopes_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsPermissionsScopesApi->apps_permissions_scopes_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;none&#x60; | 

### Return type

[**ApiPermissionsScopesListSuccessSchema**](ApiPermissionsScopesListSuccessSchema.md)

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

