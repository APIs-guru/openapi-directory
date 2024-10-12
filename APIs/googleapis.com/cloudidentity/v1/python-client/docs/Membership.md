# Membership

A membership within the Cloud Identity Groups API. A `Membership` defines a relationship between a `Group` and an entity belonging to that `Group`, referred to as a \"member\".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time when the &#x60;Membership&#x60; was created. | [optional] [readonly] 
**delivery_setting** | **str** | Output only. Delivery setting associated with the membership. | [optional] [readonly] 
**name** | **str** | Output only. The [resource name](https://cloud.google.com/apis/design/resource_names) of the &#x60;Membership&#x60;. Shall be of the form &#x60;groups/{group}/memberships/{membership}&#x60;. | [optional] [readonly] 
**preferred_member_key** | [**EntityKey**](EntityKey.md) |  | [optional] 
**roles** | [**List[MembershipRole]**](MembershipRole.md) | The &#x60;MembershipRole&#x60;s that apply to the &#x60;Membership&#x60;. If unspecified, defaults to a single &#x60;MembershipRole&#x60; with &#x60;name&#x60; &#x60;MEMBER&#x60;. Must not contain duplicate &#x60;MembershipRole&#x60;s with the same &#x60;name&#x60;. | [optional] 
**type** | **str** | Output only. The type of the membership. | [optional] [readonly] 
**update_time** | **str** | Output only. The time when the &#x60;Membership&#x60; was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.membership import Membership

# TODO update the JSON string below
json = "{}"
# create an instance of Membership from a JSON string
membership_instance = Membership.from_json(json)
# print the JSON string representation of the object
print(Membership.to_json())

# convert the object into a dict
membership_dict = membership_instance.to_dict()
# create an instance of Membership from a dict
membership_from_dict = Membership.from_dict(membership_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


