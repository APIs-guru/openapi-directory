# openapi_client.MessagingApi

All URIs are relative to *https://rest.iad-01.braze.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_upcoming_scheduled_campaigns_and_canvases**](MessagingApi.md#get_upcoming_scheduled_campaigns_and_canvases) | **GET** /messages/scheduled_broadcasts | Get Upcoming Scheduled Campaigns and Canvases
[**schedule_api_triggered_canvases**](MessagingApi.md#schedule_api_triggered_canvases) | **POST** /canvas/trigger/schedule/create | Schedule API Triggered Canvases


# **get_upcoming_scheduled_campaigns_and_canvases**
> get_upcoming_scheduled_campaigns_and_canvases(end_time=end_time)

Get Upcoming Scheduled Campaigns and Canvases

You can view a JSON list of upcoming and scheduled Campaigns and Canvases using the following information and parameters. The endpoint will return information about scheduled Campaigns and entry Canvases between now and the designated end_time (ISO 8601 format) specified in the request. Daily, recurring messages will only appear once with their next occurrence. Results returned in this endpoint are only for Campaigns and Canvases created and scheduled in Braze.  ## Response  ```json Content-Type: application/json Authorization: Bearer YOUR-REST-API-KEY {     \"scheduled_broadcasts\": [       # Example Canvas       {         \"name\" => String,         \"id\" => String,         \"type\" => \"Canvas\",         \"tags\" => [String tag names],         \"next_send_time\" => \"YYYY-MM-DD HH:mm:ss\" (may also include time zone if not local/intelligent delivery)         \"schedule_type\" => one of \"local_time_zones\", \"intelligent_delivery\", or the name of your company's time zone       },       # Example Campaign       {         \"name\" => String,         \"id\" => String,         \"type\" => \"Campaign\",         \"tags\" => [String tag names],         \"next_send_time\" => \"YYYY-MM-DD HH:mm:ss\" (may also include time zone if not local/intelligent delivery)         \"schedule_type\" => one of \"local_time_zones\", \"intelligent_delivery\", or the name of your company's time zone       },     ] } ```

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://rest.iad-01.braze.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://rest.iad-01.braze.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MessagingApi(api_client)
    end_time = '2018-09-01T00:00:00-04:00' # str | (Required) String in ISO 8601 format  End date of the range to retrieve upcoming scheduled Campaigns and Canvases. This is treated as midnight in UTC time by the API. (optional)

    try:
        # Get Upcoming Scheduled Campaigns and Canvases
        api_instance.get_upcoming_scheduled_campaigns_and_canvases(end_time=end_time)
    except Exception as e:
        print("Exception when calling MessagingApi->get_upcoming_scheduled_campaigns_and_canvases: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **end_time** | **str**| (Required) String in ISO 8601 format  End date of the range to retrieve upcoming scheduled Campaigns and Canvases. This is treated as midnight in UTC time by the API. | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **schedule_api_triggered_canvases**
> schedule_api_triggered_canvases(schedule_api_triggered_canvases_request=schedule_api_triggered_canvases_request)

Schedule API Triggered Canvases

Use this endpoint to trigger API Triggered Canvases, which are created on the Dashboard and initiated via the API. You can pass in `canvas_entry_properties` that will be templated into the messages sent by the first steps of the Canvas.  This endpoint allows you to schedule Canvas messages (up to 90 days in advance) via API Triggered delivery, allowing you to decide what action should trigger the message to be sent. Please note that to send messages with this endpoint, you must have a Canvas ID, created when you build a Canvas.  ### Request Parameters  | Parameter | Required | Data Type | Description | | --------- | ---------| --------- | ----------- | |`canvas_id`|Required|String| See canvas identifier| |`send_id` | Optional | String | See send identifier | |`recipients` | Optional | Array of recipient objects | See recipients object | |`audience` | Optional | Connected audience object | See connected audience | |`broadcast` | Optional | Boolean | See broadcast -- defaults to false on 8/31/17, must be set to true if \"recipients\" object is omitted | | `trigger_properties` | Optional | Object | Personalization key value pairs for all users in this send; see trigger properties | | `schedule` | Required | Schedule object | See schedule object |  ## Request Components - [Canvas Identifier](https://www.braze.com/docs/api/identifier_types/) - [Recipients](https://www.braze.com/docs/api/objects_filters/recipient_object/) - [Connected Audience](https://www.braze.com/docs/api/objects_filters/connected_audience/) - [Broadcast](https://www.braze.com/docs/api/parameters/#broadcast) - [Trigger Properties](https://www.braze.com/docs/api/objects_filters/trigger_properties_object/) - [Schedule Object](https://www.braze.com/docs/api/objects_filters/schedule_object/)

### Example


```python
import openapi_client
from openapi_client.models.schedule_api_triggered_canvases_request import ScheduleApiTriggeredCanvasesRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://rest.iad-01.braze.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://rest.iad-01.braze.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MessagingApi(api_client)
    schedule_api_triggered_canvases_request = {"audience":{"AND":[{"custom_attribute":{"comparison":"equals","custom_attribute_name":"eye_color","value":"blue"}},{"custom_attribute":{"comparison":"includes_value","custom_attribute_name":"favorite_foods","value":"pizza"}},{"OR":[{"custom_attribute":{"comparison":"less_than_x_days_ago","custom_attribute_name":"last_purchase_time","value":2}},{"push_subscription_status":{"comparison":"is","value":"opted_in"}}]},{"email_subscription_status":{"comparison":"is_not","value":"subscribed"}},{"last_used_app":{"comparison":"after","value":"2019-07-22T13:17:55+0000"}}]},"broadcast":false,"canvas_entry_properties":{},"canvas_id":"canvas_identifier","recipients":[{"canvas_entry_properties":{},"external_user_id":"external_user_identifier","trigger_properties":"","user_alias":"example_alias"}],"schedule":{"at_optimal_time":false,"in_local_time":false,"time":""}} # ScheduleApiTriggeredCanvasesRequest |  (optional)

    try:
        # Schedule API Triggered Canvases
        api_instance.schedule_api_triggered_canvases(schedule_api_triggered_canvases_request=schedule_api_triggered_canvases_request)
    except Exception as e:
        print("Exception when calling MessagingApi->schedule_api_triggered_canvases: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schedule_api_triggered_canvases_request** | [**ScheduleApiTriggeredCanvasesRequest**](ScheduleApiTriggeredCanvasesRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

