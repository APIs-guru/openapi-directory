# PolicyAssignmentArtifactProperties

Properties of a Policy assignment blueprint artifact.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | [**Dict[str, ParameterValue]**](ParameterValue.md) | A dictionary for parameters and their corresponding values. | 
**policy_definition_id** | **str** | Azure resource ID of the policy definition. | 
**resource_group** | **str** | Name of the resource group placeholder to which the policy will be assigned. | [optional] 
**description** | **str** | Multi-line explain this resource. | [optional] 
**display_name** | **str** | One-liner string explain this resource. | [optional] 
**depends_on** | **List[str]** | Artifacts which need to be deployed before the specified artifact. | [optional] 

## Example

```python
from openapi_client.models.policy_assignment_artifact_properties import PolicyAssignmentArtifactProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyAssignmentArtifactProperties from a JSON string
policy_assignment_artifact_properties_instance = PolicyAssignmentArtifactProperties.from_json(json)
# print the JSON string representation of the object
print(PolicyAssignmentArtifactProperties.to_json())

# convert the object into a dict
policy_assignment_artifact_properties_dict = policy_assignment_artifact_properties_instance.to_dict()
# create an instance of PolicyAssignmentArtifactProperties from a dict
policy_assignment_artifact_properties_from_dict = PolicyAssignmentArtifactProperties.from_dict(policy_assignment_artifact_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


