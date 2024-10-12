# ActionGroupPatch

An Azure action group for patch operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Indicates whether this action group is enabled. If an action group is not enabled, then none of its actions will be activated. | [optional] [default to True]

## Example

```python
from openapi_client.models.action_group_patch import ActionGroupPatch

# TODO update the JSON string below
json = "{}"
# create an instance of ActionGroupPatch from a JSON string
action_group_patch_instance = ActionGroupPatch.from_json(json)
# print the JSON string representation of the object
print(ActionGroupPatch.to_json())

# convert the object into a dict
action_group_patch_dict = action_group_patch_instance.to_dict()
# create an instance of ActionGroupPatch from a dict
action_group_patch_from_dict = ActionGroupPatch.from_dict(action_group_patch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


