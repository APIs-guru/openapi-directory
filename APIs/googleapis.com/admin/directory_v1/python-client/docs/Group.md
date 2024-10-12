# Group

Google Groups provide your users the ability to send messages to groups of people using the group's email address. For more information about common tasks, see the [Developer's Guide](https://developers.google.com/admin-sdk/directory/v1/guides/manage-groups). For information about other types of groups, see the [Cloud Identity Groups API documentation](https://cloud.google.com/identity/docs/groups). Note: The user calling the API (or being impersonated by a service account) must have an assigned [role](https://developers.google.com/admin-sdk/directory/v1/guides/manage-roles) that includes Admin API Groups permissions, such as Super Admin or Groups Admin.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_created** | **bool** | Read-only. Value is &#x60;true&#x60; if this group was created by an administrator rather than a user. | [optional] 
**aliases** | **List[str]** | Read-only. The list of a group&#39;s alias email addresses. To add, update, or remove a group&#39;s aliases, use the &#x60;groups.aliases&#x60; methods. If edited in a group&#39;s POST or PUT request, the edit is ignored. | [optional] 
**description** | **str** | An extended description to help users determine the purpose of a group. For example, you can include information about who should join the group, the types of messages to send to the group, links to FAQs about the group, or related groups. Maximum length is &#x60;4,096&#x60; characters. | [optional] 
**direct_members_count** | **str** | The number of users that are direct members of the group. If a group is a member (child) of this group (the parent), members of the child group are not counted in the &#x60;directMembersCount&#x60; property of the parent group. | [optional] 
**email** | **str** | The group&#39;s email address. If your account has multiple domains, select the appropriate domain for the email address. The &#x60;email&#x60; must be unique. This property is required when creating a group. Group email addresses are subject to the same character usage rules as usernames, see the [help center](https://support.google.com/a/answer/9193374) for details. | [optional] 
**etag** | **str** | ETag of the resource. | [optional] 
**id** | **str** | Read-only. The unique ID of a group. A group &#x60;id&#x60; can be used as a group request URI&#39;s &#x60;groupKey&#x60;. | [optional] 
**kind** | **str** | The type of the API resource. For Groups resources, the value is &#x60;admin#directory#group&#x60;. | [optional] [default to 'admin#directory#group']
**name** | **str** | The group&#39;s display name. | [optional] 
**non_editable_aliases** | **List[str]** | Read-only. The list of the group&#39;s non-editable alias email addresses that are outside of the account&#39;s primary domain or subdomains. These are functioning email addresses used by the group. This is a read-only property returned in the API&#39;s response for a group. If edited in a group&#39;s POST or PUT request, the edit is ignored. | [optional] 

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


