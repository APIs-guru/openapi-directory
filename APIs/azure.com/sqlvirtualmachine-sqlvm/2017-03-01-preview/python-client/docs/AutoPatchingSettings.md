# AutoPatchingSettings

Set a patching window during which Windows and SQL patches will be applied.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**day_of_week** | **str** | Day of week to apply the patch on. | [optional] 
**enable** | **bool** | Enable or disable autopatching on SQL virtual machine. | [optional] 
**maintenance_window_duration** | **int** | Duration of patching. | [optional] 
**maintenance_window_starting_hour** | **int** | Hour of the day when patching is initiated. Local VM time. | [optional] 

## Example

```python
from openapi_client.models.auto_patching_settings import AutoPatchingSettings

# TODO update the JSON string below
json = "{}"
# create an instance of AutoPatchingSettings from a JSON string
auto_patching_settings_instance = AutoPatchingSettings.from_json(json)
# print the JSON string representation of the object
print(AutoPatchingSettings.to_json())

# convert the object into a dict
auto_patching_settings_dict = auto_patching_settings_instance.to_dict()
# create an instance of AutoPatchingSettings from a dict
auto_patching_settings_from_dict = AutoPatchingSettings.from_dict(auto_patching_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


