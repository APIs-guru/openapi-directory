# TransitiveMembershipRole

Message representing the role of a TransitiveMembership.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role** | **str** | TransitiveMembershipRole in string format. Currently supported TransitiveMembershipRoles: &#x60;\&quot;MEMBER\&quot;&#x60;, &#x60;\&quot;OWNER\&quot;&#x60;, and &#x60;\&quot;MANAGER\&quot;&#x60;. | [optional] 

## Example

```python
from openapi_client.models.transitive_membership_role import TransitiveMembershipRole

# TODO update the JSON string below
json = "{}"
# create an instance of TransitiveMembershipRole from a JSON string
transitive_membership_role_instance = TransitiveMembershipRole.from_json(json)
# print the JSON string representation of the object
print(TransitiveMembershipRole.to_json())

# convert the object into a dict
transitive_membership_role_dict = transitive_membership_role_instance.to_dict()
# create an instance of TransitiveMembershipRole from a dict
transitive_membership_role_from_dict = TransitiveMembershipRole.from_dict(transitive_membership_role_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


