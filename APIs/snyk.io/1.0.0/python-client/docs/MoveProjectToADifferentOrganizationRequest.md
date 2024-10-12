# MoveProjectToADifferentOrganizationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_org_id** | **str** | The ID of the organization that the project should be moved to. The API_KEY must have group admin permissions. If the project is moved to a new group, a personal level API key is needed. | [optional] 

## Example

```python
from openapi_client.models.move_project_to_a_different_organization_request import MoveProjectToADifferentOrganizationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MoveProjectToADifferentOrganizationRequest from a JSON string
move_project_to_a_different_organization_request_instance = MoveProjectToADifferentOrganizationRequest.from_json(json)
# print the JSON string representation of the object
print(MoveProjectToADifferentOrganizationRequest.to_json())

# convert the object into a dict
move_project_to_a_different_organization_request_dict = move_project_to_a_different_organization_request_instance.to_dict()
# create an instance of MoveProjectToADifferentOrganizationRequest from a dict
move_project_to_a_different_organization_request_from_dict = MoveProjectToADifferentOrganizationRequest.from_dict(move_project_to_a_different_organization_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


