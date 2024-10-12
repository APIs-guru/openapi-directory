# MonitorGet

The Monitor resource is a collection of services that monitor the presence and/or absence of pings, and follow sets of rules to dispatch or not dispatch alerts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_payload_extended** | **str** | Payload that must be sent in the body of each alert when you use your own email or webhook alert services. This is the body for email alerts and the request body for webhook alerts. This text is not sent when using the built-in alert services. Sending user-supplied text via our own email server is too big a risk to our email reputation. Max 2 MB characters. | [optional] 
**alert_payload_short** | **str** | Payload that must be sent in the body of each alert when you use your own short message alert services. This also serves as the subject for email alerts. Not used for webhooks. This text is not sent when using the built-in alert services. Sending user-supplied text via our own email server is too big a risk to our email reputation. Max 100 characters. | [optional] 
**alert_services** | **List[str]** | The alert services that are related to this resource. | [optional] 
**allow_unauthenticated_pings** | **bool** | Indicates that the monitor will accept pings that are not OAuth authenticated. | [optional] 
**content_check_must_not_exist** | **bool** | Indicates that the Web Content monitor must verify the absence of the text or the Xpath node, and dispatch an alert if it is present. The default behavior is to verify the presence of the text or the Xpath node, and dispatch an alert if it is absent. | [optional] 
**content_check_text** | **str** | The text (case-insensitive) that must or must not be present at the contentCheckUrl. If contentCheckXpathFilter is supplied, then the only the text within that nodes is evaluated, otherwise text on the entire web page is evaluated. | [optional] 
**content_check_url** | **str** | The URL that the Web Content monitor type must evaluate for the specified conditions. | [optional] 
**content_check_xpath_filter** | **str** | The Xpath filter (&lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/XPath\&quot;&gt;Xpath&lt;/a&gt;, &lt;a href&#x3D;\&quot;https://devhints.io/xpath\&quot;&gt;Xpath Cheatsheet&lt;/a&gt;) that selects a specific node in the HTML of the target web page. If contentCheckText is supplied, then only the text within the selected node is evaluated. If contentCheckText is left empty, then the presence or the absence of the selected node is evaluated. | [optional] 
**created_at** | **datetime** | When the resource instance was created. This date-time is in the UTC timezone. | [optional] [readonly] 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**grace_seconds** | **int** | The number of grace seconds after expiry of the time when the next ping was expected, before raising an alert. The number of grace seconds to allow before classifying a Measured Monitor task duration as an anomaly. | [optional] 
**humanized_interval** | **str** | The expected ping / run interval of this monitor in human readable form. | [optional] [readonly] 
**id** | **str** | The unique identifier of the resource instance. | [optional] [readonly] 
**internal_monitor_name** | **str** | The internal name of the monitor. This name is used in alerts when you use the built-in alert services. Sending user-supplied text via our own email server is too big a risk to our email reputation. The monitorName field is used when you use your own alert services. | [optional] 
**interval_days** | **int** | The number of days in the expected ping / run / measured / scheduled interval. Can be left blank. Can be specified together with any combination of the other interval fields. | [optional] 
**interval_hours** | **int** | The number of hours in the expected ping / run / measured / scheduled interval. Can be left blank. Can be specified together with any combination of the other interval fields. | [optional] 
**interval_minutes** | **int** | The number of minutes in the expected ping / run / measured / scheduled interval. Can be left blank. Can be specified together with any combination of the other interval fields. | [optional] 
**interval_months** | **int** | The number of months in the expected ping / run / measured / scheduled interval. Can be left blank. Can be specified together with any combination of the other interval fields. | [optional] 
**interval_seconds** | **int** | The number of seconds in the expected ping / run / measured / scheduled interval. Can be left blank. Can be specified together with any combination of the other interval fields. | [optional] 
**interval_years** | **int** | The number of years in the expected ping / run / measured / scheduled interval. Can be left blank. Can be specified together with any combination of the other interval fields. | [optional] 
**is_monitor_paused** | **bool** | Indicates that the monitor is paused and will not send alerts. | [optional] 
**last_ping_at** | **datetime** | When the last ping was received. This date-time is in the UTC timezone. | [optional] 
**monitor_name** | **str** | The name of the monitor. Max 255 characters. | 
**monitor_notes** | **str** | Notes about the monitor. Max 10,000 characters. Formatting using Markdown is allowed. HTML will be removed. | [optional] 
**monitor_status_code** | **str** | The status of the monitor. | [optional] 
**monitor_type_code** | **str** | The type of the monitor. | 
**next_ping_at** | **datetime** | When the next ping is expected. This date-time is in the UTC timezone. | [optional] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**ping_secret** | **str** | A secret key that can be sent in the X_PING_SECRET HTTP request header of a ping for additional security. Sending the secret is recommended for unauthenticated ping requests. It is redundant for OAuth authenticated ping requests that have the \&quot;Authorization: Bearer\&quot; header. | [optional] 
**public_description** | **str** | A text description of the monitor that is accessible to unauthenticated users that receive an alert from the monitor. Formatting using Markdown is allowed. HTML will be removed. | [optional] 
**resource_owner** | **str** | The name of the person who owns this resource. | [optional] 
**start_monitor_at** | **datetime** | When to start the Regular Interval type monitor or Heartbeat type monitor, or when to send the first alert of the Scheduled Repeatable Alert monitor. Cannot be blank for a Regular Interval, Heartbeat, or Scheduled Repeatable Alert type monitor, must be blank for other monitors types. This date-time is always interpreted to be in the timezone of the monitor. Any UTC offset is ignored. | [optional] 
**start_monitor_at_utc** | **datetime** | The startMonitorAt date-time in the UTC timezone. | [optional] 
**system_messages** | **List[str]** | Service notes regarding the resource. | [optional] 
**timezone_code** | **str** | The timezone of the monitor. Dates and times in alerts and reports will be in this time zone. | 
**web_response_seconds_limit** | **int** | The time in seconds that the Web Response monitor type must allow for the web page to respond. | [optional] 
**web_response_url** | **str** | The URL that the Web Response monitor type must evaluate for the specified conditions. | [optional] 

## Example

```python
from openapi_client.models.monitor_get import MonitorGet

# TODO update the JSON string below
json = "{}"
# create an instance of MonitorGet from a JSON string
monitor_get_instance = MonitorGet.from_json(json)
# print the JSON string representation of the object
print(MonitorGet.to_json())

# convert the object into a dict
monitor_get_dict = monitor_get_instance.to_dict()
# create an instance of MonitorGet from a dict
monitor_get_from_dict = MonitorGet.from_dict(monitor_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


