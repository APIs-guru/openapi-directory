# PolicySchedule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**overrides** | [**List[OnCallOverride]**](OnCallOverride.md) |  | [optional] 
**policy** | [**EscalationPolicy**](EscalationPolicy.md) |  | [optional] 
**schedule** | [**List[OnCallEntry]**](OnCallEntry.md) |  | [optional] 

## Example

```python
from openapi_client.models.policy_schedule import PolicySchedule

# TODO update the JSON string below
json = "{}"
# create an instance of PolicySchedule from a JSON string
policy_schedule_instance = PolicySchedule.from_json(json)
# print the JSON string representation of the object
print(PolicySchedule.to_json())

# convert the object into a dict
policy_schedule_dict = policy_schedule_instance.to_dict()
# create an instance of PolicySchedule from a dict
policy_schedule_from_dict = PolicySchedule.from_dict(policy_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


