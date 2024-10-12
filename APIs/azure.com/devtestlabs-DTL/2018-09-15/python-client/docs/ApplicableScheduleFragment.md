# ApplicableScheduleFragment

Schedules applicable to a virtual machine. The schedules may have been defined on a VM or on lab level.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ApplicableSchedulePropertiesFragment**](ApplicableSchedulePropertiesFragment.md) |  | [optional] 
**tags** | **Dict[str, str]** | The tags of the resource. | [optional] 

## Example

```python
from openapi_client.models.applicable_schedule_fragment import ApplicableScheduleFragment

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicableScheduleFragment from a JSON string
applicable_schedule_fragment_instance = ApplicableScheduleFragment.from_json(json)
# print the JSON string representation of the object
print(ApplicableScheduleFragment.to_json())

# convert the object into a dict
applicable_schedule_fragment_dict = applicable_schedule_fragment_instance.to_dict()
# create an instance of ApplicableScheduleFragment from a dict
applicable_schedule_fragment_from_dict = ApplicableScheduleFragment.from_dict(applicable_schedule_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


