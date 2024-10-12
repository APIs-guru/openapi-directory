# MembershipsDurationAtLevel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**level** | **str** | Pricing level ID. | [optional] 
**member_since** | **str** | The date and time when the user became a continuous member for the given level. | [optional] 
**member_total_duration_months** | **int** | The cumulative time the user has been a member for the given level in complete months (the time is rounded down to the nearest integer). | [optional] 

## Example

```python
from openapi_client.models.memberships_duration_at_level import MembershipsDurationAtLevel

# TODO update the JSON string below
json = "{}"
# create an instance of MembershipsDurationAtLevel from a JSON string
memberships_duration_at_level_instance = MembershipsDurationAtLevel.from_json(json)
# print the JSON string representation of the object
print(MembershipsDurationAtLevel.to_json())

# convert the object into a dict
memberships_duration_at_level_dict = memberships_duration_at_level_instance.to_dict()
# create an instance of MembershipsDurationAtLevel from a dict
memberships_duration_at_level_from_dict = MembershipsDurationAtLevel.from_dict(memberships_duration_at_level_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


