# CreateNetworkSwitchPortScheduleRequestPortScheduleSaturday

The schedule object for Saturday.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | Whether the schedule is active (true) or inactive (false) during the time specified between &#39;from&#39; and &#39;to&#39;. Defaults to true. | [optional] 
**var_from** | **str** | The time, from &#39;00:00&#39; to &#39;24:00&#39;. Must be less than the time specified in &#39;to&#39;. Defaults to &#39;00:00&#39;. Only 30 minute increments are allowed. | [optional] 
**to** | **str** | The time, from &#39;00:00&#39; to &#39;24:00&#39;. Must be greater than the time specified in &#39;from&#39;. Defaults to &#39;24:00&#39;. Only 30 minute increments are allowed. | [optional] 

## Example

```python
from openapi_client.models.create_network_switch_port_schedule_request_port_schedule_saturday import CreateNetworkSwitchPortScheduleRequestPortScheduleSaturday

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkSwitchPortScheduleRequestPortScheduleSaturday from a JSON string
create_network_switch_port_schedule_request_port_schedule_saturday_instance = CreateNetworkSwitchPortScheduleRequestPortScheduleSaturday.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkSwitchPortScheduleRequestPortScheduleSaturday.to_json())

# convert the object into a dict
create_network_switch_port_schedule_request_port_schedule_saturday_dict = create_network_switch_port_schedule_request_port_schedule_saturday_instance.to_dict()
# create an instance of CreateNetworkSwitchPortScheduleRequestPortScheduleSaturday from a dict
create_network_switch_port_schedule_request_port_schedule_saturday_from_dict = CreateNetworkSwitchPortScheduleRequestPortScheduleSaturday.from_dict(create_network_switch_port_schedule_request_port_schedule_saturday_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


