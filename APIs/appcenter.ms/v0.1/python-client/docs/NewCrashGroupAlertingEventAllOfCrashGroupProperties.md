# NewCrashGroupAlertingEventAllOfCrashGroupProperties

Properties of new crash group

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_display_name** | **str** |  | 
**app_platform** | **str** |  | 
**app_version** | **str** |  | 
**id** | **str** |  | 
**name** | **str** |  | 
**reason** | **str** |  | 
**stack_trace** | **List[str]** |  | 
**url** | **str** |  | 

## Example

```python
from openapi_client.models.new_crash_group_alerting_event_all_of_crash_group_properties import NewCrashGroupAlertingEventAllOfCrashGroupProperties

# TODO update the JSON string below
json = "{}"
# create an instance of NewCrashGroupAlertingEventAllOfCrashGroupProperties from a JSON string
new_crash_group_alerting_event_all_of_crash_group_properties_instance = NewCrashGroupAlertingEventAllOfCrashGroupProperties.from_json(json)
# print the JSON string representation of the object
print(NewCrashGroupAlertingEventAllOfCrashGroupProperties.to_json())

# convert the object into a dict
new_crash_group_alerting_event_all_of_crash_group_properties_dict = new_crash_group_alerting_event_all_of_crash_group_properties_instance.to_dict()
# create an instance of NewCrashGroupAlertingEventAllOfCrashGroupProperties from a dict
new_crash_group_alerting_event_all_of_crash_group_properties_from_dict = NewCrashGroupAlertingEventAllOfCrashGroupProperties.from_dict(new_crash_group_alerting_event_all_of_crash_group_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


