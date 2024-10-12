# ProjectRoleGroup

Details of the group associated with the role.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The display name of the group. | [optional] 
**group_id** | **str** | The ID of the group. | [optional] 
**name** | **str** | The name of the group. As a group&#39;s name can change, use of &#x60;groupId&#x60; is recommended to identify the group. | [optional] 

## Example

```python
from openapi_client.models.project_role_group import ProjectRoleGroup

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectRoleGroup from a JSON string
project_role_group_instance = ProjectRoleGroup.from_json(json)
# print the JSON string representation of the object
print(ProjectRoleGroup.to_json())

# convert the object into a dict
project_role_group_dict = project_role_group_instance.to_dict()
# create an instance of ProjectRoleGroup from a dict
project_role_group_from_dict = ProjectRoleGroup.from_dict(project_role_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


