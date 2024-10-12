# RoleAssignmentArtifact

Blueprint artifact that applies a Role assignment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RoleAssignmentArtifactProperties**](RoleAssignmentArtifactProperties.md) |  | 
**kind** | **str** | Specifies the kind of blueprint artifact. | 
**id** | **str** | String Id used to locate any resource on Azure. | [optional] [readonly] 
**name** | **str** | Name of this resource. | [optional] [readonly] 
**type** | **str** | Type of this resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.role_assignment_artifact import RoleAssignmentArtifact

# TODO update the JSON string below
json = "{}"
# create an instance of RoleAssignmentArtifact from a JSON string
role_assignment_artifact_instance = RoleAssignmentArtifact.from_json(json)
# print the JSON string representation of the object
print(RoleAssignmentArtifact.to_json())

# convert the object into a dict
role_assignment_artifact_dict = role_assignment_artifact_instance.to_dict()
# create an instance of RoleAssignmentArtifact from a dict
role_assignment_artifact_from_dict = RoleAssignmentArtifact.from_dict(role_assignment_artifact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


