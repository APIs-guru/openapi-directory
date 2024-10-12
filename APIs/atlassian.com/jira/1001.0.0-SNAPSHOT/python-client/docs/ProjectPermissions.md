# ProjectPermissions

Permissions which a user has on a project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_edit** | **bool** | Whether the logged user can edit the project. | [optional] [readonly] 

## Example

```python
from openapi_client.models.project_permissions import ProjectPermissions

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectPermissions from a JSON string
project_permissions_instance = ProjectPermissions.from_json(json)
# print the JSON string representation of the object
print(ProjectPermissions.to_json())

# convert the object into a dict
project_permissions_dict = project_permissions_instance.to_dict()
# create an instance of ProjectPermissions from a dict
project_permissions_from_dict = ProjectPermissions.from_dict(project_permissions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


