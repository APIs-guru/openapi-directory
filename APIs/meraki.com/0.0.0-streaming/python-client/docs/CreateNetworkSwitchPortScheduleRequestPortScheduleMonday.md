# CreateNetworkSwitchPortScheduleRequestPortScheduleMonday

The schedule object for Monday.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | Whether the schedule is active (true) or inactive (false) during the time specified between &#39;from&#39; and &#39;to&#39;. Defaults to true. | [optional] 
**var_from** | **str** | The time, from &#39;00:00&#39; to &#39;24:00&#39;. Must be less than the time specified in &#39;to&#39;. Defaults to &#39;00:00&#39;. Only 30 minute increments are allowed. | [optional] 
**to** | **str** | The time, from &#39;00:00&#39; to &#39;24:00&#39;. Must be greater than the time specified in &#39;from&#39;. Defaults to &#39;24:00&#39;. Only 30 minute increments are allowed. | [optional] 

## Example

```python
from openapi_client.models.create_network_switch_port_schedule_request_port_schedule_monday import CreateNetworkSwitchPortScheduleRequestPortScheduleMonday

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkSwitchPortScheduleRequestPortScheduleMonday from a JSON string
create_network_switch_port_schedule_request_port_schedule_monday_instance = CreateNetworkSwitchPortScheduleRequestPortScheduleMonday.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkSwitchPortScheduleRequestPortScheduleMonday.to_json())

# convert the object into a dict
create_network_switch_port_schedule_request_port_schedule_monday_dict = create_network_switch_port_schedule_request_port_schedule_monday_instance.to_dict()
# create an instance of CreateNetworkSwitchPortScheduleRequestPortScheduleMonday from a dict
create_network_switch_port_schedule_request_port_schedule_monday_from_dict = CreateNetworkSwitchPortScheduleRequestPortScheduleMonday.from_dict(create_network_switch_port_schedule_request_port_schedule_monday_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


