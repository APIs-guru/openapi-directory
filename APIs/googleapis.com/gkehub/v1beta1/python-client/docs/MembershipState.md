# MembershipState

State of the Membership resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Output only. The current state of the Membership resource. | [optional] [readonly] 
**description** | **str** | This field is never set by the Hub Service. | [optional] 
**update_time** | **str** | This field is never set by the Hub Service. | [optional] 

## Example

```python
from openapi_client.models.membership_state import MembershipState

# TODO update the JSON string below
json = "{}"
# create an instance of MembershipState from a JSON string
membership_state_instance = MembershipState.from_json(json)
# print the JSON string representation of the object
print(MembershipState.to_json())

# convert the object into a dict
membership_state_dict = membership_state_instance.to_dict()
# create an instance of MembershipState from a dict
membership_state_from_dict = MembershipState.from_dict(membership_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


