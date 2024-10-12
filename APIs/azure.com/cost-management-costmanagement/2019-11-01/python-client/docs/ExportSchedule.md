# ExportSchedule

The schedule associated with a export.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recurrence** | **str** | The schedule recurrence. | 
**recurrence_period** | [**ExportRecurrencePeriod**](ExportRecurrencePeriod.md) |  | [optional] 
**status** | **str** | The status of the schedule. Whether active or not. If inactive, the export&#39;s scheduled execution is paused. | [optional] 

## Example

```python
from openapi_client.models.export_schedule import ExportSchedule

# TODO update the JSON string below
json = "{}"
# create an instance of ExportSchedule from a JSON string
export_schedule_instance = ExportSchedule.from_json(json)
# print the JSON string representation of the object
print(ExportSchedule.to_json())

# convert the object into a dict
export_schedule_dict = export_schedule_instance.to_dict()
# create an instance of ExportSchedule from a dict
export_schedule_from_dict = ExportSchedule.from_dict(export_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


