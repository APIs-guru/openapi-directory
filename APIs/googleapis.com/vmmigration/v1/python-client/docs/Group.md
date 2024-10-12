# Group

Describes message for 'Group' resource. The Group is a collections of several MigratingVms.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The create time timestamp. | [optional] [readonly] 
**description** | **str** | User-provided description of the group. | [optional] 
**display_name** | **str** | Display name is a user defined name for this group which can be updated. | [optional] 
**migration_target_type** | **str** | Immutable. The target type of this group. | [optional] 
**name** | **str** | Output only. The Group name. | [optional] [readonly] 
**update_time** | **str** | Output only. The update time timestamp. | [optional] [readonly] 

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


