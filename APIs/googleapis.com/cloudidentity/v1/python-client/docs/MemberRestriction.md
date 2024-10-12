# MemberRestriction

The definition of MemberRestriction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**evaluation** | [**RestrictionEvaluation**](RestrictionEvaluation.md) |  | [optional] 
**query** | **str** | Member Restriction as defined by CEL expression. Supported restrictions are: &#x60;member.customer_id&#x60; and &#x60;member.type&#x60;. Valid values for &#x60;member.type&#x60; are &#x60;1&#x60;, &#x60;2&#x60; and &#x60;3&#x60;. They correspond to USER, SERVICE_ACCOUNT, and GROUP respectively. The value for &#x60;member.customer_id&#x60; only supports &#x60;groupCustomerId()&#x60; currently which means the customer id of the group will be used for restriction. Supported operators are &#x60;&amp;&amp;&#x60;, &#x60;||&#x60; and &#x60;&#x3D;&#x3D;&#x60;, corresponding to AND, OR, and EQUAL. Examples: Allow only service accounts of given customer to be members. &#x60;member.type &#x3D;&#x3D; 2 &amp;&amp; member.customer_id &#x3D;&#x3D; groupCustomerId()&#x60; Allow only users or groups to be members. &#x60;member.type &#x3D;&#x3D; 1 || member.type &#x3D;&#x3D; 3&#x60; | [optional] 

## Example

```python
from openapi_client.models.member_restriction import MemberRestriction

# TODO update the JSON string below
json = "{}"
# create an instance of MemberRestriction from a JSON string
member_restriction_instance = MemberRestriction.from_json(json)
# print the JSON string representation of the object
print(MemberRestriction.to_json())

# convert the object into a dict
member_restriction_dict = member_restriction_instance.to_dict()
# create an instance of MemberRestriction from a dict
member_restriction_from_dict = MemberRestriction.from_dict(member_restriction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


