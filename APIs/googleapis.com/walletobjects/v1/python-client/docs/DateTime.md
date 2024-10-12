# DateTime


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **str** | An ISO 8601 extended format date/time. Offset may or may not be required (refer to the parent field&#39;s documentation). Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: &#x60;1985-04-12T23:20:50.52Z&#x60; would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. &#x60;1985-04-12T19:20:50.52-04:00&#x60; would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the date/time is intended for a physical location in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. &#x60;1985-04-12T19:20:50.52&#x60; would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. Providing an offset makes this an absolute instant in time around the world. The date/time will be adjusted based on the user&#39;s time zone. For example, a time of &#x60;2018-06-19T18:30:00-04:00&#x60; will be 18:30:00 for a user in New York and 15:30:00 for a user in Los Angeles. Omitting the offset makes this a local date/time, representing several instants in time around the world. The date/time will always be in the user&#39;s current time zone. For example, a time of &#x60;2018-06-19T18:30:00&#x60; will be 18:30:00 for a user in New York and also 18:30:00 for a user in Los Angeles. This is useful when the same local date/time should apply to many physical locations across several time zones. | [optional] 

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


