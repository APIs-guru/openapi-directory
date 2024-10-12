# PolicyAssignmentArtifact

Blueprint artifact applies Policy assignments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**PolicyAssignmentArtifactProperties**](PolicyAssignmentArtifactProperties.md) |  | 
**kind** | **str** | Specifies the kind of Blueprint artifact. | 
**id** | **str** | String Id used to locate any resource on Azure. | [optional] [readonly] 
**name** | **str** | Name of this resource. | [optional] [readonly] 
**type** | **str** | Type of this resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.policy_assignment_artifact import PolicyAssignmentArtifact

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyAssignmentArtifact from a JSON string
policy_assignment_artifact_instance = PolicyAssignmentArtifact.from_json(json)
# print the JSON string representation of the object
print(PolicyAssignmentArtifact.to_json())

# convert the object into a dict
policy_assignment_artifact_dict = policy_assignment_artifact_instance.to_dict()
# create an instance of PolicyAssignmentArtifact from a dict
policy_assignment_artifact_from_dict = PolicyAssignmentArtifact.from_dict(policy_assignment_artifact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


