# ScheduleCreationParameterFragment

Properties for creating a schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | The location of the new virtual machine or environment | [optional] 
**name** | **str** | The name of the virtual machine or environment | [optional] 
**properties** | [**ScheduleCreationParameterPropertiesFragment**](ScheduleCreationParameterPropertiesFragment.md) |  | [optional] 
**tags** | **Dict[str, str]** | The tags of the resource. | [optional] 

## Example

```python
from openapi_client.models.schedule_creation_parameter_fragment import ScheduleCreationParameterFragment

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduleCreationParameterFragment from a JSON string
schedule_creation_parameter_fragment_instance = ScheduleCreationParameterFragment.from_json(json)
# print the JSON string representation of the object
print(ScheduleCreationParameterFragment.to_json())

# convert the object into a dict
schedule_creation_parameter_fragment_dict = schedule_creation_parameter_fragment_instance.to_dict()
# create an instance of ScheduleCreationParameterFragment from a dict
schedule_creation_parameter_fragment_from_dict = ScheduleCreationParameterFragment.from_dict(schedule_creation_parameter_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


