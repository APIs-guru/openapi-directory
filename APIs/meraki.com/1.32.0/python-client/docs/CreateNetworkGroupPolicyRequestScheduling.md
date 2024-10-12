# CreateNetworkGroupPolicyRequestScheduling

    The schedule for the group policy. Schedules are applied to days of the week. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether scheduling is enabled (true) or disabled (false). Defaults to false. If true, the schedule objects for each day of the week (monday - sunday) are parsed. | [optional] 
**friday** | [**CreateNetworkGroupPolicyRequestSchedulingFriday**](CreateNetworkGroupPolicyRequestSchedulingFriday.md) |  | [optional] 
**monday** | [**CreateNetworkGroupPolicyRequestSchedulingMonday**](CreateNetworkGroupPolicyRequestSchedulingMonday.md) |  | [optional] 
**saturday** | [**CreateNetworkGroupPolicyRequestSchedulingSaturday**](CreateNetworkGroupPolicyRequestSchedulingSaturday.md) |  | [optional] 
**sunday** | [**CreateNetworkGroupPolicyRequestSchedulingSunday**](CreateNetworkGroupPolicyRequestSchedulingSunday.md) |  | [optional] 
**thursday** | [**CreateNetworkGroupPolicyRequestSchedulingThursday**](CreateNetworkGroupPolicyRequestSchedulingThursday.md) |  | [optional] 
**tuesday** | [**CreateNetworkGroupPolicyRequestSchedulingTuesday**](CreateNetworkGroupPolicyRequestSchedulingTuesday.md) |  | [optional] 
**wednesday** | [**CreateNetworkGroupPolicyRequestSchedulingWednesday**](CreateNetworkGroupPolicyRequestSchedulingWednesday.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_network_group_policy_request_scheduling import CreateNetworkGroupPolicyRequestScheduling

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkGroupPolicyRequestScheduling from a JSON string
create_network_group_policy_request_scheduling_instance = CreateNetworkGroupPolicyRequestScheduling.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkGroupPolicyRequestScheduling.to_json())

# convert the object into a dict
create_network_group_policy_request_scheduling_dict = create_network_group_policy_request_scheduling_instance.to_dict()
# create an instance of CreateNetworkGroupPolicyRequestScheduling from a dict
create_network_group_policy_request_scheduling_from_dict = CreateNetworkGroupPolicyRequestScheduling.from_dict(create_network_group_policy_request_scheduling_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


