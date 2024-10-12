# DriveTimeSpanRestrict

The time span search restrict (e.g. \"after:2017-09-11 before:2017-09-12\").

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.drive_time_span_restrict import DriveTimeSpanRestrict

# TODO update the JSON string below
json = "{}"
# create an instance of DriveTimeSpanRestrict from a JSON string
drive_time_span_restrict_instance = DriveTimeSpanRestrict.from_json(json)
# print the JSON string representation of the object
print(DriveTimeSpanRestrict.to_json())

# convert the object into a dict
drive_time_span_restrict_dict = drive_time_span_restrict_instance.to_dict()
# create an instance of DriveTimeSpanRestrict from a dict
drive_time_span_restrict_from_dict = DriveTimeSpanRestrict.from_dict(drive_time_span_restrict_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


