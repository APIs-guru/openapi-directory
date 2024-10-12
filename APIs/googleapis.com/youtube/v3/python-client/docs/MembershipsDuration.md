# MembershipsDuration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**member_since** | **str** | The date and time when the user became a continuous member across all levels. | [optional] 
**member_total_duration_months** | **int** | The cumulative time the user has been a member across all levels in complete months (the time is rounded down to the nearest integer). | [optional] 

## Example

```python
from openapi_client.models.memberships_duration import MembershipsDuration

# TODO update the JSON string below
json = "{}"
# create an instance of MembershipsDuration from a JSON string
memberships_duration_instance = MembershipsDuration.from_json(json)
# print the JSON string representation of the object
print(MembershipsDuration.to_json())

# convert the object into a dict
memberships_duration_dict = memberships_duration_instance.to_dict()
# create an instance of MembershipsDuration from a dict
memberships_duration_from_dict = MembershipsDuration.from_dict(memberships_duration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


