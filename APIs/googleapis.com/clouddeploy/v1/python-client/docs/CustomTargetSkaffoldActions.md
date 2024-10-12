# CustomTargetSkaffoldActions

CustomTargetSkaffoldActions represents the `CustomTargetType` configuration using Skaffold custom actions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deploy_action** | **str** | Required. The Skaffold custom action responsible for deploy operations. | [optional] 
**include_skaffold_modules** | [**List[SkaffoldModules]**](SkaffoldModules.md) | Optional. List of Skaffold modules Cloud Deploy will include in the Skaffold Config as required before performing diagnose. | [optional] 
**render_action** | **str** | Optional. The Skaffold custom action responsible for render operations. If not provided then Cloud Deploy will perform the render operations via &#x60;skaffold render&#x60;. | [optional] 

## Example

```python
from openapi_client.models.custom_target_skaffold_actions import CustomTargetSkaffoldActions

# TODO update the JSON string below
json = "{}"
# create an instance of CustomTargetSkaffoldActions from a JSON string
custom_target_skaffold_actions_instance = CustomTargetSkaffoldActions.from_json(json)
# print the JSON string representation of the object
print(CustomTargetSkaffoldActions.to_json())

# convert the object into a dict
custom_target_skaffold_actions_dict = custom_target_skaffold_actions_instance.to_dict()
# create an instance of CustomTargetSkaffoldActions from a dict
custom_target_skaffold_actions_from_dict = CustomTargetSkaffoldActions.from_dict(custom_target_skaffold_actions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


