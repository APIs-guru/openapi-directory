# SuppressionSchedule

Schedule for a given suppression configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_date** | **str** | End date for suppression | [optional] 
**end_time** | **str** | End date for suppression | [optional] 
**recurrence_values** | **List[int]** | Specifies the values for recurrence pattern | [optional] 
**start_date** | **str** | Start date for suppression | [optional] 
**start_time** | **str** | Start time for suppression | [optional] 

## Example

```python
from openapi_client.models.suppression_schedule import SuppressionSchedule

# TODO update the JSON string below
json = "{}"
# create an instance of SuppressionSchedule from a JSON string
suppression_schedule_instance = SuppressionSchedule.from_json(json)
# print the JSON string representation of the object
print(SuppressionSchedule.to_json())

# convert the object into a dict
suppression_schedule_dict = suppression_schedule_instance.to_dict()
# create an instance of SuppressionSchedule from a dict
suppression_schedule_from_dict = SuppressionSchedule.from_dict(suppression_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


