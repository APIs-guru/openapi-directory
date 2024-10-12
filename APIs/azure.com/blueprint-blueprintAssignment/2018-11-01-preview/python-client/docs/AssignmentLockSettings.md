# AssignmentLockSettings

Defines how resources deployed by a blueprint assignment are locked.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**excluded_principals** | **List[str]** | List of AAD principals excluded from blueprint locks. Up to 5 principals are permitted. | [optional] 
**mode** | **str** | Lock mode. | [optional] 

## Example

```python
from openapi_client.models.assignment_lock_settings import AssignmentLockSettings

# TODO update the JSON string below
json = "{}"
# create an instance of AssignmentLockSettings from a JSON string
assignment_lock_settings_instance = AssignmentLockSettings.from_json(json)
# print the JSON string representation of the object
print(AssignmentLockSettings.to_json())

# convert the object into a dict
assignment_lock_settings_dict = assignment_lock_settings_instance.to_dict()
# create an instance of AssignmentLockSettings from a dict
assignment_lock_settings_from_dict = AssignmentLockSettings.from_dict(assignment_lock_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


