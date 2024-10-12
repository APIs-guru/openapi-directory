# Membership

Represents a membership relation in Google Chat, such as whether a user or Chat app is invited to, part of, or absent from a space.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Optional. Immutable. The creation time of the membership, such as when a member joined or was invited to join a space. This field is output only, except when used to import historical memberships in import mode spaces. | [optional] 
**delete_time** | **str** | Optional. Immutable. The deletion time of the membership, such as when a member left or was removed from a space. This field is output only, except when used to import historical memberships in import mode spaces. | [optional] 
**group_member** | [**Group**](Group.md) |  | [optional] 
**member** | [**User**](User.md) |  | [optional] 
**name** | **str** | Resource name of the membership, assigned by the server. Format: &#x60;spaces/{space}/members/{member}&#x60; | [optional] 
**role** | **str** | Optional. User&#39;s role within a Chat space, which determines their permitted actions in the space. [Developer Preview](https://developers.google.com/workspace/preview): This field can only be used as input in &#x60;UpdateMembership&#x60;. | [optional] 
**state** | **str** | Output only. State of the membership. | [optional] [readonly] 

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


