# PreferenceSet

The preferences that apply to all assets in a given context.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The timestamp when the preference set was created. | [optional] [readonly] 
**description** | **str** | A description of the preference set. | [optional] 
**display_name** | **str** | User-friendly display name. Maximum length is 63 characters. | [optional] 
**name** | **str** | Output only. Name of the preference set. | [optional] [readonly] 
**update_time** | **str** | Output only. The timestamp when the preference set was last updated. | [optional] [readonly] 
**virtual_machine_preferences** | [**VirtualMachinePreferences**](VirtualMachinePreferences.md) |  | [optional] 

## Example

```python
from openapi_client.models.preference_set import PreferenceSet

# TODO update the JSON string below
json = "{}"
# create an instance of PreferenceSet from a JSON string
preference_set_instance = PreferenceSet.from_json(json)
# print the JSON string representation of the object
print(PreferenceSet.to_json())

# convert the object into a dict
preference_set_dict = preference_set_instance.to_dict()
# create an instance of PreferenceSet from a dict
preference_set_from_dict = PreferenceSet.from_dict(preference_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


