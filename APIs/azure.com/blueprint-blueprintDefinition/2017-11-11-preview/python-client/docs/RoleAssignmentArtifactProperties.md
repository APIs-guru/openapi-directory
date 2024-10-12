# RoleAssignmentArtifactProperties

Properties of the Role assignment artifact.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**principal_ids** | **object** | Array of user or group identities in Azure Active Directory. The roleDefinition will apply to these identity. | 
**resource_group** | **str** | RoleAssignment will be scope to this resourceGroup, if left empty, it would scope to the subscription. | [optional] 
**role_definition_id** | **str** | Azure resource ID of the RoleDefinition. | 
**description** | **str** | Multi-line explain this resource. | [optional] 
**display_name** | **str** | One-liner string explain this resource. | [optional] 
**depends_on** | **List[str]** | Artifacts which need to be deployed before the specified artifact. | [optional] 

## Example

```python
from openapi_client.models.role_assignment_artifact_properties import RoleAssignmentArtifactProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RoleAssignmentArtifactProperties from a JSON string
role_assignment_artifact_properties_instance = RoleAssignmentArtifactProperties.from_json(json)
# print the JSON string representation of the object
print(RoleAssignmentArtifactProperties.to_json())

# convert the object into a dict
role_assignment_artifact_properties_dict = role_assignment_artifact_properties_instance.to_dict()
# create an instance of RoleAssignmentArtifactProperties from a dict
role_assignment_artifact_properties_from_dict = RoleAssignmentArtifactProperties.from_dict(role_assignment_artifact_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


