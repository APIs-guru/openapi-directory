# CreateNetworkSwitchPortScheduleRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name for your port schedule. Required | 
**port_schedule** | [**CreateNetworkSwitchPortScheduleRequestPortSchedule**](CreateNetworkSwitchPortScheduleRequestPortSchedule.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_network_switch_port_schedule_request import CreateNetworkSwitchPortScheduleRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkSwitchPortScheduleRequest from a JSON string
create_network_switch_port_schedule_request_instance = CreateNetworkSwitchPortScheduleRequest.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkSwitchPortScheduleRequest.to_json())

# convert the object into a dict
create_network_switch_port_schedule_request_dict = create_network_switch_port_schedule_request_instance.to_dict()
# create an instance of CreateNetworkSwitchPortScheduleRequest from a dict
create_network_switch_port_schedule_request_from_dict = CreateNetworkSwitchPortScheduleRequest.from_dict(create_network_switch_port_schedule_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


