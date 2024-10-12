# RetargetScheduleProperties

Properties for retargeting a virtual machine schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_resource_id** | **str** | The resource Id of the virtual machine on which the schedule operates | [optional] 
**target_resource_id** | **str** | The resource Id of the virtual machine that the schedule should be retargeted to | [optional] 

## Example

```python
from openapi_client.models.retarget_schedule_properties import RetargetScheduleProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RetargetScheduleProperties from a JSON string
retarget_schedule_properties_instance = RetargetScheduleProperties.from_json(json)
# print the JSON string representation of the object
print(RetargetScheduleProperties.to_json())

# convert the object into a dict
retarget_schedule_properties_dict = retarget_schedule_properties_instance.to_dict()
# create an instance of RetargetScheduleProperties from a dict
retarget_schedule_properties_from_dict = RetargetScheduleProperties.from_dict(retarget_schedule_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


