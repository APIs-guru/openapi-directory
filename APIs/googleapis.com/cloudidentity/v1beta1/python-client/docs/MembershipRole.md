# MembershipRole

A membership role within the Cloud Identity Groups API. A `MembershipRole` defines the privileges granted to a `Membership`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiry_detail** | [**ExpiryDetail**](ExpiryDetail.md) |  | [optional] 
**name** | **str** | The name of the &#x60;MembershipRole&#x60;. Must be one of &#x60;OWNER&#x60;, &#x60;MANAGER&#x60;, &#x60;MEMBER&#x60;. | [optional] 
**restriction_evaluations** | [**RestrictionEvaluations**](RestrictionEvaluations.md) |  | [optional] 

## Example

```python
from openapi_client.models.membership_role import MembershipRole

# TODO update the JSON string below
json = "{}"
# create an instance of MembershipRole from a JSON string
membership_role_instance = MembershipRole.from_json(json)
# print the JSON string representation of the object
print(MembershipRole.to_json())

# convert the object into a dict
membership_role_dict = membership_role_instance.to_dict()
# create an instance of MembershipRole from a dict
membership_role_from_dict = MembershipRole.from_dict(membership_role_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


