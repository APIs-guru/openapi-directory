# Member

A Google Groups member can be a user or another group. This member can be inside or outside of your account's domains. For more information about common group member tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-group-members).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delivery_settings** | **str** | Defines mail delivery preferences of member. This field is only supported by &#x60;insert&#x60;, &#x60;update&#x60;, and &#x60;get&#x60; methods. | [optional] 
**email** | **str** | The member&#39;s email address. A member can be a user or another group. This property is required when adding a member to a group. The &#x60;email&#x60; must be unique and cannot be an alias of another group. If the email address is changed, the API automatically reflects the email address changes. | [optional] 
**etag** | **str** | ETag of the resource. | [optional] 
**id** | **str** | The unique ID of the group member. A member &#x60;id&#x60; can be used as a member request URI&#39;s &#x60;memberKey&#x60;. | [optional] 
**kind** | **str** | The type of the API resource. For Members resources, the value is &#x60;admin#directory#member&#x60;. | [optional] [default to 'admin#directory#member']
**role** | **str** | The member&#39;s role in a group. The API returns an error for cycles in group memberships. For example, if &#x60;group1&#x60; is a member of &#x60;group2&#x60;, &#x60;group2&#x60; cannot be a member of &#x60;group1&#x60;. For more information about a member&#39;s role, see the [administration help center](https://support.google.com/a/answer/167094). | [optional] 
**status** | **str** | Status of member (Immutable) | [optional] 
**type** | **str** | The type of group member. | [optional] 

## Example

```python
from openapi_client.models.member import Member

# TODO update the JSON string below
json = "{}"
# create an instance of Member from a JSON string
member_instance = Member.from_json(json)
# print the JSON string representation of the object
print(Member.to_json())

# convert the object into a dict
member_dict = member_instance.to_dict()
# create an instance of Member from a dict
member_from_dict = Member.from_dict(member_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


