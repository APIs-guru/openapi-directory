# openapi_client.DutiesApi

All URIs are relative to *https://connect.signl4.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**teams_team_id_duty_reports_file_name_get**](DutiesApi.md#teams_team_id_duty_reports_file_name_get) | **GET** /teams/{teamId}/dutyReports/{fileName} | Download duty report with a specific fileName
[**teams_team_id_duty_reports_get**](DutiesApi.md#teams_team_id_duty_reports_get) | **GET** /teams/{teamId}/dutyReports | Get Information about downloadable reports
[**teams_team_id_dutysummary_get**](DutiesApi.md#teams_team_id_dutysummary_get) | **GET** /teams/{teamId}/dutysummary | Get duty assistant info for a team
[**teams_team_id_schedules_delete_range_post**](DutiesApi.md#teams_team_id_schedules_delete_range_post) | **POST** /teams/{teamId}/schedules/deleteRange | Delete duty schedules in range
[**teams_team_id_schedules_duty_id_delete**](DutiesApi.md#teams_team_id_schedules_duty_id_delete) | **DELETE** /teams/{teamId}/schedules/{dutyId} | Delete a specific duty.
[**teams_team_id_schedules_get**](DutiesApi.md#teams_team_id_schedules_get) | **GET** /teams/{teamId}/schedules | Returns information about all duties that belong to the team.
[**teams_team_id_schedules_multiple_post**](DutiesApi.md#teams_team_id_schedules_multiple_post) | **POST** /teams/{teamId}/schedules/multiple | Save multiple schedules. It is possible to override existing schedules if you wish
[**teams_team_id_schedules_post**](DutiesApi.md#teams_team_id_schedules_post) | **POST** /teams/{teamId}/schedules | Create/Update given duty schedule.
[**teams_team_id_schedules_schedule_id_get**](DutiesApi.md#teams_team_id_schedules_schedule_id_get) | **GET** /teams/{teamId}/schedules/{scheduleId} | Returns information of the duty schedule with the specified Id.


# **teams_team_id_duty_reports_file_name_get**
> bytearray teams_team_id_duty_reports_file_name_get(team_id, file_name)

Download duty report with a specific fileName

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
    api_instance = openapi_client.DutiesApi(api_client)
    team_id = 'team_id_example' # str | ID of team you want to download the duty report for.
    file_name = 'file_name_example' # str | Filename of the csv to download.

    try:
        # Download duty report with a specific fileName
        api_response = api_instance.teams_team_id_duty_reports_file_name_get(team_id, file_name)
        print("The response of DutiesApi->teams_team_id_duty_reports_file_name_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DutiesApi->teams_team_id_duty_reports_file_name_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **str**| ID of team you want to download the duty report for. | 
 **file_name** | **str**| Filename of the csv to download. | 

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

# **teams_team_id_duty_reports_get**
> List[object] teams_team_id_duty_reports_get(team_id)

Get Information about downloadable reports

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
    api_instance = openapi_client.DutiesApi(api_client)
    team_id = 'team_id_example' # str | ID of team you want to get the duty report file infos for.

    try:
        # Get Information about downloadable reports
        api_response = api_instance.teams_team_id_duty_reports_get(team_id)
        print("The response of DutiesApi->teams_team_id_duty_reports_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DutiesApi->teams_team_id_duty_reports_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **str**| ID of team you want to get the duty report file infos for. | 

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

# **teams_team_id_dutysummary_get**
> TeamDutySummaryInfo teams_team_id_dutysummary_get(team_id, last_two_duties=last_two_duties)

Get duty assistant info for a team

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.team_duty_summary_info import TeamDutySummaryInfo
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
    api_instance = openapi_client.DutiesApi(api_client)
    team_id = 'team_id_example' # str | ID of the team the duty belongs to.
    last_two_duties = True # bool |  (optional)

    try:
        # Get duty assistant info for a team
        api_response = api_instance.teams_team_id_dutysummary_get(team_id, last_two_duties=last_two_duties)
        print("The response of DutiesApi->teams_team_id_dutysummary_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DutiesApi->teams_team_id_dutysummary_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **str**| ID of the team the duty belongs to. | 
 **last_two_duties** | **bool**|  | [optional] 

### Return type

[**TeamDutySummaryInfo**](TeamDutySummaryInfo.md)

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
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **teams_team_id_schedules_delete_range_post**
> List[ScheduleInfo] teams_team_id_schedules_delete_range_post(team_id, delete_range_info=delete_range_info)

Delete duty schedules in range

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.delete_range_info import DeleteRangeInfo
from openapi_client.models.schedule_info import ScheduleInfo
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
    api_instance = openapi_client.DutiesApi(api_client)
    team_id = 'team_id_example' # str | Team ID you want to delete
    delete_range_info = openapi_client.DeleteRangeInfo() # DeleteRangeInfo | Information with date range to delete from to (optional)

    try:
        # Delete duty schedules in range
        api_response = api_instance.teams_team_id_schedules_delete_range_post(team_id, delete_range_info=delete_range_info)
        print("The response of DutiesApi->teams_team_id_schedules_delete_range_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DutiesApi->teams_team_id_schedules_delete_range_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **str**| Team ID you want to delete | 
 **delete_range_info** | [**DeleteRangeInfo**](DeleteRangeInfo.md)| Information with date range to delete from to | [optional] 

### Return type

[**List[ScheduleInfo]**](ScheduleInfo.md)

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
**409** | Conflict |  -  |
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **teams_team_id_schedules_duty_id_delete**
> teams_team_id_schedules_duty_id_delete(team_id, duty_id)

Delete a specific duty.

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
    api_instance = openapi_client.DutiesApi(api_client)
    team_id = 'team_id_example' # str | ID of the team the duty belongs to.
    duty_id = 'duty_id_example' # str | ID of the duty to be deleted.

    try:
        # Delete a specific duty.
        api_instance.teams_team_id_schedules_duty_id_delete(team_id, duty_id)
    except Exception as e:
        print("Exception when calling DutiesApi->teams_team_id_schedules_duty_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **str**| ID of the team the duty belongs to. | 
 **duty_id** | **str**| ID of the duty to be deleted. | 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **teams_team_id_schedules_get**
> List[ScheduleInfo] teams_team_id_schedules_get(team_id, user_id=user_id, min_date=min_date, limit=limit)

Returns information about all duties that belong to the team.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.schedule_info import ScheduleInfo
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
    api_instance = openapi_client.DutiesApi(api_client)
    team_id = 'team_id_example' # str | Id of the team the schedules user belongs to
    user_id = 'user_id_example' # str |  (optional)
    min_date = '2013-10-20T19:20:30+01:00' # datetime |  (optional)
    limit = 56 # int |  (optional)

    try:
        # Returns information about all duties that belong to the team.
        api_response = api_instance.teams_team_id_schedules_get(team_id, user_id=user_id, min_date=min_date, limit=limit)
        print("The response of DutiesApi->teams_team_id_schedules_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DutiesApi->teams_team_id_schedules_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **str**| Id of the team the schedules user belongs to | 
 **user_id** | **str**|  | [optional] 
 **min_date** | **datetime**|  | [optional] 
 **limit** | **int**|  | [optional] 

### Return type

[**List[ScheduleInfo]**](ScheduleInfo.md)

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

# **teams_team_id_schedules_multiple_post**
> List[ScheduleInfo] teams_team_id_schedules_multiple_post(team_id, override_existing=override_existing, schedule_info=schedule_info)

Save multiple schedules. It is possible to override existing schedules if you wish

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.schedule_info import ScheduleInfo
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
    api_instance = openapi_client.DutiesApi(api_client)
    team_id = 'team_id_example' # str | Team ID to set
    override_existing = True # bool | Override or cut existing schedules if set to true. (optional)
    schedule_info = [openapi_client.ScheduleInfo()] # List[ScheduleInfo] | List of schedules to save (optional)

    try:
        # Save multiple schedules. It is possible to override existing schedules if you wish
        api_response = api_instance.teams_team_id_schedules_multiple_post(team_id, override_existing=override_existing, schedule_info=schedule_info)
        print("The response of DutiesApi->teams_team_id_schedules_multiple_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DutiesApi->teams_team_id_schedules_multiple_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **str**| Team ID to set | 
 **override_existing** | **bool**| Override or cut existing schedules if set to true. | [optional] 
 **schedule_info** | [**List[ScheduleInfo]**](ScheduleInfo.md)| List of schedules to save | [optional] 

### Return type

[**List[ScheduleInfo]**](ScheduleInfo.md)

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
**409** | Conflict |  -  |
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **teams_team_id_schedules_post**
> ScheduleInfo teams_team_id_schedules_post(team_id, schedule_info=schedule_info)

Create/Update given duty schedule.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.schedule_info import ScheduleInfo
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
    api_instance = openapi_client.DutiesApi(api_client)
    team_id = 'team_id_example' # str | Id of the team the duty is to be assigned to.
    schedule_info = openapi_client.ScheduleInfo() # ScheduleInfo | information about the duty schedule to be created (optional)

    try:
        # Create/Update given duty schedule.
        api_response = api_instance.teams_team_id_schedules_post(team_id, schedule_info=schedule_info)
        print("The response of DutiesApi->teams_team_id_schedules_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DutiesApi->teams_team_id_schedules_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **str**| Id of the team the duty is to be assigned to. | 
 **schedule_info** | [**ScheduleInfo**](ScheduleInfo.md)| information about the duty schedule to be created | [optional] 

### Return type

[**ScheduleInfo**](ScheduleInfo.md)

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
**409** | Conflict |  -  |
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **teams_team_id_schedules_schedule_id_get**
> ScheduleInfo teams_team_id_schedules_schedule_id_get(team_id, schedule_id)

Returns information of the duty schedule with the specified Id.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.schedule_info import ScheduleInfo
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
    api_instance = openapi_client.DutiesApi(api_client)
    team_id = 'team_id_example' # str | Id of the team the duty belongs to
    schedule_id = 'schedule_id_example' # str | Id of the requested duty schedule.

    try:
        # Returns information of the duty schedule with the specified Id.
        api_response = api_instance.teams_team_id_schedules_schedule_id_get(team_id, schedule_id)
        print("The response of DutiesApi->teams_team_id_schedules_schedule_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DutiesApi->teams_team_id_schedules_schedule_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **str**| Id of the team the duty belongs to | 
 **schedule_id** | **str**| Id of the requested duty schedule. | 

### Return type

[**ScheduleInfo**](ScheduleInfo.md)

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

