# openapi_client.TeamsApi

All URIs are relative to *https://connect.signl4.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptions_subscription_id_teams_get**](TeamsApi.md#subscriptions_subscription_id_teams_get) | **GET** /subscriptions/{subscriptionId}/teams | Get infos for all teams of the subscription.
[**teams_get**](TeamsApi.md#teams_get) | **GET** /teams | Get infos of all teams.
[**teams_team_id_alert_reports_file_name_get**](TeamsApi.md#teams_team_id_alert_reports_file_name_get) | **GET** /teams/{teamId}/alertReports/{fileName} | Returns Alert Report
[**teams_team_id_alert_reports_get**](TeamsApi.md#teams_team_id_alert_reports_get) | **GET** /teams/{teamId}/alertReports | Get information about downloadable alert reports
[**teams_team_id_alert_settings_get**](TeamsApi.md#teams_team_id_alert_settings_get) | **GET** /teams/{teamId}/alertSettings | Gets alert settings of a specific team.
[**teams_team_id_alert_settings_post**](TeamsApi.md#teams_team_id_alert_settings_post) | **POST** /teams/{teamId}/alertSettings | Sets alert settings of a specific team.
[**teams_team_id_event_sources_get**](TeamsApi.md#teams_team_id_event_sources_get) | **GET** /teams/{teamId}/eventSources | Gets event sources of a specific team.
[**teams_team_id_get**](TeamsApi.md#teams_team_id_get) | **GET** /teams/{teamId} | Gets infos of a specific team.
[**teams_team_id_profile_put**](TeamsApi.md#teams_team_id_profile_put) | **PUT** /teams/{teamId}/profile | Updates team profile of a team
[**teams_team_id_setup_progress_get**](TeamsApi.md#teams_team_id_setup_progress_get) | **GET** /teams/{teamId}/setupProgress | Gets setup progress of a specific team.


# **subscriptions_subscription_id_teams_get**
> List[TeamInfo] subscriptions_subscription_id_teams_get(subscription_id)

Get infos for all teams of the subscription.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.team_info import TeamInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TeamsApi(api_client)
    subscription_id = 'subscription_id_example' # str | 

    try:
        # Get infos for all teams of the subscription.
        api_response = api_instance.subscriptions_subscription_id_teams_get(subscription_id)
        print("The response of TeamsApi->subscriptions_subscription_id_teams_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TeamsApi->subscriptions_subscription_id_teams_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**|  | 

### Return type

[**List[TeamInfo]**](TeamInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **teams_get**
> List[TeamInfo] teams_get()

Get infos of all teams.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.team_info import TeamInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TeamsApi(api_client)

    try:
        # Get infos of all teams.
        api_response = api_instance.teams_get()
        print("The response of TeamsApi->teams_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TeamsApi->teams_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[TeamInfo]**](TeamInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **teams_team_id_alert_reports_file_name_get**
> bytearray teams_team_id_alert_reports_file_name_get(team_id, file_name)

Returns Alert Report

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TeamsApi(api_client)
    team_id = 'team_id_example' # str | ID of team you want to get the duty report file infos for.
    file_name = 'file_name_example' # str | File name of file you want to download.

    try:
        # Returns Alert Report
        api_response = api_instance.teams_team_id_alert_reports_file_name_get(team_id, file_name)
        print("The response of TeamsApi->teams_team_id_alert_reports_file_name_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TeamsApi->teams_team_id_alert_reports_file_name_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **str**| ID of team you want to get the duty report file infos for. | 
 **file_name** | **str**| File name of file you want to download. | 

### Return type

**bytearray**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **teams_team_id_alert_reports_get**
> List[object] teams_team_id_alert_reports_get(team_id)

Get information about downloadable alert reports

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TeamsApi(api_client)
    team_id = 'team_id_example' # str | ID of team you want to download reports from.

    try:
        # Get information about downloadable alert reports
        api_response = api_instance.teams_team_id_alert_reports_get(team_id)
        print("The response of TeamsApi->teams_team_id_alert_reports_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TeamsApi->teams_team_id_alert_reports_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **str**| ID of team you want to download reports from. | 

### Return type

**List[object]**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **teams_team_id_alert_settings_get**
> AlertSettings teams_team_id_alert_settings_get(team_id)

Gets alert settings of a specific team.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.alert_settings import AlertSettings
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TeamsApi(api_client)
    team_id = 'team_id_example' # str | ID of the team the settings should be retrieved for.

    try:
        # Gets alert settings of a specific team.
        api_response = api_instance.teams_team_id_alert_settings_get(team_id)
        print("The response of TeamsApi->teams_team_id_alert_settings_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TeamsApi->teams_team_id_alert_settings_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **str**| ID of the team the settings should be retrieved for. | 

### Return type

[**AlertSettings**](AlertSettings.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **teams_team_id_alert_settings_post**
> AlertSettings teams_team_id_alert_settings_post(team_id, alert_settings=alert_settings)

Sets alert settings of a specific team.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.alert_settings import AlertSettings
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TeamsApi(api_client)
    team_id = 'team_id_example' # str | ID of the team the settings should be set for.
    alert_settings = openapi_client.AlertSettings() # AlertSettings | Alert settings to be set (optional)

    try:
        # Sets alert settings of a specific team.
        api_response = api_instance.teams_team_id_alert_settings_post(team_id, alert_settings=alert_settings)
        print("The response of TeamsApi->teams_team_id_alert_settings_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TeamsApi->teams_team_id_alert_settings_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **str**| ID of the team the settings should be set for. | 
 **alert_settings** | [**AlertSettings**](AlertSettings.md)| Alert settings to be set | [optional] 

### Return type

[**AlertSettings**](AlertSettings.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, application/json-patch+json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **teams_team_id_event_sources_get**
> List[EventSourceEndpointInfo] teams_team_id_event_sources_get(team_id)

Gets event sources of a specific team.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.event_source_endpoint_info import EventSourceEndpointInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TeamsApi(api_client)
    team_id = 'team_id_example' # str | ID of the team the sources should be retrieved for.

    try:
        # Gets event sources of a specific team.
        api_response = api_instance.teams_team_id_event_sources_get(team_id)
        print("The response of TeamsApi->teams_team_id_event_sources_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TeamsApi->teams_team_id_event_sources_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **str**| ID of the team the sources should be retrieved for. | 

### Return type

[**List[EventSourceEndpointInfo]**](EventSourceEndpointInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **teams_team_id_get**
> TeamInfo teams_team_id_get(team_id)

Gets infos of a specific team.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.team_info import TeamInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TeamsApi(api_client)
    team_id = 'team_id_example' # str | ID of the team that should be retrieved.

    try:
        # Gets infos of a specific team.
        api_response = api_instance.teams_team_id_get(team_id)
        print("The response of TeamsApi->teams_team_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TeamsApi->teams_team_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **str**| ID of the team that should be retrieved. | 

### Return type

[**TeamInfo**](TeamInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **teams_team_id_profile_put**
> TeamInfo teams_team_id_profile_put(team_id, team_profile=team_profile)

Updates team profile of a team

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.team_info import TeamInfo
from openapi_client.models.team_profile import TeamProfile
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TeamsApi(api_client)
    team_id = 'team_id_example' # str | Team ID of team which should be updated.
    team_profile = openapi_client.TeamProfile() # TeamProfile |  (optional)

    try:
        # Updates team profile of a team
        api_response = api_instance.teams_team_id_profile_put(team_id, team_profile=team_profile)
        print("The response of TeamsApi->teams_team_id_profile_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TeamsApi->teams_team_id_profile_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **str**| Team ID of team which should be updated. | 
 **team_profile** | [**TeamProfile**](TeamProfile.md)|  | [optional] 

### Return type

[**TeamInfo**](TeamInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, application/json-patch+json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **teams_team_id_setup_progress_get**
> TeamSetupProgress teams_team_id_setup_progress_get(team_id)

Gets setup progress of a specific team.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.team_setup_progress import TeamSetupProgress
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TeamsApi(api_client)
    team_id = 'team_id_example' # str | ID of the team the progress should be retrieved for.

    try:
        # Gets setup progress of a specific team.
        api_response = api_instance.teams_team_id_setup_progress_get(team_id)
        print("The response of TeamsApi->teams_team_id_setup_progress_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TeamsApi->teams_team_id_setup_progress_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **str**| ID of the team the progress should be retrieved for. | 

### Return type

[**TeamSetupProgress**](TeamSetupProgress.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

