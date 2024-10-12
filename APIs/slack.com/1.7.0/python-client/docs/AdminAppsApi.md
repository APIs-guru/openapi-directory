# openapi_client.AdminAppsApi

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**admin_apps_approve**](AdminAppsApi.md#admin_apps_approve) | **POST** /admin.apps.approve | 
[**admin_apps_restrict**](AdminAppsApi.md#admin_apps_restrict) | **POST** /admin.apps.restrict | 


# **admin_apps_approve**
> DefaultSuccessTemplate admin_apps_approve(token, app_id=app_id, request_id=request_id, team_id=team_id)



Approve an app for installation on a workspace.

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
    api_instance = openapi_client.AdminAppsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `admin.apps:write`
    app_id = 'app_id_example' # str | The id of the app to approve. (optional)
    request_id = 'request_id_example' # str | The id of the request to approve. (optional)
    team_id = 'team_id_example' # str |  (optional)

    try:
        api_response = api_instance.admin_apps_approve(token, app_id=app_id, request_id=request_id, team_id=team_id)
        print("The response of AdminAppsApi->admin_apps_approve:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminAppsApi->admin_apps_approve: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.apps:write&#x60; | 
 **app_id** | **str**| The id of the app to approve. | [optional] 
 **request_id** | **str**| The id of the request to approve. | [optional] 
 **team_id** | **str**|  | [optional] 

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

# **admin_apps_restrict**
> DefaultSuccessTemplate admin_apps_restrict(token, app_id=app_id, request_id=request_id, team_id=team_id)



Restrict an app for installation on a workspace.

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
    api_instance = openapi_client.AdminAppsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `admin.apps:write`
    app_id = 'app_id_example' # str | The id of the app to restrict. (optional)
    request_id = 'request_id_example' # str | The id of the request to restrict. (optional)
    team_id = 'team_id_example' # str |  (optional)

    try:
        api_response = api_instance.admin_apps_restrict(token, app_id=app_id, request_id=request_id, team_id=team_id)
        print("The response of AdminAppsApi->admin_apps_restrict:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminAppsApi->admin_apps_restrict: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.apps:write&#x60; | 
 **app_id** | **str**| The id of the app to restrict. | [optional] 
 **request_id** | **str**| The id of the request to restrict. | [optional] 
 **team_id** | **str**|  | [optional] 

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

