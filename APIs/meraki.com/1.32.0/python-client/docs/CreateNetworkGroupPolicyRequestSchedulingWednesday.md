# CreateNetworkGroupPolicyRequestSchedulingWednesday

The schedule object for Wednesday.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | Whether the schedule is active (true) or inactive (false) during the time specified between &#39;from&#39; and &#39;to&#39;. Defaults to true. | [optional] 
**var_from** | **str** | The time, from &#39;00:00&#39; to &#39;24:00&#39;. Must be less than the time specified in &#39;to&#39;. Defaults to &#39;00:00&#39;. Only 30 minute increments are allowed. | [optional] 
**to** | **str** | The time, from &#39;00:00&#39; to &#39;24:00&#39;. Must be greater than the time specified in &#39;from&#39;. Defaults to &#39;24:00&#39;. Only 30 minute increments are allowed. | [optional] 

## Example

```python
from openapi_client.models.create_network_group_policy_request_scheduling_wednesday import CreateNetworkGroupPolicyRequestSchedulingWednesday

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkGroupPolicyRequestSchedulingWednesday from a JSON string
create_network_group_policy_request_scheduling_wednesday_instance = CreateNetworkGroupPolicyRequestSchedulingWednesday.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkGroupPolicyRequestSchedulingWednesday.to_json())

# convert the object into a dict
create_network_group_policy_request_scheduling_wednesday_dict = create_network_group_policy_request_scheduling_wednesday_instance.to_dict()
# create an instance of CreateNetworkGroupPolicyRequestSchedulingWednesday from a dict
create_network_group_policy_request_scheduling_wednesday_from_dict = CreateNetworkGroupPolicyRequestSchedulingWednesday.from_dict(create_network_group_policy_request_scheduling_wednesday_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


