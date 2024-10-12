# Group

A resource that represents an asset group. The purpose of an asset group is to bundle a set of assets that have something in common, while allowing users to add annotations to the group. An asset can belong to multiple groups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The timestamp when the group was created. | [optional] [readonly] 
**description** | **str** | Optional. The description of the group. | [optional] 
**display_name** | **str** | Optional. User-friendly display name. | [optional] 
**labels** | **Dict[str, str]** | Labels as key value pairs. | [optional] 
**name** | **str** | Output only. The name of the group. | [optional] [readonly] 
**update_time** | **str** | Output only. The timestamp when the group was last updated. | [optional] [readonly] 

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


