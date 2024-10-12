# ApplicableScheduleProperties

Properties of a schedules applicable to a virtual machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lab_vms_shutdown** | [**Schedule**](Schedule.md) |  | [optional] 
**lab_vms_startup** | [**Schedule**](Schedule.md) |  | [optional] 

## Example

```python
from openapi_client.models.applicable_schedule_properties import ApplicableScheduleProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicableScheduleProperties from a JSON string
applicable_schedule_properties_instance = ApplicableScheduleProperties.from_json(json)
# print the JSON string representation of the object
print(ApplicableScheduleProperties.to_json())

# convert the object into a dict
applicable_schedule_properties_dict = applicable_schedule_properties_instance.to_dict()
# create an instance of ApplicableScheduleProperties from a dict
applicable_schedule_properties_from_dict = ApplicableScheduleProperties.from_dict(applicable_schedule_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


