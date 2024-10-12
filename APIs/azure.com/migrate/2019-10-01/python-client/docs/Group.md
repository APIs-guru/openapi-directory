# Group

A group created in a Migration project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**e_tag** | **str** | For optimistic concurrency control. | [optional] 
**id** | **str** | Path reference to this group. /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName} | [optional] [readonly] 
**name** | **str** | Name of the group. | [optional] [readonly] 
**properties** | [**GroupProperties**](GroupProperties.md) |  | 
**type** | **str** | Type of the object &#x3D; [Microsoft.Migrate/assessmentProjects/groups]. | [optional] [readonly] 

## Example

```python
from openapi_client.models.group import Group

# TODO update the JSON string below
json = "{}"
# create an instance of Group from a JSON string
group_instance = Group.from_json(json)
# print the JSON string representation of the object
print(Group.to_json())

# convert the object into a dict
group_dict = group_instance.to_dict()
# create an instance of Group from a dict
group_from_dict = Group.from_dict(group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


