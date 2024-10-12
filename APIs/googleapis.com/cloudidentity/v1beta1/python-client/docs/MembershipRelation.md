# MembershipRelation

Message containing membership relation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | An extended description to help users determine the purpose of a &#x60;Group&#x60;. | [optional] 
**display_name** | **str** | The display name of the &#x60;Group&#x60;. | [optional] 
**group** | **str** | The [resource name](https://cloud.google.com/apis/design/resource_names) of the &#x60;Group&#x60;. Shall be of the form &#x60;groups/{group_id}&#x60;. | [optional] 
**group_key** | [**EntityKey**](EntityKey.md) |  | [optional] 
**labels** | **Dict[str, str]** | One or more label entries that apply to the Group. Currently supported labels contain a key with an empty value. | [optional] 
**membership** | **str** | The [resource name](https://cloud.google.com/apis/design/resource_names) of the &#x60;Membership&#x60;. Shall be of the form &#x60;groups/{group_id}/memberships/{membership_id}&#x60;. | [optional] 
**roles** | [**List[MembershipRole]**](MembershipRole.md) | The &#x60;MembershipRole&#x60;s that apply to the &#x60;Membership&#x60;. | [optional] 

## Example

```python
from openapi_client.models.membership_relation import MembershipRelation

# TODO update the JSON string below
json = "{}"
# create an instance of MembershipRelation from a JSON string
membership_relation_instance = MembershipRelation.from_json(json)
# print the JSON string representation of the object
print(MembershipRelation.to_json())

# convert the object into a dict
membership_relation_dict = membership_relation_instance.to_dict()
# create an instance of MembershipRelation from a dict
membership_relation_from_dict = MembershipRelation.from_dict(membership_relation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


