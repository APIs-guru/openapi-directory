# ModifyContactGroupMembersRequest

A request to modify an existing contact group's members. Contacts can be removed from any group but they can only be added to a user group or \"myContacts\" or \"starred\" system groups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_names_to_add** | **List[str]** | Optional. The resource names of the contact people to add in the form of &#x60;people/{person_id}&#x60;. The total number of resource names in &#x60;resource_names_to_add&#x60; and &#x60;resource_names_to_remove&#x60; must be less than or equal to 1000. | [optional] 
**resource_names_to_remove** | **List[str]** | Optional. The resource names of the contact people to remove in the form of &#x60;people/{person_id}&#x60;. The total number of resource names in &#x60;resource_names_to_add&#x60; and &#x60;resource_names_to_remove&#x60; must be less than or equal to 1000. | [optional] 

## Example

```python
from openapi_client.models.modify_contact_group_members_request import ModifyContactGroupMembersRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ModifyContactGroupMembersRequest from a JSON string
modify_contact_group_members_request_instance = ModifyContactGroupMembersRequest.from_json(json)
# print the JSON string representation of the object
print(ModifyContactGroupMembersRequest.to_json())

# convert the object into a dict
modify_contact_group_members_request_dict = modify_contact_group_members_request_instance.to_dict()
# create an instance of ModifyContactGroupMembersRequest from a dict
modify_contact_group_members_request_from_dict = ModifyContactGroupMembersRequest.from_dict(modify_contact_group_members_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


