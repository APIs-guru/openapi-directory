# PrefsPermissionLevel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | One of: private or public | [optional] 

## Example

```python
from openapi_client.models.prefs_permission_level import PrefsPermissionLevel

# TODO update the JSON string below
json = "{}"
# create an instance of PrefsPermissionLevel from a JSON string
prefs_permission_level_instance = PrefsPermissionLevel.from_json(json)
# print the JSON string representation of the object
print(PrefsPermissionLevel.to_json())

# convert the object into a dict
prefs_permission_level_dict = prefs_permission_level_instance.to_dict()
# create an instance of PrefsPermissionLevel from a dict
prefs_permission_level_from_dict = PrefsPermissionLevel.from_dict(prefs_permission_level_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


