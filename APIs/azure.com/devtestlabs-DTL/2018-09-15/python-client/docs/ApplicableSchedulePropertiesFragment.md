# ApplicableSchedulePropertiesFragment

Properties of a schedules applicable to a virtual machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lab_vms_shutdown** | [**ScheduleFragment**](ScheduleFragment.md) |  | [optional] 
**lab_vms_startup** | [**ScheduleFragment**](ScheduleFragment.md) |  | [optional] 

## Example

```python
from openapi_client.models.applicable_schedule_properties_fragment import ApplicableSchedulePropertiesFragment

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicableSchedulePropertiesFragment from a JSON string
applicable_schedule_properties_fragment_instance = ApplicableSchedulePropertiesFragment.from_json(json)
# print the JSON string representation of the object
print(ApplicableSchedulePropertiesFragment.to_json())

# convert the object into a dict
applicable_schedule_properties_fragment_dict = applicable_schedule_properties_fragment_instance.to_dict()
# create an instance of ApplicableSchedulePropertiesFragment from a dict
applicable_schedule_properties_fragment_from_dict = ApplicableSchedulePropertiesFragment.from_dict(applicable_schedule_properties_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


