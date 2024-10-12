# GetDeviceSwitchPortsStatuses200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cdp** | [**GetDeviceSwitchPortsStatuses200ResponseInnerCdp**](GetDeviceSwitchPortsStatuses200ResponseInnerCdp.md) |  | [optional] 
**client_count** | **int** | The number of clients connected through this port. | [optional] 
**duplex** | **str** | The current duplex of a connected port. | [optional] 
**enabled** | **bool** | Whether the port is configured to be enabled. | [optional] 
**errors** | **List[str]** | All errors present on the port. | [optional] 
**is_uplink** | **bool** | Whether the port is the switch&#39;s uplink. | [optional] 
**lldp** | [**GetDeviceSwitchPortsStatuses200ResponseInnerLldp**](GetDeviceSwitchPortsStatuses200ResponseInnerLldp.md) |  | [optional] 
**port_id** | **str** | The string identifier of this port on the switch. This is commonly just the port number but may contain additional identifying information such as the slot and module-type if the port is located on a port module. | [optional] 
**power_usage_in_wh** | **float** | How much power (in watt-hours) has been delivered by this port during the timespan. | [optional] 
**secure_port** | [**GetDeviceSwitchPortsStatuses200ResponseInnerSecurePort**](GetDeviceSwitchPortsStatuses200ResponseInnerSecurePort.md) |  | [optional] 
**speed** | **str** | The current data transfer rate which the port is operating at. | [optional] 
**status** | **str** | The current connection status of the port. | [optional] 
**traffic_in_kbps** | [**GetDeviceSwitchPortsStatuses200ResponseInnerTrafficInKbps**](GetDeviceSwitchPortsStatuses200ResponseInnerTrafficInKbps.md) |  | [optional] 
**usage_in_kb** | [**GetDeviceSwitchPortsStatuses200ResponseInnerUsageInKb**](GetDeviceSwitchPortsStatuses200ResponseInnerUsageInKb.md) |  | [optional] 
**warnings** | **List[str]** | All warnings present on the port. | [optional] 

## Example

```python
from openapi_client.models.get_device_switch_ports_statuses200_response_inner import GetDeviceSwitchPortsStatuses200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetDeviceSwitchPortsStatuses200ResponseInner from a JSON string
get_device_switch_ports_statuses200_response_inner_instance = GetDeviceSwitchPortsStatuses200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetDeviceSwitchPortsStatuses200ResponseInner.to_json())

# convert the object into a dict
get_device_switch_ports_statuses200_response_inner_dict = get_device_switch_ports_statuses200_response_inner_instance.to_dict()
# create an instance of GetDeviceSwitchPortsStatuses200ResponseInner from a dict
get_device_switch_ports_statuses200_response_inner_from_dict = GetDeviceSwitchPortsStatuses200ResponseInner.from_dict(get_device_switch_ports_statuses200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


