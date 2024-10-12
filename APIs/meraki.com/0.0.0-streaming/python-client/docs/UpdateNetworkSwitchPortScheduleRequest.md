# UpdateNetworkSwitchPortScheduleRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name for your port schedule. | [optional] 
**port_schedule** | [**CreateNetworkSwitchPortScheduleRequestPortSchedule**](CreateNetworkSwitchPortScheduleRequestPortSchedule.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_network_switch_port_schedule_request import UpdateNetworkSwitchPortScheduleRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSwitchPortScheduleRequest from a JSON string
update_network_switch_port_schedule_request_instance = UpdateNetworkSwitchPortScheduleRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSwitchPortScheduleRequest.to_json())

# convert the object into a dict
update_network_switch_port_schedule_request_dict = update_network_switch_port_schedule_request_instance.to_dict()
# create an instance of UpdateNetworkSwitchPortScheduleRequest from a dict
update_network_switch_port_schedule_request_from_dict = UpdateNetworkSwitchPortScheduleRequest.from_dict(update_network_switch_port_schedule_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


