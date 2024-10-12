# EventDateTime


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_doors_open_label** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**doors_open** | **str** | The date/time when the doors open at the venue. This is an ISO 8601 extended format date/time, with or without an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: &#x60;1985-04-12T23:20:50.52Z&#x60; would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. &#x60;1985-04-12T19:20:50.52-04:00&#x60; would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. &#x60;1985-04-12T19:20:50.52&#x60; would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. The portion of the date/time without the offset is considered the \&quot;local date/time\&quot;. This should be the local date/time at the venue. For example, if the event occurs at the 20th hour of June 5th, 2018 at the venue, the local date/time portion should be &#x60;2018-06-05T20:00:00&#x60;. If the local date/time at the venue is 4 hours before UTC, an offset of &#x60;-04:00&#x60; may be appended. Without offset information, some rich features may not be available. | [optional] 
**doors_open_label** | **str** | The label to use for the doors open value (&#x60;doorsOpen&#x60;) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both &#x60;doorsOpenLabel&#x60; and &#x60;customDoorsOpenLabel&#x60; may not be set. If neither is set, the label will default to \&quot;Doors Open\&quot;, localized. If the doors open field is unset, this label will not be used. | [optional] 
**end** | **str** | The date/time when the event ends. If the event spans multiple days, it should be the end date/time on the last day. This is an ISO 8601 extended format date/time, with or without an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: &#x60;1985-04-12T23:20:50.52Z&#x60; would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. &#x60;1985-04-12T19:20:50.52-04:00&#x60; would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. &#x60;1985-04-12T19:20:50.52&#x60; would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. The portion of the date/time without the offset is considered the \&quot;local date/time\&quot;. This should be the local date/time at the venue. For example, if the event occurs at the 20th hour of June 5th, 2018 at the venue, the local date/time portion should be &#x60;2018-06-05T20:00:00&#x60;. If the local date/time at the venue is 4 hours before UTC, an offset of &#x60;-04:00&#x60; may be appended. Without offset information, some rich features may not be available. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string &#x60;\&quot;walletobjects#eventDateTime\&quot;&#x60;. | [optional] 
**start** | **str** | The date/time when the event starts. If the event spans multiple days, it should be the start date/time on the first day. This is an ISO 8601 extended format date/time, with or without an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: &#x60;1985-04-12T23:20:50.52Z&#x60; would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. &#x60;1985-04-12T19:20:50.52-04:00&#x60; would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. &#x60;1985-04-12T19:20:50.52&#x60; would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. The portion of the date/time without the offset is considered the \&quot;local date/time\&quot;. This should be the local date/time at the venue. For example, if the event occurs at the 20th hour of June 5th, 2018 at the venue, the local date/time portion should be &#x60;2018-06-05T20:00:00&#x60;. If the local date/time at the venue is 4 hours before UTC, an offset of &#x60;-04:00&#x60; may be appended. Without offset information, some rich features may not be available. | [optional] 

## Example

```python
from openapi_client.models.event_date_time import EventDateTime

# TODO update the JSON string below
json = "{}"
# create an instance of EventDateTime from a JSON string
event_date_time_instance = EventDateTime.from_json(json)
# print the JSON string representation of the object
print(EventDateTime.to_json())

# convert the object into a dict
event_date_time_dict = event_date_time_instance.to_dict()
# create an instance of EventDateTime from a dict
event_date_time_from_dict = EventDateTime.from_dict(event_date_time_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


