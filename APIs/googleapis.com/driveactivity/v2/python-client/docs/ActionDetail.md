# ActionDetail

Data describing the type and additional information of an action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applied_label_change** | [**AppliedLabelChange**](AppliedLabelChange.md) |  | [optional] 
**comment** | [**Comment**](Comment.md) |  | [optional] 
**create** | [**Create**](Create.md) |  | [optional] 
**delete** | [**Delete**](Delete.md) |  | [optional] 
**dlp_change** | [**DataLeakPreventionChange**](DataLeakPreventionChange.md) |  | [optional] 
**edit** | **object** | An empty message indicating an object was edited. | [optional] 
**move** | [**Move**](Move.md) |  | [optional] 
**permission_change** | [**PermissionChange**](PermissionChange.md) |  | [optional] 
**reference** | [**ApplicationReference**](ApplicationReference.md) |  | [optional] 
**rename** | [**Rename**](Rename.md) |  | [optional] 
**restore** | [**Restore**](Restore.md) |  | [optional] 
**settings_change** | [**SettingsChange**](SettingsChange.md) |  | [optional] 

## Example

```python
from openapi_client.models.action_detail import ActionDetail

# TODO update the JSON string below
json = "{}"
# create an instance of ActionDetail from a JSON string
action_detail_instance = ActionDetail.from_json(json)
# print the JSON string representation of the object
print(ActionDetail.to_json())

# convert the object into a dict
action_detail_dict = action_detail_instance.to_dict()
# create an instance of ActionDetail from a dict
action_detail_from_dict = ActionDetail.from_dict(action_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


