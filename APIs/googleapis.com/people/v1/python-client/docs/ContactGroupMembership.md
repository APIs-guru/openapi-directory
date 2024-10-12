# ContactGroupMembership

A Google contact group membership.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_group_id** | **str** | Output only. The contact group ID for the contact group membership. | [optional] [readonly] 
**contact_group_resource_name** | **str** | The resource name for the contact group, assigned by the server. An ASCII string, in the form of &#x60;contactGroups/{contact_group_id}&#x60;. Only contact_group_resource_name can be used for modifying memberships. Any contact group membership can be removed, but only user group or \&quot;myContacts\&quot; or \&quot;starred\&quot; system groups memberships can be added. A contact must always have at least one contact group membership. | [optional] 

## Example

```python
from openapi_client.models.contact_group_membership import ContactGroupMembership

# TODO update the JSON string below
json = "{}"
# create an instance of ContactGroupMembership from a JSON string
contact_group_membership_instance = ContactGroupMembership.from_json(json)
# print the JSON string representation of the object
print(ContactGroupMembership.to_json())

# convert the object into a dict
contact_group_membership_dict = contact_group_membership_instance.to_dict()
# create an instance of ContactGroupMembership from a dict
contact_group_membership_from_dict = ContactGroupMembership.from_dict(contact_group_membership_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


