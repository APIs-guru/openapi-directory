# openapi_client.AlertingApi

All URIs are relative to *https://api.appcenter.ms*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bug_tracker_get_repo_issue_from_crash**](AlertingApi.md#bug_tracker_get_repo_issue_from_crash) | **GET** /v0.1/apps/{owner_name}/{app_name}/bugtracker/crashGroup/{crash_group_id} | 
[**bugtracker_get_settings**](AlertingApi.md#bugtracker_get_settings) | **GET** /v0.1/apps/{owner_name}/{app_name}/bugtracker | 
[**notifications_get_app_email_settings**](AlertingApi.md#notifications_get_app_email_settings) | **GET** /v0.1/apps/{owner_name}/{app_name}/notifications/emailSettings | 
[**notifications_get_user_email_settings**](AlertingApi.md#notifications_get_user_email_settings) | **GET** /v0.1/user/notifications/emailSettings | 
[**webhooks_list**](AlertingApi.md#webhooks_list) | **GET** /v0.1/apps/{owner_name}/{app_name}/webhooks | 


# **bug_tracker_get_repo_issue_from_crash**
> BugTrackerGetRepoIssueFromCrash200Response bug_tracker_get_repo_issue_from_crash(crash_group_id, owner_name, app_name)



Get project issue related to a crash group

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.bug_tracker_get_repo_issue_from_crash200_response import BugTrackerGetRepoIssueFromCrash200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AlertingApi(api_client)
    crash_group_id = 'crash_group_id_example' # str | CrashGroup Id
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.bug_tracker_get_repo_issue_from_crash(crash_group_id, owner_name, app_name)
        print("The response of AlertingApi->bug_tracker_get_repo_issue_from_crash:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertingApi->bug_tracker_get_repo_issue_from_crash: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **crash_group_id** | **str**| CrashGroup Id | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**BugTrackerGetRepoIssueFromCrash200Response**](BugTrackerGetRepoIssueFromCrash200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bugtracker_get_settings**
> BugtrackerGetSettings200Response bugtracker_get_settings(owner_name, app_name)



Get bug tracker settings for a particular app

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.bugtracker_get_settings200_response import BugtrackerGetSettings200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AlertingApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.bugtracker_get_settings(owner_name, app_name)
        print("The response of AlertingApi->bugtracker_get_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertingApi->bugtracker_get_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**BugtrackerGetSettings200Response**](BugtrackerGetSettings200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **notifications_get_app_email_settings**
> NotificationsGetAppEmailSettings200Response notifications_get_app_email_settings(owner_name, app_name)



Get Email notification settings of user for a particular app

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.notifications_get_app_email_settings200_response import NotificationsGetAppEmailSettings200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AlertingApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.notifications_get_app_email_settings(owner_name, app_name)
        print("The response of AlertingApi->notifications_get_app_email_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertingApi->notifications_get_app_email_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**NotificationsGetAppEmailSettings200Response**](NotificationsGetAppEmailSettings200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **notifications_get_user_email_settings**
> NotificationsGetUserEmailSettings200Response notifications_get_user_email_settings()



Get Default email notification settings for the user

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.notifications_get_user_email_settings200_response import NotificationsGetUserEmailSettings200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AlertingApi(api_client)

    try:
        api_response = api_instance.notifications_get_user_email_settings()
        print("The response of AlertingApi->notifications_get_user_email_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertingApi->notifications_get_user_email_settings: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**NotificationsGetUserEmailSettings200Response**](NotificationsGetUserEmailSettings200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhooks_list**
> WebhooksList200Response webhooks_list(owner_name, app_name)



Get web hooks configured for a particular app

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.webhooks_list200_response import WebhooksList200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AlertingApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.webhooks_list(owner_name, app_name)
        print("The response of AlertingApi->webhooks_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertingApi->webhooks_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**WebhooksList200Response**](WebhooksList200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

