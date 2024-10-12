# CreateNetworkGroupPolicyRequestSchedulingTuesday

The schedule object for Tuesday.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | Whether the schedule is active (true) or inactive (false) during the time specified between &#39;from&#39; and &#39;to&#39;. Defaults to true. | [optional] 
**var_from** | **str** | The time, from &#39;00:00&#39; to &#39;24:00&#39;. Must be less than the time specified in &#39;to&#39;. Defaults to &#39;00:00&#39;. Only 30 minute increments are allowed. | [optional] 
**to** | **str** | The time, from &#39;00:00&#39; to &#39;24:00&#39;. Must be greater than the time specified in &#39;from&#39;. Defaults to &#39;24:00&#39;. Only 30 minute increments are allowed. | [optional] 

## Example

```python
from openapi_client.models.create_network_group_policy_request_scheduling_tuesday import CreateNetworkGroupPolicyRequestSchedulingTuesday

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkGroupPolicyRequestSchedulingTuesday from a JSON string
create_network_group_policy_request_scheduling_tuesday_instance = CreateNetworkGroupPolicyRequestSchedulingTuesday.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkGroupPolicyRequestSchedulingTuesday.to_json())

# convert the object into a dict
create_network_group_policy_request_scheduling_tuesday_dict = create_network_group_policy_request_scheduling_tuesday_instance.to_dict()
# create an instance of CreateNetworkGroupPolicyRequestSchedulingTuesday from a dict
create_network_group_policy_request_scheduling_tuesday_from_dict = CreateNetworkGroupPolicyRequestSchedulingTuesday.from_dict(create_network_group_policy_request_scheduling_tuesday_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


