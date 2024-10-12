# ComputeEnginePreferences

The user preferences relating to Compute Engine target platform.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**license_type** | **str** | License type to consider when calculating costs for virtual machine insights and recommendations. If unspecified, costs are calculated based on the default licensing plan. | [optional] 
**machine_preferences** | [**MachinePreferences**](MachinePreferences.md) |  | [optional] 
**persistent_disk_type** | **str** | Persistent disk type to use. If unspecified (default), all types are considered, based on available usage data. | [optional] 

## Example

```python
from openapi_client.models.compute_engine_preferences import ComputeEnginePreferences

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeEnginePreferences from a JSON string
compute_engine_preferences_instance = ComputeEnginePreferences.from_json(json)
# print the JSON string representation of the object
print(ComputeEnginePreferences.to_json())

# convert the object into a dict
compute_engine_preferences_dict = compute_engine_preferences_instance.to_dict()
# create an instance of ComputeEnginePreferences from a dict
compute_engine_preferences_from_dict = ComputeEnginePreferences.from_dict(compute_engine_preferences_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


