# openapi_client.ExportApi

All URIs are relative to *https://rest.iad-01.braze.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**app_sessions_by_time**](ExportApi.md#app_sessions_by_time) | **GET** /sessions/data_series | App Sessions by Time
[**campaign_analytics**](ExportApi.md#campaign_analytics) | **GET** /campaigns/data_series | Campaign Analytics
[**campaign_details**](ExportApi.md#campaign_details) | **GET** /campaigns/details | Campaign Details
[**campaign_list**](ExportApi.md#campaign_list) | **GET** /campaigns/list | Campaign List
[**canvas_data_analytics_summary**](ExportApi.md#canvas_data_analytics_summary) | **GET** /canvas/data_summary | Canvas Data Analytics Summary
[**canvas_data_series_analytics**](ExportApi.md#canvas_data_series_analytics) | **GET** /canvas/data_series | Canvas Data Series Analytics
[**canvas_details**](ExportApi.md#canvas_details) | **GET** /canvas/details | Canvas Details
[**canvas_list**](ExportApi.md#canvas_list) | **GET** /canvas/list | Canvas List
[**custom_events_analytics**](ExportApi.md#custom_events_analytics) | **GET** /events/data_series | Custom Events Analytics
[**custom_events_list**](ExportApi.md#custom_events_list) | **GET** /events/list | Custom Events List
[**daily_active_users_by_date**](ExportApi.md#daily_active_users_by_date) | **GET** /kpi/dau/data_series | Daily Active Users by Date
[**daily_new_users_by_date**](ExportApi.md#daily_new_users_by_date) | **GET** /kpi/new_users/data_series | Daily New Users by Date
[**kp_is_for_daily_app_uninstalls_by_date**](ExportApi.md#kp_is_for_daily_app_uninstalls_by_date) | **GET** /kpi/uninstalls/data_series | KPIs for Daily App Uninstalls by Date
[**monthly_active_users_for_last30_days**](ExportApi.md#monthly_active_users_for_last30_days) | **GET** /kpi/mau/data_series | Monthly Active Users for Last 30 Days
[**news_feed_card_analytics**](ExportApi.md#news_feed_card_analytics) | **GET** /feed/data_series | News Feed Card Analytics
[**news_feed_cards_details**](ExportApi.md#news_feed_cards_details) | **GET** /feed/details | News Feed Cards Details
[**news_feed_cards_list**](ExportApi.md#news_feed_cards_list) | **GET** /feed/list | News Feed Cards List
[**segment_analytics**](ExportApi.md#segment_analytics) | **GET** /segments/data_series | Segment Analytics
[**segment_details**](ExportApi.md#segment_details) | **GET** /segments/details | Segment Details
[**segment_list**](ExportApi.md#segment_list) | **GET** /segments/list | Segment List
[**send_analytics**](ExportApi.md#send_analytics) | **GET** /sends/data_series | Send Analytics


# **app_sessions_by_time**
> app_sessions_by_time(length=length, unit=unit, ending_at=ending_at, app_id=app_id, segment_id=segment_id)

App Sessions by Time

This endpoint allows you to retrieve a series of the number of sessions for your app over a designated time period.  ### Components Used - [Segment Identifier](https://www.braze.com/docs/api/identifier_types/)  ## Response  ```json Content-Type: application/json Authorization: Bearer YOUR-REST-API-KEY {     \"message\": (required, string) the status of the export, returns 'success' when completed without errors,     \"data\" : [         {             \"time\" : (string) point in time - as ISO 8601 extended when unit is \"hour\" and as ISO 8601 date when unit is \"day\",             \"sessions\" : (int)         },         ...     ] } ```

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
    api_instance = openapi_client.ExportApi(api_client)
    length = '14' # str | (Required) Integer  Max number of units (days or hours) before ending_at to include in the returned series - must be between 1 and 100 inclusive. (optional)
    unit = 'day' # str | (Optional) String  Unit of time between data points - can be \"day\" or \"hour\" (defaults to \"day\").  (optional)
    ending_at = '2018-06-28T23:59:59-5:00' # str | (Optional) DateTime (ISO 8601 string)  Point in time when the data series should end - defaults to time of the request. (optional)
    app_id = '{{app_identifier}}' # str | (Optional) String  App API identifier retrieved from the Developer Console to limit analytics to a specific app. (optional)
    segment_id = '{{segment_identifier}}' # str | (Optional) String  Segment API identifier indicating the analytics enabled segment for which sessions should be returned. (optional)

    try:
        # App Sessions by Time
        api_instance.app_sessions_by_time(length=length, unit=unit, ending_at=ending_at, app_id=app_id, segment_id=segment_id)
    except Exception as e:
        print("Exception when calling ExportApi->app_sessions_by_time: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **length** | **str**| (Required) Integer  Max number of units (days or hours) before ending_at to include in the returned series - must be between 1 and 100 inclusive. | [optional] 
 **unit** | **str**| (Optional) String  Unit of time between data points - can be \&quot;day\&quot; or \&quot;hour\&quot; (defaults to \&quot;day\&quot;).  | [optional] 
 **ending_at** | **str**| (Optional) DateTime (ISO 8601 string)  Point in time when the data series should end - defaults to time of the request. | [optional] 
 **app_id** | **str**| (Optional) String  App API identifier retrieved from the Developer Console to limit analytics to a specific app. | [optional] 
 **segment_id** | **str**| (Optional) String  Segment API identifier indicating the analytics enabled segment for which sessions should be returned. | [optional] 

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

# **campaign_analytics**
> campaign_analytics(campaign_id=campaign_id, length=length, ending_at=ending_at)

Campaign Analytics

This endpoint allows you to retrieve a daily series of various stats for a campaign over time. Data returned includes how many messages were sent, opened, clicked, converted, etc., broken down by message channel.   ### Components Used -[Campaign Identifier](https://www.braze.com/docs/api/identifier_types/)   ### Responses  #### Multi-Channel Response  ```json Content-Type: application/json Authorization: Bearer YOUR-REST-API-KEY {     \"message\": (required, string) the status of the export, returns 'success' when completed without errors,     \"data\" : [         {             \"time\" : (string) date as ISO 8601 date,             \"messages\" : {                 \"ios_push\" : [                     {                       \"variation_name\": \"iOS_Push\",                       \"sent\" : (int),                       \"direct_opens\" : (int),                       \"total_opens\" : (int),                       \"bounces\" : (int),                       \"body_clicks\" : (int)                       \"revenue\": 0,                       \"unique_recipients\": 1,                       \"conversions\": 0,                       \"conversions_by_send_time\": 0,                       \"conversions1\": 0,                       \"conversions1_by_send_time\": 0,                       \"conversions2\": 0,                       \"conversions2_by_send_time\": 0,                       \"conversions3\": 0,                       \"conversions3_by_send_time\": 0,                       \"carousel_slide_[NUM]_[TITLE]_click\": (optional, int),                       \"notif_button_[NUM]_[TITLE]_click\": (optional, int)                     }                 ],                 \"android_push\" : [                     {                       \"sent\" : (int),                       \"direct_opens\" : (int),                       \"total_opens\" : (int),                       \"bounces\" : (int),                       \"body_clicks\" : (int)                     }                 ],                 \"webhook\": [                     {                       \"sent\": (int),                       \"errors\": (int)                     }                 ],                 \"email\" : [                     {                       \"sent\": (int),                       \"opens\": (int),                       \"unique_opens\": (int),                       \"clicks\": (int),                       \"unique_clicks\": (int),                       \"unsubscribes\": (int),                       \"bounces\": (int),                       \"delivered\": (int),                       \"reported_spam\": (int)                     }                 ],                 \"sms\" : [                   {                     \"sent\": (int),                     \"delivered\": (int),                     \"undelivered\": (int),                     \"delivery_failed\": (int)                   }                 ]               },            \"conversions_by_send_time\": (optional, int),            \"conversions1_by_send_time\": (optional, int),            \"conversions2_by_send_time\": (optional, int),            \"conversions3_by_send_time\": (optional, int),            \"conversions\": (int),            \"conversions1\": (optional, int),            \"conversions2\": (optional, int),            \"conversions3\": (optional, int),            \"unique_recipients\": (int),            \"revenue\": (optional, float)         },         ...     ],     ... } ```  #### Multivariate Response  ```json Content-Type: application/json Authorization: Bearer YOUR-REST-API-KEY {     \"data\" : [         {             \"time\" : (string) date as ISO 8601 date,             \"conversions\" : (int),             \"revenue\": (float),             \"conversions_by_send_time\": (int),             \"messages\" : {                \"trigger_in_app_message\": [{           \"variation_name\": (optional, string),           \"impressions\": (int),           \"clicks\": (int),           \"first_button_clicks\": (int),           \"second_button_clicks\": (int),           \"revenue\": (optional, float),,           \"unique_recipients\": (int),           \"conversions\": (optional, int),           \"conversions_by_send_time\": (optional, int),           \"conversions1\": (optional, int),           \"conversions1_by_send_time\": (optional, int),           \"conversions2\": (optional, int),           \"conversions2_by_send_time\": (optional, int),           \"conversions3\": (optional, int),           \"conversions3_by_send_time\": (optional, int)          }, {           \"variation_name\": (optional, string),           \"impressions\": (int),           \"clicks\": (int),           \"first_button_clicks\": (int),           \"second_button_clicks\": (int),           \"revenue\": (optional, float),,           \"unique_recipients\": (int),           \"conversions\": (optional, int),           \"conversions_by_send_time\": (optional, int),           \"conversions1\": (optional, int),           \"conversions1_by_send_time\": (optional, int),           \"conversions2\": (optional, int),           \"conversions2_by_send_time\": (optional, int),           \"conversions3\": (optional, int).           \"conversions3_by_send_time\": (optional, int)          }, {           \"variation_name\": (optional, string),           \"revenue\": (optional, float),,           \"unique_recipients\": (int),           \"conversions\": (optional, int),           \"conversions_by_send_time\": (optional, int),           \"conversions1\": (optional, int),           \"conversions1_by_send_time\": (optional, int),           \"conversions2\": (optional, int),           \"conversions2_by_send_time\": (optional, int),           \"conversions3\": (optional, int),           \"conversions3_by_send_time\": (optional, int),           \"enrolled\": (optional, int)          }]         },         \"conversions_by_send_time\": (optional, int),         \"conversions1_by_send_time\": (optional, int),         \"conversions2_by_send_time\": (optional, int),         \"conversions3_by_send_time\": (optional, int),         \"conversions\": (optional, int,         \"conversions1\": (optional, int),         \"conversions2\": (optional, int),         \"conversions3\": (optional, int),         \"unique_recipients\": (int),         \"revenue\": (optional, float)          }],          ... } ```  Possible message types are `email`, `in_app_message`, `webhook`, `android_push`, `apple_push`, `kindle_push`, `web_push`, `windows_phone8_push`, and `windows_universal_push`. All push message types will have the same statistics shown for `android_push` above.

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
    api_instance = openapi_client.ExportApi(api_client)
    campaign_id = '{{campaign_identifier}}' # str | (Required) String  Campaign API identifier (optional)
    length = '7' # str | (Required) Integer  Max number of days before ending_at to include in the returned series - must be between 1 and 100 inclusive (optional)
    ending_at = '2020-06-28T23:59:59-5:00' # str | (Optional) DateTime (ISO 8601 string)  Date on which the data series should end - defaults to time of the request (optional)

    try:
        # Campaign Analytics
        api_instance.campaign_analytics(campaign_id=campaign_id, length=length, ending_at=ending_at)
    except Exception as e:
        print("Exception when calling ExportApi->campaign_analytics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaign_id** | **str**| (Required) String  Campaign API identifier | [optional] 
 **length** | **str**| (Required) Integer  Max number of days before ending_at to include in the returned series - must be between 1 and 100 inclusive | [optional] 
 **ending_at** | **str**| (Optional) DateTime (ISO 8601 string)  Date on which the data series should end - defaults to time of the request | [optional] 

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

# **campaign_details**
> campaign_details(campaign_id=campaign_id)

Campaign Details

This endpoint allows you to retrieve relevant information on a specified campaign, which can be identified by the `campaign_id`.   > The campaign_id for API campaigns can be found on the Developer Console page and the campaign details page within your dashboard or you can use the Campaign List Endpoint.  ### Components Used - [Campaign Identifier](https://www.braze.com/docs/api/identifier_types/)   ### Campaign Details Endpoint API Response  ```json Content-Type: application/json Authorization: Bearer YOUR-REST-API-KEY {     \"message\": (required, string) the status of the export, returns 'success' when completed without errors,     \"created_at\" : (string) date created as ISO 8601 date,     \"updated_at\" : (string) date last updated as ISO 8601 date,     \"archived\": (boolean) whether this Campaign is archived,     \"draft\": (boolean) whether this Campaign is a draft,     \"name\" : (string) campaign name,     \"description\" : (string) campaign description,     \"schedule_type\" : (string) type of scheduling action,     \"channels\" : (array) list of channels to send via,     \"first_sent\" : (string) date and hour of first sent as ISO 8601 date,     \"last_sent\" : (string) date and hour of last sent as ISO 8601 date,     \"tags\" : (array) tag names associated with the campaign,     \"messages\": {         \"message_variation_id\": (string) { // <=This is the actual id             \"channel\": (string) channel type of the message (as in, \"email\", \"ios_push\", \"webhook\", \"content_card\", \"in-app_message\", \"sms\"),             \"name\": (string) name of the message in the Dashboard (eg., \"Variation 1\")             ... channel-specific fields for this message, see below ...         }     },     \"conversion_behaviors\": (array) conversion event behaviors assigned to the campaign (see below) } ```  #### Messages  The `messages` response will contain information about each message. Example message responses for channels are below:  ##### Push Channels  ```json {     \"channel\": (string) description of the channel, such as \"ios_push\" or \"android_push\"     \"alert\": (string) alert body text,     \"extras\": (hash) any key value pairs provided } ```  ##### Email Channel  ```json {     \"channel\": \"email\",     \"subject\": (string) subject,     \"body\": (string) HTML body,     \"from\": (string) from address and display name,     \"reply_to\": (string) reply-to for message, if different than \"from\" address,     \"title\": (string) name of the email,     \"extras\": (hash) any key value pairs provided } ```  ##### Content Card Channel  ```json {     \"channel\": \"content_cards\",     \"name\": (string) name of variant,     \"extras\": (hash) any key value pairs provided; only present if at least one key-value pair has been set } ```  ##### Webhook Channel  ```json {     \"channel\": \"webhook\",     \"url\": (string) url for webhook,     \"body\": (string) payload body,     \"type\": (string) body content type,     \"headers\": (hash) specified request headers,     \"method\": (string) HTTP method (e.g., \"POST\" or \"GET\"), } ```  ##### SMS Channel  ```json {   \"channel\": \"sms\",   \"body\": (string) payload body,   \"from\": (string) list of numbers associated with the subscription group,   \"subscription_group_id\": (string) API id of the subscription group targeted in the SMS message } ```  ##### Control Messages  ```json {     \"channel\": (string) description of the channel that the control is for,     \"type\": \"control\" } ```  #### Conversion Behaviors  The `conversion_behaviors` array will contain information about each conversion event behavior set for the campaign. These behaviors are in order as set by the campaign. For example, Conversion Event A will be the first item in the array, Conversion Event B will be second, etc. Example conversion event behavior responses for are below:  ##### Clicks Email  ```json {     \"type\": \"Clicks Email\",     \"window\": (integer) number of seconds during which the user can convert on this event, i.e. - 86400, which is 24 hours } ```  ##### Opens Email  ```json {     \"type\": \"Opens Email\",     \"window\": (integer) number of seconds during which the user can convert on this event, i.e. - 86400, which is 24 hours } ```  ##### Makes Purchase (any purchase)  ```json {     \"type\": \"Makes Any Purchase\",     \"window\": (integer) number of seconds during which the user can convert on this event, i.e. - 86400, which is 24 hours } ```  ##### Makes Purchase (specific product)  ```json {     \"type\": \"Makes Specific Purchase\",     \"window\": (integer) number of seconds during which the user can convert on this event, i.e. - 86400, which is 24 hours,     \"product\": (string) name of the product, i.e. - \"Feline Body Armor\" } ```  ##### Performs Custom Event  ```json {     \"type\": \"Performs Custom Event\",     \"window\": (integer) number of seconds during which the user can convert on this event, i.e. - 86400, which is 24 hours,     \"custom_event_name\": (string) name of the event, i.e. - \"Used Feline Body Armor\" } ```  ##### Upgrades App  ```json {     \"type\": \"Upgrades App\",     \"window\": (integer) number of seconds during which the user can convert on this event, i.e. - 86400, which is 24 hours,     \"app_ids\": (array|null) array of app ids, i.e. - [\"12345\", \"67890\"], or `null` if \"Track sessions for any app\" is selected in the UI } ```  ##### Uses App  ```json {     \"type\": \"Starts Session\",     \"window\": (integer) number of seconds during which the user can convert on this event, i.e. - 86400, which is 24 hours,     \"app_ids\": (array|null) array of app ids, i.e. - [\"12345\", \"67890\"], or `null` if \"Track sessions for any app\" is selected in the UI } ```

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
    api_instance = openapi_client.ExportApi(api_client)
    campaign_id = '{{campaign_identifier}}' # str | (Required) String  Campaign API identifier (optional)

    try:
        # Campaign Details
        api_instance.campaign_details(campaign_id=campaign_id)
    except Exception as e:
        print("Exception when calling ExportApi->campaign_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaign_id** | **str**| (Required) String  Campaign API identifier | [optional] 

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

# **campaign_list**
> campaign_list(page=page, include_archived=include_archived, sort_direction=sort_direction, last_edit_time_gt=last_edit_time_gt)

Campaign List

This endpoint allows you to export a list of campaigns, each of which will include its name, Campaign API Identifier, whether it is an API Campaign, and Tags associated with the campaign. The campaigns are returned in groups of 100 sorted by time of creation (oldest to newest by default).  ## Campaign List Endpoint API Response  ```json Content-Type: application/json Authorization: Bearer YOUR-REST-API-KEY {     \"message\": (required, string) the status of the export, returns 'success' when completed without errors,     \"campaigns\" : [         {             \"id\" : (string) Campaign API Identifier,             \"last_edited\": (ISO 8601 string) the last edited time for the message              \"name\" : (string) campaign name,             \"is_api_campaign\" : (boolean) whether the campaign is an API Campaign,             \"tags\" : (array) tag names associated with the campaign         },         ...     ] } ```

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
    api_instance = openapi_client.ExportApi(api_client)
    page = '0' # str | (Optional) Integer  The page of campaigns to return, defaults to 0 (returns the first set of up to 100) (optional)
    include_archived = 'false' # str | (Optional) Boolean  Whether or not to include archived campaigns, defaults to false (optional)
    sort_direction = 'desc' # str | (Optional) String  Pass in the value `desc` to sort by creation time from newest to oldest. Pass in `asc` to sort from oldest to newest. If sort_direction is not included, the default order is oldest to newest. (optional)
    last_edit_time_gt = '2020-06-28T23:59:59-5:00' # str | (Optional) DateTime (ISO 8601 string)  Filters the results and only returns campaigns that were edited greater than the time provided till now.  (optional)

    try:
        # Campaign List
        api_instance.campaign_list(page=page, include_archived=include_archived, sort_direction=sort_direction, last_edit_time_gt=last_edit_time_gt)
    except Exception as e:
        print("Exception when calling ExportApi->campaign_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **str**| (Optional) Integer  The page of campaigns to return, defaults to 0 (returns the first set of up to 100) | [optional] 
 **include_archived** | **str**| (Optional) Boolean  Whether or not to include archived campaigns, defaults to false | [optional] 
 **sort_direction** | **str**| (Optional) String  Pass in the value &#x60;desc&#x60; to sort by creation time from newest to oldest. Pass in &#x60;asc&#x60; to sort from oldest to newest. If sort_direction is not included, the default order is oldest to newest. | [optional] 
 **last_edit_time_gt** | **str**| (Optional) DateTime (ISO 8601 string)  Filters the results and only returns campaigns that were edited greater than the time provided till now.  | [optional] 

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

# **canvas_data_analytics_summary**
> canvas_data_analytics_summary(canvas_id=canvas_id, ending_at=ending_at, starting_at=starting_at, length=length, include_variant_breakdown=include_variant_breakdown, include_step_breakdown=include_step_breakdown, include_deleted_step_data=include_deleted_step_data)

Canvas Data Analytics Summary

This endpoint allows you to export rollups of time series data for a Canvas, providing a concise summary of a Canvas' results.  ### Components Used - [Canvas Identifier](https://www.braze.com/docs/api/identifier_types/)  ## Response  ```json Content-Type: application/json Authorization: Bearer YOUR-REST-API-KEY {   \"data\": {     \"name\": (string) Canvas name,     \"total_stats\": {       \"revenue\": (float),       \"conversions\": (int),       \"conversions_by_entry_time\": (int),       \"entries\": (int)     },     \"variant_stats\": (optional) {       \"00000000-0000-0000-0000-0000000000000\": (API identifier for variant) {         \"name\": (string) name of variant,         \"revenue\": (float),         \"conversions\": (int),         \"entries\": (int)       },       ... (more variants)     },     \"step_stats\": (optional) {       \"00000000-0000-0000-0000-0000000000000\": (API identifier for step) {         \"name\": (string) name of step,         \"revenue\": (float),         \"conversions\": (int),         \"conversions_by_entry_time\": (int),         \"messages\": {           \"android_push\": (name of channel) [             {               \"sent\": (int),               \"opens\": (int),               \"influenced_opens\": (int),               \"bounces\": (int)               ... (more stats for channel)             }           ],           ... (more channels)         }       },       ... (more steps)     }   },   \"message\": (required, string) the status of the export, returns 'success' when completed without errors } ```

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
    api_instance = openapi_client.ExportApi(api_client)
    canvas_id = '{{canvas_id}}' # str | (Required) String   Canvas API identifier (optional)
    ending_at = '2018-05-30T23:59:59-5:00' # str | (Required) DateTime (ISO 8601 string)  Date on which the data export should end - defaults to time of the request (optional)
    starting_at = '2018-05-28T23:59:59-5:00' # str | (Optional) DateTime (ISO 8601 string)  Date on which the data export should begin (either length or starting_at required) (optional)
    length = '5' # str | (Optional) Integer  Max number of days before ending_at to include in the returned series - must be between 1 and 14 inclusive (either length or starting_at required) (optional)
    include_variant_breakdown = 'true' # str | (Optional) Boolean  Whether or not to include variant stats (defaults to false) (optional)
    include_step_breakdown = 'true' # str | (Optional) Boolean  Whether or not to include step stats (defaults to false) (optional)
    include_deleted_step_data = 'true' # str | (Optional) Boolean  Whether or not to include step stats for deleted steps (defaults to false) (optional)

    try:
        # Canvas Data Analytics Summary
        api_instance.canvas_data_analytics_summary(canvas_id=canvas_id, ending_at=ending_at, starting_at=starting_at, length=length, include_variant_breakdown=include_variant_breakdown, include_step_breakdown=include_step_breakdown, include_deleted_step_data=include_deleted_step_data)
    except Exception as e:
        print("Exception when calling ExportApi->canvas_data_analytics_summary: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **canvas_id** | **str**| (Required) String   Canvas API identifier | [optional] 
 **ending_at** | **str**| (Required) DateTime (ISO 8601 string)  Date on which the data export should end - defaults to time of the request | [optional] 
 **starting_at** | **str**| (Optional) DateTime (ISO 8601 string)  Date on which the data export should begin (either length or starting_at required) | [optional] 
 **length** | **str**| (Optional) Integer  Max number of days before ending_at to include in the returned series - must be between 1 and 14 inclusive (either length or starting_at required) | [optional] 
 **include_variant_breakdown** | **str**| (Optional) Boolean  Whether or not to include variant stats (defaults to false) | [optional] 
 **include_step_breakdown** | **str**| (Optional) Boolean  Whether or not to include step stats (defaults to false) | [optional] 
 **include_deleted_step_data** | **str**| (Optional) Boolean  Whether or not to include step stats for deleted steps (defaults to false) | [optional] 

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

# **canvas_data_series_analytics**
> canvas_data_series_analytics(canvas_id=canvas_id, ending_at=ending_at, starting_at=starting_at, length=length, include_variant_breakdown=include_variant_breakdown, include_step_breakdown=include_step_breakdown, include_deleted_step_data=include_deleted_step_data)

Canvas Data Series Analytics

This endpoint allows you to export time series data for a Canvas.  ### Components Used - [Canvas Identifier](https://www.braze.com/docs/api/identifier_types/)  ## Response ```json Content-Type: application/json Authorization: Bearer YOUR-REST-API-KEY {   \"data\": {     \"name\": (string) Canvas name,     \"stats\": [       {         \"time\": (string) date as ISO 8601 date,         \"total_stats\": {           \"revenue\": (float),           \"conversions\": (int),           \"conversions_by_entry_time\": (int),           \"entries\": (int)         },         \"variant_stats\": (optional) {           \"00000000-0000-0000-0000-0000000000000\": (API identifier for variant) {             \"name\": (string) name of variant,             \"revenue\": (int),             \"conversions\": (int),             \"conversions_by_entry_time\": (int),             \"entries\": (int)           },           ... (more variants)         },         \"step_stats\": (optional) {           \"00000000-0000-0000-0000-0000000000000\": (API identifier for step) {             \"name\": (string) name of step,             \"revenue\": (float),             \"conversions\": (int),             \"conversions_by_entry_time\": (int),             \"messages\": {               \"email\": [                 {                   \"sent\": (int),                   \"opens\": (int),                   \"unique_opens\": (int),                   \"clicks\": (int),                   ... (more stats)                 }               ],               ... (more channels)             }           },           ... (more steps)         }       },       ... (more stats by time)     ]   },   \"message\": (required, string) the status of the export, returns 'success' when completed without errors } ```

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
    api_instance = openapi_client.ExportApi(api_client)
    canvas_id = '{{canvas_id}}' # str | (Required) String  Canvas API Identifier (optional)
    ending_at = '2018-05-30T23:59:59-5:00' # str | (Required) DateTime (ISO 8601 string)  Date on which the data export should end - defaults to time of the request (optional)
    starting_at = '2018-05-28T23:59:59-5:00' # str | (Optional) DateTime (ISO 8601 string)   Date on which the data export should begin (either length or starting_at are required) (optional)
    length = '10' # str | (Optional) DateTime (ISO 8601 string)  Max number of days before ending_at to include in the returned series - must be between 1 and 14 inclusive (either length or starting_at required) (optional)
    include_variant_breakdown = 'true' # str | (Optional) Boolean  Whether or not to include variant stats (defaults to false) (optional)
    include_step_breakdown = 'true' # str | (Optional) Boolean  Whether or not to include step stats (defaults to false) (optional)
    include_deleted_step_data = 'true' # str | (Optional) Boolean  Whether or not to include step stats for deleted steps (defaults to false) (optional)

    try:
        # Canvas Data Series Analytics
        api_instance.canvas_data_series_analytics(canvas_id=canvas_id, ending_at=ending_at, starting_at=starting_at, length=length, include_variant_breakdown=include_variant_breakdown, include_step_breakdown=include_step_breakdown, include_deleted_step_data=include_deleted_step_data)
    except Exception as e:
        print("Exception when calling ExportApi->canvas_data_series_analytics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **canvas_id** | **str**| (Required) String  Canvas API Identifier | [optional] 
 **ending_at** | **str**| (Required) DateTime (ISO 8601 string)  Date on which the data export should end - defaults to time of the request | [optional] 
 **starting_at** | **str**| (Optional) DateTime (ISO 8601 string)   Date on which the data export should begin (either length or starting_at are required) | [optional] 
 **length** | **str**| (Optional) DateTime (ISO 8601 string)  Max number of days before ending_at to include in the returned series - must be between 1 and 14 inclusive (either length or starting_at required) | [optional] 
 **include_variant_breakdown** | **str**| (Optional) Boolean  Whether or not to include variant stats (defaults to false) | [optional] 
 **include_step_breakdown** | **str**| (Optional) Boolean  Whether or not to include step stats (defaults to false) | [optional] 
 **include_deleted_step_data** | **str**| (Optional) Boolean  Whether or not to include step stats for deleted steps (defaults to false) | [optional] 

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

# **canvas_details**
> canvas_details(canvas_id=canvas_id)

Canvas Details

This endpoint allows you to export metadata about a Canvas, such as its name, when it was created, its current status, and more.  ### Components Used - [Canvas Identifier](https://www.braze.com/docs/api/identifier_types/)  ## Response  ```json Content-Type: application/json Authorization: Bearer YOUR-REST-API-KEY {   \"created_at\": (string) date created as ISO 8601 date,   \"updated_at\": (string) date updated as ISO 8601 date,   \"name\": (string) Canvas name,   \"description\": (string) Canvas description,   \"archived\": (boolean) whether this Canvas is archived,   \"draft\": (boolean) whether this Canvas is a draft,   \"schedule_type\": (string) type of scheduling action,   \"first_entry\": (string) date of first entry as ISO 8601 date,   \"last_entry\": (string) date of last entry as ISO 8601 date,   \"channels\": (array of strings) step channels used with Canvas,   \"variants\": [     {       \"name\": (string) name of variant,       \"id\": (string) API identifier of the variant,       \"first_step_ids\": (array of strings) API identifiers for first steps in variant,       \"first_step_id\": (string) API identifier of first step in variant (deprecated in November 2017, only included if the variant has only one first step)     },     ... (more variations)   ],   \"tags\": (array of strings) tag names associated with the Canvas,   \"steps\": [     {       \"name\": (string) name of step,       \"id\": (string) API identifier of the step,       \"next_step_ids\": (array of strings) API identifiers of steps following step,       \"channels\": (array of strings) channels used in step,       \"messages\": {           \"message_variation_id\": (string) {  // <=This is the actual id               \"channel\": (string) channel type of the message (eg., \"email\"),               ... channel-specific fields for this message, see Campaign Details Endpoint API Response for example message responses ...           }       }     },     ... (more steps)   ],   \"message\": (required, string) the status of the export, returns 'success' when completed without errors } ```

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
    api_instance = openapi_client.ExportApi(api_client)
    canvas_id = '{{canvas_identifier}}' # str | (Required) String  Canvas API Identifier  (optional)

    try:
        # Canvas Details
        api_instance.canvas_details(canvas_id=canvas_id)
    except Exception as e:
        print("Exception when calling ExportApi->canvas_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **canvas_id** | **str**| (Required) String  Canvas API Identifier  | [optional] 

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

# **canvas_list**
> canvas_list(page=page, include_archived=include_archived, sort_direction=sort_direction, last_edit_time_gt=last_edit_time_gt)

Canvas List

This endpoint allows you to export a list of Canvases, including the name, Canvas API Identifier and associated Tags. The Canvases are returned in groups of 100 sorted by time of creation (oldest to newest by default).  > Archived Canvases will not be included in the API response unless the `include_archived` field is specified. Canvases that are stopped but not archived, however, will be returned by default.   ## Response  ```json Content-Type: application/json Authorization: Bearer YOUR-REST-API-KEY {   \"canvases\" : [    {     \"id\" : (string) Canvas API Identifier,     \"last_edited\": (ISO 8601 string) the last edited time for the message,     \"name\" : (string) Canvas name,     \"tags\" : (array) tag names associated with the Canvas,    },     ... (more Canvases)   ],   \"message\": (required, string) the status of the export, returns 'success' when completed without errors } ```

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
    api_instance = openapi_client.ExportApi(api_client)
    page = '1' # str | (Optional) Integer  The page of Canvases to return, defaults to `0` (returns the first set of up to 100) (optional)
    include_archived = 'false' # str | (Optional) Boolean  Whether or not to include archived Canvases, defaults to `false`. (optional)
    sort_direction = 'desc' # str | (Optional) String  Pass in the value `desc` to sort by creation time from newest to oldest. Pass in `asc` to sort from oldest to newest. If sort_direction is not included, the default order is oldest to newest. (optional)
    last_edit_time_gt = '2020-06-28T23:59:59-5:00' # str | (Optional) DateTime (ISO 8601 string)  Filters the results and only returns Canvases that were edited greater than the time provided till now. (optional)

    try:
        # Canvas List
        api_instance.canvas_list(page=page, include_archived=include_archived, sort_direction=sort_direction, last_edit_time_gt=last_edit_time_gt)
    except Exception as e:
        print("Exception when calling ExportApi->canvas_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **str**| (Optional) Integer  The page of Canvases to return, defaults to &#x60;0&#x60; (returns the first set of up to 100) | [optional] 
 **include_archived** | **str**| (Optional) Boolean  Whether or not to include archived Canvases, defaults to &#x60;false&#x60;. | [optional] 
 **sort_direction** | **str**| (Optional) String  Pass in the value &#x60;desc&#x60; to sort by creation time from newest to oldest. Pass in &#x60;asc&#x60; to sort from oldest to newest. If sort_direction is not included, the default order is oldest to newest. | [optional] 
 **last_edit_time_gt** | **str**| (Optional) DateTime (ISO 8601 string)  Filters the results and only returns Canvases that were edited greater than the time provided till now. | [optional] 

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

# **custom_events_analytics**
> custom_events_analytics(event=event, length=length, unit=unit, ending_at=ending_at, app_id=app_id, segment_id=segment_id)

Custom Events Analytics

This endpoint allows you to retrieve a series of the number of occurrences of a custom event in your app over a designated time period.  ### Components Used -[Segment Identifier](https://www.braze.com/docs/api/identifier_types/)   ## Response  ```json Content-Type: application/json Authorization: Bearer YOUR-REST-API-KEY {     \"message\": (required, string) the status of the export, returns 'success' when completed without errors,     \"data\" : [         {             \"time\" : (string) point in time - as ISO 8601 extended when unit is \"hour\" and as ISO 8601 date when unit is \"day\",             \"count\" : (int)         },         ...     ] } ```  ### Fatal Error Response Codes The following status codes and associated error messages will be returned if your request encounters a fatal error. Any of these error codes indicate that no data will be processed.  | Error Code       | Reason / Cause                                                   | | ---------------- | ---------------------------------------------------------------- | | 400 Bad Request  | Bad Syntax                                                       | | 401 Unauthorized | Unknown or missing REST API Key                                  | | 429 Rate Limited | Over rate limit                                                  | | 5XX              | Internal server error, you should retry with exponential backoff |

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
    api_instance = openapi_client.ExportApi(api_client)
    event = 'event_name' # str | (Required) String  The name of the custom event for which to return analytics  (optional)
    length = '24' # str | (Required) Integer  Max number of units (days or hours) before ending_at to include in the returned series - must be between 1 and 100 inclusive (optional)
    unit = 'hour' # str | (Optional) String  Unit of time between data points - can be \"day\" or \"hour\" (defaults to \"day\") (optional)
    ending_at = '2014-12-10T23:59:59-05:00' # str | (Optional) DateTime (ISO 8601 string)  Point in time when the data series should end - defaults to time of the request (optional)
    app_id = '{{app_identifier}}' # str | (Optional) String  App API identifier retrieved from the Developer Console to limit analytics to a specific app (optional)
    segment_id = '{{segment_identifier}}' # str | (Optional) String  Segment API identifier indicating the analytics enabled segment for which event analytics should be returned (optional)

    try:
        # Custom Events Analytics
        api_instance.custom_events_analytics(event=event, length=length, unit=unit, ending_at=ending_at, app_id=app_id, segment_id=segment_id)
    except Exception as e:
        print("Exception when calling ExportApi->custom_events_analytics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event** | **str**| (Required) String  The name of the custom event for which to return analytics  | [optional] 
 **length** | **str**| (Required) Integer  Max number of units (days or hours) before ending_at to include in the returned series - must be between 1 and 100 inclusive | [optional] 
 **unit** | **str**| (Optional) String  Unit of time between data points - can be \&quot;day\&quot; or \&quot;hour\&quot; (defaults to \&quot;day\&quot;) | [optional] 
 **ending_at** | **str**| (Optional) DateTime (ISO 8601 string)  Point in time when the data series should end - defaults to time of the request | [optional] 
 **app_id** | **str**| (Optional) String  App API identifier retrieved from the Developer Console to limit analytics to a specific app | [optional] 
 **segment_id** | **str**| (Optional) String  Segment API identifier indicating the analytics enabled segment for which event analytics should be returned | [optional] 

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

# **custom_events_list**
> custom_events_list(page=page)

Custom Events List

This endpoint allows you to export a list of custom events that have been recorded for your app. The event names are returned in groups of 250, sorted alphabetically.   ## Response  ```json Content-Type: application/json Authorization: Bearer YOUR-REST-API-KEY {     \"message\": (required, string) the status of the export, returns 'success' when completed without errors,     \"events\" : [         \"Event A\",         \"Event B\",         \"Event C\",         ...     ] } ```  ### Fatal Error Response Codes  The following status codes and associated error messages will be returned if your request encounters a fatal error. Any of these error codes indicate that no data will be processed.  | Error Code       | Reason / Cause                                                   | | ---------------- | ---------------------------------------------------------------- | | 400 Bad Request  | Bad Syntax                                                       | | 401 Unauthorized | Unknown or missing REST API Key                                  | | 429 Rate Limited | Over rate limit                                                  | | 5XX              | Internal server error, you should retry with exponential backoff |

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
    api_instance = openapi_client.ExportApi(api_client)
    page = '3' # str | (Optional) Integer  The page of event names to return, defaults to 0 (returns the first set of up to 250) (optional)

    try:
        # Custom Events List
        api_instance.custom_events_list(page=page)
    except Exception as e:
        print("Exception when calling ExportApi->custom_events_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **str**| (Optional) Integer  The page of event names to return, defaults to 0 (returns the first set of up to 250) | [optional] 

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

# **daily_active_users_by_date**
> daily_active_users_by_date(length=length, ending_at=ending_at, app_id=app_id)

Daily Active Users by Date

This endpoint allows you to retrieve a daily series of the total number of unique active users on each date.   ## Response  ```json Content-Type: application/json Authorization: Bearer YOUR-REST-API-KEY {     \"message\": (required, string) the status of the export, returns 'success' when completed without errors,     \"data\" : [         {             \"time\" : (string) date as ISO 8601 date,             \"dau\" : (int)         },         ...     ] } ```

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
    api_instance = openapi_client.ExportApi(api_client)
    length = '10' # str | (Required) Integer  Max number of days before ending_at to include in the returned series - must be between 1 and 100 inclusive (optional)
    ending_at = '2018-06-28T23:59:59-5:00' # str | (Optional) DateTime (ISO 8601 string)  Point in time when the data series should end - defaults to time of the request (optional)
    app_id = '{{app_identifier}}' # str | (Optional) String  App API identifier; if excluded, results for all apps in app group will be returned (optional)

    try:
        # Daily Active Users by Date
        api_instance.daily_active_users_by_date(length=length, ending_at=ending_at, app_id=app_id)
    except Exception as e:
        print("Exception when calling ExportApi->daily_active_users_by_date: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **length** | **str**| (Required) Integer  Max number of days before ending_at to include in the returned series - must be between 1 and 100 inclusive | [optional] 
 **ending_at** | **str**| (Optional) DateTime (ISO 8601 string)  Point in time when the data series should end - defaults to time of the request | [optional] 
 **app_id** | **str**| (Optional) String  App API identifier; if excluded, results for all apps in app group will be returned | [optional] 

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

# **daily_new_users_by_date**
> daily_new_users_by_date(length=length, ending_at=ending_at, app_id=app_id)

Daily New Users by Date

This endpoint allows you to retrieve a daily series of the total number of new users on each date.   ## Response  ```json Content-Type: application/json Authorization: Bearer YOUR-REST-API-KEY {     \"message\": (required, string) the status of the export, returns 'success' when completed without errors,     \"data\" : [         {             \"time\" : (string) date as ISO 8601 date,             \"new_users\" : (int)         },         ...     ] } ```

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
    api_instance = openapi_client.ExportApi(api_client)
    length = '14' # str | (Required) Integer  Max number of days before ending_at to include in the returned series - must be between 1 and 100 inclusive (optional)
    ending_at = '2018-06-28T23:59:59-5:00' # str | (Optional) DateTime (ISO 8601 string)  Point in time when the data series should end - defaults to time of the request (optional)
    app_id = '{{app_identifier}}' # str | (Optional) String  App API identifier; if excluded, results for all apps in app group will be returned (optional)

    try:
        # Daily New Users by Date
        api_instance.daily_new_users_by_date(length=length, ending_at=ending_at, app_id=app_id)
    except Exception as e:
        print("Exception when calling ExportApi->daily_new_users_by_date: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **length** | **str**| (Required) Integer  Max number of days before ending_at to include in the returned series - must be between 1 and 100 inclusive | [optional] 
 **ending_at** | **str**| (Optional) DateTime (ISO 8601 string)  Point in time when the data series should end - defaults to time of the request | [optional] 
 **app_id** | **str**| (Optional) String  App API identifier; if excluded, results for all apps in app group will be returned | [optional] 

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

# **kp_is_for_daily_app_uninstalls_by_date**
> kp_is_for_daily_app_uninstalls_by_date(length=length, ending_at=ending_at, app_id=app_id)

KPIs for Daily App Uninstalls by Date

This endpoint allows you to retrieve a daily series of the total number of uninstalls on each date.  ## Response  ```json Content-Type: application/json Authorization: Bearer YOUR-REST-API-KEY {     \"message\": (required, string) the status of the export, returns 'success' when completed without errors,     \"data\" : [         {             \"time\" : (string) date as ISO 8601 date,             \"uninstalls\" : (int)         },         ...     ] } ```

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
    api_instance = openapi_client.ExportApi(api_client)
    length = '14' # str | (Required) Integer  Max number of days before ending_at to include in the returned series - must be between 1 and 100 inclusive (optional)
    ending_at = '2018-06-28T23:59:59-5:00' # str | (Optional) DateTime (ISO 8601 string)  Point in time when the data series should end - defaults to time of the request (optional)
    app_id = '{{app_identifier}}' # str | (Optional) String  App API identifier; if excluded, results for all apps in app group will be returned (optional)

    try:
        # KPIs for Daily App Uninstalls by Date
        api_instance.kp_is_for_daily_app_uninstalls_by_date(length=length, ending_at=ending_at, app_id=app_id)
    except Exception as e:
        print("Exception when calling ExportApi->kp_is_for_daily_app_uninstalls_by_date: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **length** | **str**| (Required) Integer  Max number of days before ending_at to include in the returned series - must be between 1 and 100 inclusive | [optional] 
 **ending_at** | **str**| (Optional) DateTime (ISO 8601 string)  Point in time when the data series should end - defaults to time of the request | [optional] 
 **app_id** | **str**| (Optional) String  App API identifier; if excluded, results for all apps in app group will be returned | [optional] 

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

# **monthly_active_users_for_last30_days**
> monthly_active_users_for_last30_days(length=length, ending_at=ending_at, app_id=app_id)

Monthly Active Users for Last 30 Days

This endpoint allows you to retrieve a daily series of the total number of unique active users over a 30-day rolling window.  ## Response  ```json Content-Type: application/json Authorization: Bearer YOUR-REST-API-KEY {     \"message\": (required, string) the status of the export, returns 'success' when completed without errors,     \"data\" : [         {             \"time\" : (string) date as ISO 8601 date,             \"mau\" : (int)         },         ...     ] } ```

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
    api_instance = openapi_client.ExportApi(api_client)
    length = '7' # str | (Required) Integer  Max number of days before ending_at to include in the returned series - must be between 1 and 100 inclusive (optional)
    ending_at = '2018-06-28T23:59:59-05:00' # str | (Optional) DateTime (ISO 8601 string)  Point in time when the data series should end - defaults to time of the request (optional)
    app_id = '{{app_identifier}}' # str | (Optional) String  App API identifier; if excluded, results for all apps in app group will be returned (optional)

    try:
        # Monthly Active Users for Last 30 Days
        api_instance.monthly_active_users_for_last30_days(length=length, ending_at=ending_at, app_id=app_id)
    except Exception as e:
        print("Exception when calling ExportApi->monthly_active_users_for_last30_days: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **length** | **str**| (Required) Integer  Max number of days before ending_at to include in the returned series - must be between 1 and 100 inclusive | [optional] 
 **ending_at** | **str**| (Optional) DateTime (ISO 8601 string)  Point in time when the data series should end - defaults to time of the request | [optional] 
 **app_id** | **str**| (Optional) String  App API identifier; if excluded, results for all apps in app group will be returned | [optional] 

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

# **news_feed_card_analytics**
> news_feed_card_analytics(card_id=card_id, length=length, unit=unit, ending_at=ending_at)

News Feed Card Analytics

This endpoint allows you to retrieve a daily series of engagement stats for a card over time.  ### Components Used - [Card ID](https://www.braze.com/docs/api/identifier_types/) - [News Feed List](https://www.braze.com/docs/api/endpoints/export/news_feed/get_news_feed_cards/)  ## Response  ```json Content-Type: application/json Authorization: Bearer YOUR-REST-API-KEY {     \"message\": (required, string) the status of the export, returns 'success' when completed without errors,     \"data\" : [         {             \"time\" : (string) point in time - as ISO 8601 extended when unit is \"hour\" and as ISO 8601 date when unit is \"day\",             \"clicks\" : (int) ,             \"impressions\" : (int),             \"unique_clicks\" : (int),             \"unique_impressions\" : (int)         },         ...     ] } ```

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
    api_instance = openapi_client.ExportApi(api_client)
    card_id = '{{card_identifier}}' # str | (Required) String  Card API identifier (optional)
    length = '14' # str | (Required) Integer  Max number of units (days or hours) before ending_at to include in the returned series - must be between 1 and 100 inclusive (optional)
    unit = 'day' # str | (Optional) String  Unit of time between data points - can be \"day\" or \"hour\" (defaults to \"day\") (optional)
    ending_at = '2018-06-28T23:59:59-5:00' # str | (Optional) DateTime (ISO 8601 string)  Date on which the data series should end - defaults to time of the request (optional)

    try:
        # News Feed Card Analytics
        api_instance.news_feed_card_analytics(card_id=card_id, length=length, unit=unit, ending_at=ending_at)
    except Exception as e:
        print("Exception when calling ExportApi->news_feed_card_analytics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **card_id** | **str**| (Required) String  Card API identifier | [optional] 
 **length** | **str**| (Required) Integer  Max number of units (days or hours) before ending_at to include in the returned series - must be between 1 and 100 inclusive | [optional] 
 **unit** | **str**| (Optional) String  Unit of time between data points - can be \&quot;day\&quot; or \&quot;hour\&quot; (defaults to \&quot;day\&quot;) | [optional] 
 **ending_at** | **str**| (Optional) DateTime (ISO 8601 string)  Date on which the data series should end - defaults to time of the request | [optional] 

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

# **news_feed_cards_details**
> news_feed_cards_details(card_id=card_id)

News Feed Cards Details

This endpoint allows you to retrieve relevant information on the card, which can be identified by the `card_id`.  ### Components Used - [Card ID](https://www.braze.com/docs/api/identifier_types/) - [News Feed List](https://www.braze.com/docs/api/endpoints/export/news_feed/get_news_feed_cards/)   ## Response  ```json Content-Type: application/json Authorization: Bearer YOUR-REST-API-KEY {     \"message\": (required, string) The status of the export, returns 'success' when completed without errors,     \"created_at\" : (string) Date created as ISO 8601 date,     \"updated_at\" : (string) Date last updated as ISO 8601 date,     \"name\" : (string) Card name,     \"publish_at\" : (string) Date card was published as ISO 8601 date,     \"end_at\" : (string) Date card will stop displaying for users as ISO 8601 date,     \"tags\" : (array) Tag names associated with the card,     \"title\" : (string) Title of the card,     \"image_url\" : (string) Image URL used by this card,     \"extras\" : (dictionary) Dictionary containing key-value pair data attached to this card,     \"description\" : (string) Description text used by this card,     \"archived\": (boolean) whether this Card is archived,     \"draft\": (boolean) whether this Card is a draft, } ```

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
    api_instance = openapi_client.ExportApi(api_client)
    card_id = '{{card_identifier}}' # str | (Required) String  Card API identifier  (optional)

    try:
        # News Feed Cards Details
        api_instance.news_feed_cards_details(card_id=card_id)
    except Exception as e:
        print("Exception when calling ExportApi->news_feed_cards_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **card_id** | **str**| (Required) String  Card API identifier  | [optional] 

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

# **news_feed_cards_list**
> news_feed_cards_list(page=page, include_archived=include_archived, sort_direction=sort_direction)

News Feed Cards List

This endpoint allows you to export a list of News Feed cards, each of which will include its name and Card API Identifier. The cards are returned in groups of 100 sorted by time of creation (oldest to newest by default).   ## Response  ```json Content-Type: application/json Authorization: Bearer YOUR-REST-API-KEY {     \"message\": (required, string) the status of the export, returns 'success' when completed without errors,     \"cards\" : [         {             \"id\" : (string) Card API Identifier,             \"type\" : (string) type of the card - NewsItem (classic cards), CaptionedImage, Banner or DevPick (cross-promotional cards),             \"title\" : (string) title of the card,             \"tags\" : (array) tag names associated with the card         },         ...     ] } ```

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
    api_instance = openapi_client.ExportApi(api_client)
    page = '1' # str | (Optional) Integer  The page of cards to return, defaults to 0 (returns the first set of up to 100) (optional)
    include_archived = 'true' # str | (Optional) Boolean  Whether or not to include archived cards, defaults to false (optional)
    sort_direction = 'desc' # str | (Optional) String  Pass in the value `desc` to sort by creation time from newest to oldest. Pass in `asc` to sort from oldest to newest. If sort_direction is not included, the default order is oldest to newest. (optional)

    try:
        # News Feed Cards List
        api_instance.news_feed_cards_list(page=page, include_archived=include_archived, sort_direction=sort_direction)
    except Exception as e:
        print("Exception when calling ExportApi->news_feed_cards_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **str**| (Optional) Integer  The page of cards to return, defaults to 0 (returns the first set of up to 100) | [optional] 
 **include_archived** | **str**| (Optional) Boolean  Whether or not to include archived cards, defaults to false | [optional] 
 **sort_direction** | **str**| (Optional) String  Pass in the value &#x60;desc&#x60; to sort by creation time from newest to oldest. Pass in &#x60;asc&#x60; to sort from oldest to newest. If sort_direction is not included, the default order is oldest to newest. | [optional] 

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

# **segment_analytics**
> segment_analytics(segment_id=segment_id, length=length, ending_at=ending_at)

Segment Analytics

This endpoint allows you to retrieve a daily series of the size of a segment over time for a segment.  ### Request Components - [Segment Identifier](https://www.braze.com/docs/api/identifier_types/)  ## Response  ```json Content-Type: application/json Authorization: Bearer YOUR-REST-API-KEY {     \"message\": (required, string) the status of the export, returns 'success' when completed without errors,     \"data\" : [         {             \"time\" : (string) date as ISO 8601 date,             \"size\" : (int) size of the segment on that date         },         ...     ] } ```

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
    api_instance = openapi_client.ExportApi(api_client)
    segment_id = '{{segment_identifier}}' # str | (Required) String  Segment API identifier. (optional)
    length = '14' # str | (Required) Integer  Max number of days before `ending_at` to include in the returned series - must be between 1 and 100 inclusive. (optional)
    ending_at = '2018-06-27T23:59:59-5:00' # str | (Optional) DateTime (ISO 8601 string)  Point in time when the data series should end - defaults to time of the request. (optional)

    try:
        # Segment Analytics
        api_instance.segment_analytics(segment_id=segment_id, length=length, ending_at=ending_at)
    except Exception as e:
        print("Exception when calling ExportApi->segment_analytics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **segment_id** | **str**| (Required) String  Segment API identifier. | [optional] 
 **length** | **str**| (Required) Integer  Max number of days before &#x60;ending_at&#x60; to include in the returned series - must be between 1 and 100 inclusive. | [optional] 
 **ending_at** | **str**| (Optional) DateTime (ISO 8601 string)  Point in time when the data series should end - defaults to time of the request. | [optional] 

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

# **segment_details**
> segment_details(segment_id=segment_id)

Segment Details

This endpoint allows you to retrieve relevant information on the segment, which can be identified by the `segment_id`.  ### Request Components - [Segment Identifier](https://www.braze.com/docs/api/identifier_types/)  ## Response  ```json Content-Type: application/json Authorization: Bearer YOUR-REST-API-KEY {       \"message\": (required, string) the status of the export, returns 'success' when completed without errors,       \"created_at\" : (string) date created as ISO 8601 date,       \"updated_at\" : (string) date last updated as ISO 8601 date,       \"name\" : (string) segment name,       \"description\" : (string) human-readable description of filters,       \"text_description\" : (string) segment description,        \"tags\" : (array) tag names associated with the segment } ```

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
    api_instance = openapi_client.ExportApi(api_client)
    segment_id = '{{segment_identifier}}' # str | (Required) String  Segment API identifier (optional)

    try:
        # Segment Details
        api_instance.segment_details(segment_id=segment_id)
    except Exception as e:
        print("Exception when calling ExportApi->segment_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **segment_id** | **str**| (Required) String  Segment API identifier | [optional] 

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

# **segment_list**
> segment_list(page=page, sort_direction=sort_direction)

Segment List

This endpoint allows you to export a list of segments, each of which will include its name, Segment API Identifier, and whether it has analytics tracking enabled. The segments are returned in groups of 100 sorted by time of creation (oldest to newest by default). Archived segments are not included.  ### Request Components - [Segment Identifier](https://www.braze.com/docs/api/identifier_types/)   ## Response  ```json Content-Type: application/json Authorization: Bearer YOUR-REST-API-KEY {     \"message\": (required, string) the status of the export, returns 'success' when completed without errors,     \"segments\" : [         {             \"id\" : (string) Segment API Identifier,             \"name\" : (string) segment name,             \"analytics_tracking_enabled\" : (boolean) whether the segment has analytics tracking enabled,             \"tags\" : (array) tag names associated with the segment         },         ...     ] } ```

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
    api_instance = openapi_client.ExportApi(api_client)
    page = '1' # str | (Optional) Integer  The page of segments to return, defaults to 0 (returns the first set of up to 100) (optional)
    sort_direction = 'desc' # str | (Optional) String  Pass in the value `desc` to sort by creation time from newest to oldest. Pass in `asc` to sort from oldest to newest. If `sort_direction` is not included, the default order is oldest to newest. (optional)

    try:
        # Segment List
        api_instance.segment_list(page=page, sort_direction=sort_direction)
    except Exception as e:
        print("Exception when calling ExportApi->segment_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **str**| (Optional) Integer  The page of segments to return, defaults to 0 (returns the first set of up to 100) | [optional] 
 **sort_direction** | **str**| (Optional) String  Pass in the value &#x60;desc&#x60; to sort by creation time from newest to oldest. Pass in &#x60;asc&#x60; to sort from oldest to newest. If &#x60;sort_direction&#x60; is not included, the default order is oldest to newest. | [optional] 

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

# **send_analytics**
> send_analytics(campaign_id=campaign_id, send_id=send_id, length=length, ending_at=ending_at)

Send Analytics

This endpoint allows you to retrieve a daily series of various stats for a tracked `send_id`. Braze stores send analytics for 14 days after the send.  Campaign conversions will be attributed towards the most recent send id that a given user has received from the campaign.  > The `send_id` is only generated for API campaign sends targeting segments, connected audiences or broadcasts. When relevant, the `send_id` is included in response for the `messages/send`, `messages/schedule`, `campaign/trigger/send` and `campaign/trigger/schedule` endpoints.  ### Components Used - [Campaign Identifier](https://www.braze.com/docs/api/identifier_types/)  ### Send Analytics Endpoint API Response  ```json Content-Type: application/json Authorization: Bearer YOUR-REST-API-KEY {             \"variation_name\": (string) variation name,             \"sent\": (int) the number of sends,             \"delivered\": (int) the number of messages successfully delivered,             \"undelivered\": (int) the number of undelivered,             \"delivery_failed\": (int) the number of rejected,             \"direct_opens\": (int) the number of direct opens,             \"total_opens\": (int) the number of total opens,             \"bounces\": (int) the number of bounces,             \"body_clicks\": (int) the number of body clicks,             \"revenue\": (float) the number of dollars of revenue (USD),             \"unique_recipients\": (int) the number of unique recipients,             \"conversions\": (int) the number of conversions,             \"conversions_by_send_time\": (int) the number of conversions,             \"conversions1\": (int, optional) the number of conversions for the second conversion event,             \"conversions1_by_send_time\": (int, optional) the number of conversions for the second conversion event by send time,             \"conversions2\": (int, optional) the number of conversions for the third conversion event,             \"conversions2_by_send_time\": (int, optional) the number of conversions for the third conversion event by send time,             \"conversions3\": (int, optional) the number of conversions for the fourth conversion event,             \"conversions3_by_send_time\": (int, optional) the number of conversions for the fourth conversion event by send time           }         ]       },       \"conversions_by_send_time\": 0,       \"conversions1_by_send_time\": 0,       \"conversions2_by_send_time\": 0,       \"conversions3_by_send_time\": 0,       \"conversions\": 0,       \"conversions1\": 0,       \"conversions2\": 0,       \"conversions3\": 0,       \"unique_recipients\": 1,       \"revenue\": 0     }   ],   \"message\": \"success\" } ```

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
    api_instance = openapi_client.ExportApi(api_client)
    campaign_id = '{{campaign_identifier}}' # str | (Required) String  Campaign API identifier. (optional)
    send_id = '{{send_identifier}}' # str | (Required) String  Send API identifier. (optional)
    length = '30' # str | (Required) Integer  Maximum number of days before `ending_at` to include in the returned series. Must be between 1 and 100 inclusive. (optional)
    ending_at = '2014-12-10T23:59:59-05:00' # str | (Optional) Datetime ISO 8601 string  Date on which the data series should end. Defaults to time of the request. (optional)

    try:
        # Send Analytics
        api_instance.send_analytics(campaign_id=campaign_id, send_id=send_id, length=length, ending_at=ending_at)
    except Exception as e:
        print("Exception when calling ExportApi->send_analytics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaign_id** | **str**| (Required) String  Campaign API identifier. | [optional] 
 **send_id** | **str**| (Required) String  Send API identifier. | [optional] 
 **length** | **str**| (Required) Integer  Maximum number of days before &#x60;ending_at&#x60; to include in the returned series. Must be between 1 and 100 inclusive. | [optional] 
 **ending_at** | **str**| (Optional) Datetime ISO 8601 string  Date on which the data series should end. Defaults to time of the request. | [optional] 

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

