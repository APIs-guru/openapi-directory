# MembershipAdjacencyList

Membership graph's path information as an adjacency list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**edges** | [**List[Membership]**](Membership.md) | Each edge contains information about the member that belongs to this group. Note: Fields returned here will help identify the specific Membership resource (e.g name, preferred_member_key and role), but may not be a comprehensive list of all fields. | [optional] 
**group** | **str** | Resource name of the group that the members belong to. | [optional] 

## Example

```python
from openapi_client.models.membership_adjacency_list import MembershipAdjacencyList

# TODO update the JSON string below
json = "{}"
# create an instance of MembershipAdjacencyList from a JSON string
membership_adjacency_list_instance = MembershipAdjacencyList.from_json(json)
# print the JSON string representation of the object
print(MembershipAdjacencyList.to_json())

# convert the object into a dict
membership_adjacency_list_dict = membership_adjacency_list_instance.to_dict()
# create an instance of MembershipAdjacencyList from a dict
membership_adjacency_list_from_dict = MembershipAdjacencyList.from_dict(membership_adjacency_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


