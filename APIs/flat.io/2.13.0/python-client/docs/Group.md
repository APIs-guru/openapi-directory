# Group

A group of users

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_date** | **datetime** | The creation date of the group | [optional] 
**id** | **str** | The unique identifier of the group | [optional] 
**name** | **str** | The display name of the group | [optional] 
**organization** | **str** | If the group is related to an organization, this field will contain the unique identifier of the organization  | [optional] 
**read_only** | **bool** | &#x60;True&#x60; if the group is set in read-only  | [optional] 
**type** | **str** | The type of the group: * &#x60;generic&#x60;: A group created by a Flat user * &#x60;classTeachers&#x60;: A group created automaticaly by Flat that contains   the teachers of a class * &#x60;classStudents&#x60;: A group created automaticaly by Flat that contains   the studnets of a class  | [optional] 
**users_count** | **float** | The number of users in this group | [optional] 

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


