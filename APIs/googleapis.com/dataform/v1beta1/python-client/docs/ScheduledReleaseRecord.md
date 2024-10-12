# ScheduledReleaseRecord

A record of an attempt to create a compilation result for this release config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compilation_result** | **str** | The name of the created compilation result, if one was successfully created. Must be in the format &#x60;projects/*/locations/*/repositories/*/compilationResults/*&#x60;. | [optional] 
**error_status** | [**Status**](Status.md) |  | [optional] 
**release_time** | **str** | The timestamp of this release attempt. | [optional] 

## Example

```python
from openapi_client.models.scheduled_release_record import ScheduledReleaseRecord

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduledReleaseRecord from a JSON string
scheduled_release_record_instance = ScheduledReleaseRecord.from_json(json)
# print the JSON string representation of the object
print(ScheduledReleaseRecord.to_json())

# convert the object into a dict
scheduled_release_record_dict = scheduled_release_record_instance.to_dict()
# create an instance of ScheduledReleaseRecord from a dict
scheduled_release_record_from_dict = ScheduledReleaseRecord.from_dict(scheduled_release_record_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


