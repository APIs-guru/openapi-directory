# GroupRelation

Message representing a transitive group of a user or a group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Display name for this group. | [optional] 
**group** | **str** | Resource name for this group. | [optional] 
**group_key** | [**EntityKey**](EntityKey.md) |  | [optional] 
**labels** | **Dict[str, str]** | Labels for Group resource. | [optional] 
**relation_type** | **str** | The relation between the member and the transitive group. | [optional] 
**roles** | [**List[TransitiveMembershipRole]**](TransitiveMembershipRole.md) | Membership roles of the member for the group. | [optional] 

## Example

```python
from openapi_client.models.group_relation import GroupRelation

# TODO update the JSON string below
json = "{}"
# create an instance of GroupRelation from a JSON string
group_relation_instance = GroupRelation.from_json(json)
# print the JSON string representation of the object
print(GroupRelation.to_json())

# convert the object into a dict
group_relation_dict = group_relation_instance.to_dict()
# create an instance of GroupRelation from a dict
group_relation_from_dict = GroupRelation.from_dict(group_relation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


