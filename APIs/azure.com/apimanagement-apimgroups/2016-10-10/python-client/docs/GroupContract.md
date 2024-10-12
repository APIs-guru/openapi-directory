# GroupContract

Developer group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**built_in** | **bool** | true if the group is one of the three system groups (Administrators, Developers, or Guests); otherwise false. | [optional] [readonly] 
**description** | **str** | Group description. Can contain HTML formatting tags. | [optional] 
**external_id** | **str** | For external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory aad://&lt;tenant&gt;.onmicrosoft.com/groups/&lt;group object id&gt;; otherwise the value is null. | [optional] [readonly] 
**id** | **str** | Uniquely identifies the group within the current API Management service instance. The value is a valid relative URL in the format of /groups/{groupId} where {groupId} is a group identifier. | [optional] [readonly] 
**name** | **str** | Group name. | 
**type** | **str** | Group type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.group_contract import GroupContract

# TODO update the JSON string below
json = "{}"
# create an instance of GroupContract from a JSON string
group_contract_instance = GroupContract.from_json(json)
# print the JSON string representation of the object
print(GroupContract.to_json())

# convert the object into a dict
group_contract_dict = group_contract_instance.to_dict()
# create an instance of GroupContract from a dict
group_contract_from_dict = GroupContract.from_dict(group_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


