# DateTime

Represents civil time (or occasionally physical time). This type can represent a civil time in one of a few possible ways: * When utc_offset is set and time_zone is unset: a civil time on a calendar day with a particular offset from UTC. * When time_zone is set and utc_offset is unset: a civil time on a calendar day in a particular time zone. * When neither time_zone nor utc_offset is set: a civil time on a calendar day in local time. The date is relative to the Proleptic Gregorian Calendar. If year, month, or day are 0, the DateTime is considered not to have a specific year, month, or day respectively. This type may also be used to represent a physical time if all the date and time fields are set and either case of the `time_offset` oneof is set. Consider using `Timestamp` message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field. This type is more flexible than some applications may want. Make sure to document and validate your application's limitations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**day** | **int** | Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day. | [optional] 
**hours** | **int** | Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value \&quot;24:00:00\&quot; for scenarios like business closing time. | [optional] 
**minutes** | **int** | Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0. | [optional] 
**month** | **int** | Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month. | [optional] 
**nanos** | **int** | Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0. | [optional] 
**seconds** | **int** | Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds. | [optional] 
**time_zone** | [**TimeZone**](TimeZone.md) |  | [optional] 
**utc_offset** | **str** | UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 }. | [optional] 
**year** | **int** | Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year. | [optional] 

## Example

```python
from openapi_client.models.date_time import DateTime

# TODO update the JSON string below
json = "{}"
# create an instance of DateTime from a JSON string
date_time_instance = DateTime.from_json(json)
# print the JSON string representation of the object
print(DateTime.to_json())

# convert the object into a dict
date_time_dict = date_time_instance.to_dict()
# create an instance of DateTime from a dict
date_time_from_dict = DateTime.from_dict(date_time_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


