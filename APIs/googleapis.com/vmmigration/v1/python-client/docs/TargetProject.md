# TargetProject

TargetProject message represents a target Compute Engine project for a migration or a clone.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time this target project resource was created (not related to when the Compute Engine project it points to was created). | [optional] [readonly] 
**description** | **str** | The target project&#39;s description. | [optional] 
**name** | **str** | Output only. The name of the target project. | [optional] [readonly] 
**project** | **str** | Required. The target project ID (number) or project name. | [optional] 
**update_time** | **str** | Output only. The last time the target project resource was updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.target_project import TargetProject

# TODO update the JSON string below
json = "{}"
# create an instance of TargetProject from a JSON string
target_project_instance = TargetProject.from_json(json)
# print the JSON string representation of the object
print(TargetProject.to_json())

# convert the object into a dict
target_project_dict = target_project_instance.to_dict()
# create an instance of TargetProject from a dict
target_project_from_dict = TargetProject.from_dict(target_project_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


