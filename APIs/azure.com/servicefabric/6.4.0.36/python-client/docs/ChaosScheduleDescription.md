# ChaosScheduleDescription

Defines the Chaos Schedule used by Chaos and the version of the Chaos Schedule. The version value wraps back to 0 after surpassing 2,147,483,647.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schedule** | [**ChaosSchedule**](ChaosSchedule.md) |  | [optional] 
**version** | **int** | The version number of the Schedule. | [optional] 

## Example

```python
from openapi_client.models.chaos_schedule_description import ChaosScheduleDescription

# TODO update the JSON string below
json = "{}"
# create an instance of ChaosScheduleDescription from a JSON string
chaos_schedule_description_instance = ChaosScheduleDescription.from_json(json)
# print the JSON string representation of the object
print(ChaosScheduleDescription.to_json())

# convert the object into a dict
chaos_schedule_description_dict = chaos_schedule_description_instance.to_dict()
# create an instance of ChaosScheduleDescription from a dict
chaos_schedule_description_from_dict = ChaosScheduleDescription.from_dict(chaos_schedule_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


