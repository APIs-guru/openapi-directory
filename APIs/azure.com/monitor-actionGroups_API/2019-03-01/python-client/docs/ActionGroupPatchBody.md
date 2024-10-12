# ActionGroupPatchBody

An action group object for the body of patch operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ActionGroupPatch**](ActionGroupPatch.md) |  | [optional] 
**tags** | **object** | Resource tags | [optional] 

## Example

```python
from openapi_client.models.action_group_patch_body import ActionGroupPatchBody

# TODO update the JSON string below
json = "{}"
# create an instance of ActionGroupPatchBody from a JSON string
action_group_patch_body_instance = ActionGroupPatchBody.from_json(json)
# print the JSON string representation of the object
print(ActionGroupPatchBody.to_json())

# convert the object into a dict
action_group_patch_body_dict = action_group_patch_body_instance.to_dict()
# create an instance of ActionGroupPatchBody from a dict
action_group_patch_body_from_dict = ActionGroupPatchBody.from_dict(action_group_patch_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


