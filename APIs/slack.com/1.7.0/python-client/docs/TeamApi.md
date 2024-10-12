# openapi_client.TeamApi

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**team_access_logs**](TeamApi.md#team_access_logs) | **GET** /team.accessLogs | 
[**team_billable_info**](TeamApi.md#team_billable_info) | **GET** /team.billableInfo | 
[**team_info**](TeamApi.md#team_info) | **GET** /team.info | 
[**team_integration_logs**](TeamApi.md#team_integration_logs) | **GET** /team.integrationLogs | 
[**team_profile_get_0**](TeamApi.md#team_profile_get_0) | **GET** /team.profile.get | 


# **team_access_logs**
> TeamAccessLogsSchema team_access_logs(token, before=before, count=count, page=page)



Gets the access logs for the current team.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.team_access_logs_schema import TeamAccessLogsSchema
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
    api_instance = openapi_client.TeamApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `admin`
    before = 'before_example' # str | End of time range of logs to include in results (inclusive). (optional)
    count = 'count_example' # str |  (optional)
    page = 'page_example' # str |  (optional)

    try:
        api_response = api_instance.team_access_logs(token, before=before, count=count, page=page)
        print("The response of TeamApi->team_access_logs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TeamApi->team_access_logs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;admin&#x60; | 
 **before** | **str**| End of time range of logs to include in results (inclusive). | [optional] 
 **count** | **str**|  | [optional] 
 **page** | **str**|  | [optional] 

### Return type

[**TeamAccessLogsSchema**](TeamAccessLogsSchema.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This response demonstrates pagination and two access log entries. |  -  |
**0** | A workspace must be on a paid plan to use this method, otherwise the &#x60;paid_only&#x60; error is thrown: |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **team_billable_info**
> DefaultSuccessTemplate team_billable_info(token, user=user)



Gets billable users information for the current team.

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
    api_instance = openapi_client.TeamApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `admin`
    user = 'user_example' # str | A user to retrieve the billable information for. Defaults to all users. (optional)

    try:
        api_response = api_instance.team_billable_info(token, user=user)
        print("The response of TeamApi->team_billable_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TeamApi->team_billable_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;admin&#x60; | 
 **user** | **str**| A user to retrieve the billable information for. Defaults to all users. | [optional] 

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

# **team_info**
> TeamInfoSchema team_info(token, team=team)



Gets information about the current team.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.team_info_schema import TeamInfoSchema
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
    api_instance = openapi_client.TeamApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `team:read`
    team = 'team_example' # str | Team to get info on, if omitted, will return information about the current team. Will only return team that the authenticated token is allowed to see through external shared channels (optional)

    try:
        api_response = api_instance.team_info(token, team=team)
        print("The response of TeamApi->team_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TeamApi->team_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;team:read&#x60; | 
 **team** | **str**| Team to get info on, if omitted, will return information about the current team. Will only return team that the authenticated token is allowed to see through external shared channels | [optional] 

### Return type

[**TeamInfoSchema**](TeamInfoSchema.md)

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

# **team_integration_logs**
> TeamIntegrationLogsSchema team_integration_logs(token, app_id=app_id, change_type=change_type, count=count, page=page, service_id=service_id, user=user)



Gets the integration logs for the current team.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.team_integration_logs_schema import TeamIntegrationLogsSchema
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
    api_instance = openapi_client.TeamApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `admin`
    app_id = 'app_id_example' # str | Filter logs to this Slack app. Defaults to all logs. (optional)
    change_type = 'change_type_example' # str | Filter logs with this change type. Defaults to all logs. (optional)
    count = 'count_example' # str |  (optional)
    page = 'page_example' # str |  (optional)
    service_id = 'service_id_example' # str | Filter logs to this service. Defaults to all logs. (optional)
    user = 'user_example' # str | Filter logs generated by this user’s actions. Defaults to all logs. (optional)

    try:
        api_response = api_instance.team_integration_logs(token, app_id=app_id, change_type=change_type, count=count, page=page, service_id=service_id, user=user)
        print("The response of TeamApi->team_integration_logs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TeamApi->team_integration_logs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;admin&#x60; | 
 **app_id** | **str**| Filter logs to this Slack app. Defaults to all logs. | [optional] 
 **change_type** | **str**| Filter logs with this change type. Defaults to all logs. | [optional] 
 **count** | **str**|  | [optional] 
 **page** | **str**|  | [optional] 
 **service_id** | **str**| Filter logs to this service. Defaults to all logs. | [optional] 
 **user** | **str**| Filter logs generated by this user’s actions. Defaults to all logs. | [optional] 

### Return type

[**TeamIntegrationLogsSchema**](TeamIntegrationLogsSchema.md)

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

# **team_profile_get_0**
> TeamProfileGetSuccessSchema team_profile_get_0(token, visibility=visibility)



Retrieve a team's profile.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.team_profile_get_success_schema import TeamProfileGetSuccessSchema
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
    api_instance = openapi_client.TeamApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `users.profile:read`
    visibility = 'visibility_example' # str | Filter by visibility. (optional)

    try:
        api_response = api_instance.team_profile_get_0(token, visibility=visibility)
        print("The response of TeamApi->team_profile_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TeamApi->team_profile_get_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;users.profile:read&#x60; | 
 **visibility** | **str**| Filter by visibility. | [optional] 

### Return type

[**TeamProfileGetSuccessSchema**](TeamProfileGetSuccessSchema.md)

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

