# openapi_client.ReportingApi

All URIs are relative to *https://api.victorops.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_reporting_v1_incidents_get**](ReportingApi.md#api_reporting_v1_incidents_get) | **GET** /api-reporting/v1/incidents | Get/search incident history
[**api_reporting_v1_team_team_oncall_log_get**](ReportingApi.md#api_reporting_v1_team_team_oncall_log_get) | **GET** /api-reporting/v1/team/{team}/oncall/log | A list of shift changes for a team
[**api_reporting_v2_incidents_get**](ReportingApi.md#api_reporting_v2_incidents_get) | **GET** /api-reporting/v2/incidents | Get/search incident history


# **api_reporting_v1_incidents_get**
> List[IncidentList] api_reporting_v1_incidents_get(x_vo_api_id, x_vo_api_key, offset=offset, limit=limit, entity_id=entity_id, incident_number=incident_number, started_after=started_after, started_before=started_before, host=host, service=service, current_phase=current_phase)

Get/search incident history

 __NOTE: This call is deprecated. Please use `GET /api-reporting/v2/incidents`.__  Retrieve incident history for your company, searching over date ranges and with filtering options.  This is historical data, and may be up to 15 minutes behind real-time incident data.  By default, only resolved incidents will be returned.  This API may be called a maximum of once a minute.  Incident requests are paginated with a offset and limit query string parameters.   The query for incidents is run and offset records are skipped, after which limit records will be returned.  The default offset is 0 and the default limit is 20. The maximum value allowed for limit is 100.  On return, the total number of records available for that query will be returned in the payload as 'total'. 

### Example


```python
import openapi_client
from openapi_client.models.incident_list import IncidentList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportingApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    offset = 0.0 # float | The offset within the set of matching incidents (optional) (default to 0.0)
    limit = 20.0 # float | The maximum number of matching incidents to return (100 max) (optional) (default to 20.0)
    entity_id = 'entity_id_example' # str | The entity ID involved  This is the unique identifier for the entity causing the incident. (optional)
    incident_number = 'incident_number_example' # str | The incident number as shown in VictorOps Multiple values and ranges are allowed: 4,5,20:50  (optional)
    started_after = 'started_after_example' # str | Return incidents started after this timestamp Specify the timestamp in ISO8601 format (optional)
    started_before = 'started_before_example' # str | Find incidents started before this timestamp  Specify the timestamp in ISO8601 format (optional)
    host = 'host_example' # str | The host involved in the incident Multiple values can be separated with commas. (optional)
    service = 'service_example' # str | The service involved in the incident (if any) Multiple values can be separated with commas. (optional)
    current_phase = 'current_phase_example' # str | The current phase of the incident \"resolved\", \"triggered\" or \"acknowledged\". Multiple values can be separated with commas. (optional)

    try:
        # Get/search incident history
        api_response = api_instance.api_reporting_v1_incidents_get(x_vo_api_id, x_vo_api_key, offset=offset, limit=limit, entity_id=entity_id, incident_number=incident_number, started_after=started_after, started_before=started_before, host=host, service=service, current_phase=current_phase)
        print("The response of ReportingApi->api_reporting_v1_incidents_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportingApi->api_reporting_v1_incidents_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **offset** | **float**| The offset within the set of matching incidents | [optional] [default to 0.0]
 **limit** | **float**| The maximum number of matching incidents to return (100 max) | [optional] [default to 20.0]
 **entity_id** | **str**| The entity ID involved  This is the unique identifier for the entity causing the incident. | [optional] 
 **incident_number** | **str**| The incident number as shown in VictorOps Multiple values and ranges are allowed: 4,5,20:50  | [optional] 
 **started_after** | **str**| Return incidents started after this timestamp Specify the timestamp in ISO8601 format | [optional] 
 **started_before** | **str**| Find incidents started before this timestamp  Specify the timestamp in ISO8601 format | [optional] 
 **host** | **str**| The host involved in the incident Multiple values can be separated with commas. | [optional] 
 **service** | **str**| The service involved in the incident (if any) Multiple values can be separated with commas. | [optional] 
 **current_phase** | **str**| The current phase of the incident \&quot;resolved\&quot;, \&quot;triggered\&quot; or \&quot;acknowledged\&quot;. Multiple values can be separated with commas. | [optional] 

### Return type

[**List[IncidentList]**](IncidentList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of incidents matching the request filters |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | Path not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_reporting_v1_team_team_oncall_log_get**
> OnCallLog api_reporting_v1_team_team_oncall_log_get(x_vo_api_id, x_vo_api_key, team, start=start, end=end, user_name=user_name)

A list of shift changes for a team

Returns a log of user shift changes for the specified team. This is historical data, and may be up to 15 minutes behind real-time log data.  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.on_call_log import OnCallLog
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportingApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    team = 'team_example' # str | The VictorOps team 'slug'
    start = '2013-10-20T19:20:30+01:00' # datetime | Return shift changes occurring after this timestamp. The default is the start of the day at midnight. Specify the timestamp in ISO8601 format (optional)
    end = '2013-10-20T19:20:30+01:00' # datetime | Return shift changes occurring before this timestamp. The default is the end of the day at 11:59:59. Specify the timestamp in ISO8601 format (optional)
    user_name = 'user_name_example' # str | The VictorOps user ID. Return shift changes occurring during the interval specified for this user. Without this parameter, all relevant users (with respect to the specified interval) are returned (optional)

    try:
        # A list of shift changes for a team
        api_response = api_instance.api_reporting_v1_team_team_oncall_log_get(x_vo_api_id, x_vo_api_key, team, start=start, end=end, user_name=user_name)
        print("The response of ReportingApi->api_reporting_v1_team_team_oncall_log_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportingApi->api_reporting_v1_team_team_oncall_log_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **team** | **str**| The VictorOps team &#39;slug&#39; | 
 **start** | **datetime**| Return shift changes occurring after this timestamp. The default is the start of the day at midnight. Specify the timestamp in ISO8601 format | [optional] 
 **end** | **datetime**| Return shift changes occurring before this timestamp. The default is the end of the day at 11:59:59. Specify the timestamp in ISO8601 format | [optional] 
 **user_name** | **str**| The VictorOps user ID. Return shift changes occurring during the interval specified for this user. Without this parameter, all relevant users (with respect to the specified interval) are returned | [optional] 

### Return type

[**OnCallLog**](OnCallLog.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The result of the take request |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | Team or user(s) not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_reporting_v2_incidents_get**
> ActiveIncidentList api_reporting_v2_incidents_get(x_vo_api_id, x_vo_api_key, offset=offset, limit=limit, entity_id=entity_id, incident_number=incident_number, started_after=started_after, started_before=started_before, host=host, service=service, current_phase=current_phase, routing_key=routing_key)

Get/search incident history

Retrieve incident history for your company, searching over date ranges and with filtering options.  This API may be called a maximum of once a minute.  Incident requests are paginated with a offset and limit query string parameters.   The query for incidents is run and offset records are skipped, after which limit records will be returned.  The default offset is 0 and the default limit is 20. The maximum value allowed for limit is 100.  Unless specified otherwise with the parameter currentPhase, the response will only contain resolved incidents.  On return, the total number of records available for that query will be returned in the payload as 'total'. 

### Example


```python
import openapi_client
from openapi_client.models.active_incident_list import ActiveIncidentList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportingApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    offset = 0.0 # float | The offset within the set of matching incidents (optional) (default to 0.0)
    limit = 20.0 # float | The maximum number of matching incidents to return (100 max) (optional) (default to 20.0)
    entity_id = 'entity_id_example' # str | The entity ID involved  This is the unique identifier for the entity causing the incident. (optional)
    incident_number = 'incident_number_example' # str | The incident number as shown in VictorOps Multiple values and ranges are allowed: 4,5,20:50  (optional)
    started_after = 'started_after_example' # str | Return incidents started after this timestamp Specify the timestamp in ISO8601 format (optional)
    started_before = 'started_before_example' # str | Find incidents started before this timestamp  Specify the timestamp in ISO8601 format (optional)
    host = 'host_example' # str | The host involved in the incident Multiple values can be separated with commas. (optional)
    service = 'service_example' # str | The service involved in the incident (if any) Multiple values can be separated with commas. (optional)
    current_phase = 'current_phase_example' # str | The current phase of the incident \"resolved\", \"triggered\" or \"acknowledged\". Multiple values can be separated with commas. By default, response contains only \"resolved\" incidents (optional)
    routing_key = 'routing_key_example' # str | The original routing of the incident (optional)

    try:
        # Get/search incident history
        api_response = api_instance.api_reporting_v2_incidents_get(x_vo_api_id, x_vo_api_key, offset=offset, limit=limit, entity_id=entity_id, incident_number=incident_number, started_after=started_after, started_before=started_before, host=host, service=service, current_phase=current_phase, routing_key=routing_key)
        print("The response of ReportingApi->api_reporting_v2_incidents_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportingApi->api_reporting_v2_incidents_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **offset** | **float**| The offset within the set of matching incidents | [optional] [default to 0.0]
 **limit** | **float**| The maximum number of matching incidents to return (100 max) | [optional] [default to 20.0]
 **entity_id** | **str**| The entity ID involved  This is the unique identifier for the entity causing the incident. | [optional] 
 **incident_number** | **str**| The incident number as shown in VictorOps Multiple values and ranges are allowed: 4,5,20:50  | [optional] 
 **started_after** | **str**| Return incidents started after this timestamp Specify the timestamp in ISO8601 format | [optional] 
 **started_before** | **str**| Find incidents started before this timestamp  Specify the timestamp in ISO8601 format | [optional] 
 **host** | **str**| The host involved in the incident Multiple values can be separated with commas. | [optional] 
 **service** | **str**| The service involved in the incident (if any) Multiple values can be separated with commas. | [optional] 
 **current_phase** | **str**| The current phase of the incident \&quot;resolved\&quot;, \&quot;triggered\&quot; or \&quot;acknowledged\&quot;. Multiple values can be separated with commas. By default, response contains only \&quot;resolved\&quot; incidents | [optional] 
 **routing_key** | **str**| The original routing of the incident | [optional] 

### Return type

[**ActiveIncidentList**](ActiveIncidentList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of incidents matching the request filters |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | Path not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

