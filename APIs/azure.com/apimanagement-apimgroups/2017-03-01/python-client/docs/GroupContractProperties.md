# GroupContractProperties

Developer group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**built_in** | **bool** | true if the group is one of the three system groups (Administrators, Developers, or Guests); otherwise false. | [optional] [readonly] 
**description** | **str** | Group description. Can contain HTML formatting tags. | [optional] 
**external_id** | **str** | For external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory aad://&lt;tenant&gt;.onmicrosoft.com/groups/&lt;group object id&gt;; otherwise the value is null. | [optional] 
**name** | **str** | Group name. | 
**type** | **str** | Group type. | [optional] 

## Example

```python
from openapi_client.models.group_contract_properties import GroupContractProperties

# TODO update the JSON string below
json = "{}"
# create an instance of GroupContractProperties from a JSON string
group_contract_properties_instance = GroupContractProperties.from_json(json)
# print the JSON string representation of the object
print(GroupContractProperties.to_json())

# convert the object into a dict
group_contract_properties_dict = group_contract_properties_instance.to_dict()
# create an instance of GroupContractProperties from a dict
group_contract_properties_from_dict = GroupContractProperties.from_dict(group_contract_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


