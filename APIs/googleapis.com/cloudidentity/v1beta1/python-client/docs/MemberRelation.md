# MemberRelation

Message representing a transitive membership of a group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**member** | **str** | Resource name for this member. | [optional] 
**preferred_member_key** | [**List[EntityKey]**](EntityKey.md) | Entity key has an id and a namespace. In case of discussion forums, the id will be an email address without a namespace. | [optional] 
**relation_type** | **str** | The relation between the group and the transitive membership. | [optional] 
**roles** | [**List[TransitiveMembershipRole]**](TransitiveMembershipRole.md) | The membership role details (i.e name of role and expiry time). | [optional] 

## Example

```python
from openapi_client.models.member_relation import MemberRelation

# TODO update the JSON string below
json = "{}"
# create an instance of MemberRelation from a JSON string
member_relation_instance = MemberRelation.from_json(json)
# print the JSON string representation of the object
print(MemberRelation.to_json())

# convert the object into a dict
member_relation_dict = member_relation_instance.to_dict()
# create an instance of MemberRelation from a dict
member_relation_from_dict = MemberRelation.from_dict(member_relation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


