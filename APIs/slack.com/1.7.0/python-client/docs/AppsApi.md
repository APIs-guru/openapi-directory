# openapi_client.AppsApi

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apps_event_authorizations_list_0**](AppsApi.md#apps_event_authorizations_list_0) | **GET** /apps.event.authorizations.list | 
[**apps_permissions_info_0**](AppsApi.md#apps_permissions_info_0) | **GET** /apps.permissions.info | 
[**apps_permissions_request_0**](AppsApi.md#apps_permissions_request_0) | **GET** /apps.permissions.request | 
[**apps_permissions_resources_list_0**](AppsApi.md#apps_permissions_resources_list_0) | **GET** /apps.permissions.resources.list | 
[**apps_permissions_scopes_list_0**](AppsApi.md#apps_permissions_scopes_list_0) | **GET** /apps.permissions.scopes.list | 
[**apps_permissions_users_list_0**](AppsApi.md#apps_permissions_users_list_0) | **GET** /apps.permissions.users.list | 
[**apps_permissions_users_request_0**](AppsApi.md#apps_permissions_users_request_0) | **GET** /apps.permissions.users.request | 
[**apps_uninstall**](AppsApi.md#apps_uninstall) | **GET** /apps.uninstall | 


# **apps_event_authorizations_list_0**
> DefaultSuccessTemplate apps_event_authorizations_list_0(token, event_context, cursor=cursor, limit=limit)



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
    api_instance = openapi_client.AppsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `authorizations:read`
    event_context = 'event_context_example' # str | 
    cursor = 'cursor_example' # str |  (optional)
    limit = 56 # int |  (optional)

    try:
        api_response = api_instance.apps_event_authorizations_list_0(token, event_context, cursor=cursor, limit=limit)
        print("The response of AppsApi->apps_event_authorizations_list_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->apps_event_authorizations_list_0: %s\n" % e)
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

# **apps_permissions_info_0**
> AppsPermissionsInfoSchema apps_permissions_info_0(token=token)



Returns list of permissions this app has on a team.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.apps_permissions_info_schema import AppsPermissionsInfoSchema
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
    api_instance = openapi_client.AppsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `none` (optional)

    try:
        api_response = api_instance.apps_permissions_info_0(token=token)
        print("The response of AppsApi->apps_permissions_info_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->apps_permissions_info_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;none&#x60; | [optional] 

### Return type

[**AppsPermissionsInfoSchema**](AppsPermissionsInfoSchema.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Standard success response when used with a user token |  -  |
**0** | Standard failure response when used with an invalid token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_permissions_request_0**
> AppsPermissionsRequestSchema apps_permissions_request_0(token, scopes, trigger_id)



Allows an app to request additional scopes

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.apps_permissions_request_schema import AppsPermissionsRequestSchema
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
    api_instance = openapi_client.AppsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `none`
    scopes = 'scopes_example' # str | A comma separated list of scopes to request for
    trigger_id = 'trigger_id_example' # str | Token used to trigger the permissions API

    try:
        api_response = api_instance.apps_permissions_request_0(token, scopes, trigger_id)
        print("The response of AppsApi->apps_permissions_request_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->apps_permissions_request_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;none&#x60; | 
 **scopes** | **str**| A comma separated list of scopes to request for | 
 **trigger_id** | **str**| Token used to trigger the permissions API | 

### Return type

[**AppsPermissionsRequestSchema**](AppsPermissionsRequestSchema.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Standard success response when used with a user token |  -  |
**0** | Standard failure response when trigger_id is invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_permissions_resources_list_0**
> AppsPermissionsResourcesListSuccessSchema apps_permissions_resources_list_0(token, cursor=cursor, limit=limit)



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
    api_instance = openapi_client.AppsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `none`
    cursor = 'cursor_example' # str | Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first \"page\" of the collection. See [pagination](/docs/pagination) for more detail. (optional)
    limit = 56 # int | The maximum number of items to return. (optional)

    try:
        api_response = api_instance.apps_permissions_resources_list_0(token, cursor=cursor, limit=limit)
        print("The response of AppsApi->apps_permissions_resources_list_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->apps_permissions_resources_list_0: %s\n" % e)
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

# **apps_permissions_scopes_list_0**
> ApiPermissionsScopesListSuccessSchema apps_permissions_scopes_list_0(token)



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
    api_instance = openapi_client.AppsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `none`

    try:
        api_response = api_instance.apps_permissions_scopes_list_0(token)
        print("The response of AppsApi->apps_permissions_scopes_list_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->apps_permissions_scopes_list_0: %s\n" % e)
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

# **apps_permissions_users_list_0**
> DefaultSuccessTemplate apps_permissions_users_list_0(token, cursor=cursor, limit=limit)



Returns list of user grants and corresponding scopes this app has on a team.

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
    api_instance = openapi_client.AppsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `none`
    cursor = 'cursor_example' # str | Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first \"page\" of the collection. See [pagination](/docs/pagination) for more detail. (optional)
    limit = 56 # int | The maximum number of items to return. (optional)

    try:
        api_response = api_instance.apps_permissions_users_list_0(token, cursor=cursor, limit=limit)
        print("The response of AppsApi->apps_permissions_users_list_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->apps_permissions_users_list_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;none&#x60; | 
 **cursor** | **str**| Paginate through collections of data by setting the &#x60;cursor&#x60; parameter to a &#x60;next_cursor&#x60; attribute returned by a previous request&#39;s &#x60;response_metadata&#x60;. Default value fetches the first \&quot;page\&quot; of the collection. See [pagination](/docs/pagination) for more detail. | [optional] 
 **limit** | **int**| The maximum number of items to return. | [optional] 

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
**200** | Typical successful paginated response |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_permissions_users_request_0**
> DefaultSuccessTemplate apps_permissions_users_request_0(token, scopes, trigger_id, user)



Enables an app to trigger a permissions modal to grant an app access to a user access scope.

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
    api_instance = openapi_client.AppsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `none`
    scopes = 'scopes_example' # str | A comma separated list of user scopes to request for
    trigger_id = 'trigger_id_example' # str | Token used to trigger the request
    user = 'user_example' # str | The user this scope is being requested for

    try:
        api_response = api_instance.apps_permissions_users_request_0(token, scopes, trigger_id, user)
        print("The response of AppsApi->apps_permissions_users_request_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->apps_permissions_users_request_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;none&#x60; | 
 **scopes** | **str**| A comma separated list of user scopes to request for | 
 **trigger_id** | **str**| Token used to trigger the request | 
 **user** | **str**| The user this scope is being requested for | 

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
**200** | Standard success response when used with a user token |  -  |
**0** | Standard failure response when trigger_id is invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_uninstall**
> AppsUninstallSchema apps_uninstall(token=token, client_id=client_id, client_secret=client_secret)



Uninstalls your app from a workspace.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.apps_uninstall_schema import AppsUninstallSchema
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
    api_instance = openapi_client.AppsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `none` (optional)
    client_id = 'client_id_example' # str | Issued when you created your application. (optional)
    client_secret = 'client_secret_example' # str | Issued when you created your application. (optional)

    try:
        api_response = api_instance.apps_uninstall(token=token, client_id=client_id, client_secret=client_secret)
        print("The response of AppsApi->apps_uninstall:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->apps_uninstall: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;none&#x60; | [optional] 
 **client_id** | **str**| Issued when you created your application. | [optional] 
 **client_secret** | **str**| Issued when you created your application. | [optional] 

### Return type

[**AppsUninstallSchema**](AppsUninstallSchema.md)

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

