# CreateNetworkSwitchPortScheduleRequestPortSchedule

    The schedule for switch port scheduling. Schedules are applied to days of the week.     When it's empty, default schedule with all days of a week are configured.     Any unspecified day in the schedule is added as a default schedule configuration of the day. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**friday** | [**CreateNetworkGroupPolicyRequestSchedulingFriday**](CreateNetworkGroupPolicyRequestSchedulingFriday.md) |  | [optional] 
**monday** | [**CreateNetworkGroupPolicyRequestSchedulingMonday**](CreateNetworkGroupPolicyRequestSchedulingMonday.md) |  | [optional] 
**saturday** | [**CreateNetworkGroupPolicyRequestSchedulingSaturday**](CreateNetworkGroupPolicyRequestSchedulingSaturday.md) |  | [optional] 
**sunday** | [**CreateNetworkGroupPolicyRequestSchedulingSunday**](CreateNetworkGroupPolicyRequestSchedulingSunday.md) |  | [optional] 
**thursday** | [**CreateNetworkGroupPolicyRequestSchedulingThursday**](CreateNetworkGroupPolicyRequestSchedulingThursday.md) |  | [optional] 
**tuesday** | [**CreateNetworkGroupPolicyRequestSchedulingTuesday**](CreateNetworkGroupPolicyRequestSchedulingTuesday.md) |  | [optional] 
**wednesday** | [**CreateNetworkGroupPolicyRequestSchedulingWednesday**](CreateNetworkGroupPolicyRequestSchedulingWednesday.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_network_switch_port_schedule_request_port_schedule import CreateNetworkSwitchPortScheduleRequestPortSchedule

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkSwitchPortScheduleRequestPortSchedule from a JSON string
create_network_switch_port_schedule_request_port_schedule_instance = CreateNetworkSwitchPortScheduleRequestPortSchedule.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkSwitchPortScheduleRequestPortSchedule.to_json())

# convert the object into a dict
create_network_switch_port_schedule_request_port_schedule_dict = create_network_switch_port_schedule_request_port_schedule_instance.to_dict()
# create an instance of CreateNetworkSwitchPortScheduleRequestPortSchedule from a dict
create_network_switch_port_schedule_request_port_schedule_from_dict = CreateNetworkSwitchPortScheduleRequestPortSchedule.from_dict(create_network_switch_port_schedule_request_port_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


