# ApplicableSchedule

Schedules applicable to a virtual machine. The schedules may have been defined on a VM or on lab level.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ApplicableScheduleProperties**](ApplicableScheduleProperties.md) |  | 
**id** | **str** | The identifier of the resource. | [optional] [readonly] 
**location** | **str** | The location of the resource. | [optional] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | The tags of the resource. | [optional] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.applicable_schedule import ApplicableSchedule

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicableSchedule from a JSON string
applicable_schedule_instance = ApplicableSchedule.from_json(json)
# print the JSON string representation of the object
print(ApplicableSchedule.to_json())

# convert the object into a dict
applicable_schedule_dict = applicable_schedule_instance.to_dict()
# create an instance of ApplicableSchedule from a dict
applicable_schedule_from_dict = ApplicableSchedule.from_dict(applicable_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


