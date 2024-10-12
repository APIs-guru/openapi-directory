# ScheduleCreationParameter

Properties for creating a schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | The location of the new virtual machine or environment | [optional] 
**name** | **str** | The name of the virtual machine or environment | [optional] 
**properties** | [**ScheduleCreationParameterProperties**](ScheduleCreationParameterProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | The tags of the resource. | [optional] 

## Example

```python
from openapi_client.models.schedule_creation_parameter import ScheduleCreationParameter

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduleCreationParameter from a JSON string
schedule_creation_parameter_instance = ScheduleCreationParameter.from_json(json)
# print the JSON string representation of the object
print(ScheduleCreationParameter.to_json())

# convert the object into a dict
schedule_creation_parameter_dict = schedule_creation_parameter_instance.to_dict()
# create an instance of ScheduleCreationParameter from a dict
schedule_creation_parameter_from_dict = ScheduleCreationParameter.from_dict(schedule_creation_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


