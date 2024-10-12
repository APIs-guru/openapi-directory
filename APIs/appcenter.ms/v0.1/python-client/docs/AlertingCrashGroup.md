# AlertingCrashGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_display_name** | **str** |  | [optional] 
**app_platform** | **str** | SDK/Platform this thread is beeing generated from | [optional] 
**app_version** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**reason** | **str** |  | [optional] 
**stack_trace** | **List[str]** |  | [optional] 
**url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.alerting_crash_group import AlertingCrashGroup

# TODO update the JSON string below
json = "{}"
# create an instance of AlertingCrashGroup from a JSON string
alerting_crash_group_instance = AlertingCrashGroup.from_json(json)
# print the JSON string representation of the object
print(AlertingCrashGroup.to_json())

# convert the object into a dict
alerting_crash_group_dict = alerting_crash_group_instance.to_dict()
# create an instance of AlertingCrashGroup from a dict
alerting_crash_group_from_dict = AlertingCrashGroup.from_dict(alerting_crash_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


