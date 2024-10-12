# GetDeviceSwitchPortsStatuses200ResponseInnerTrafficInKbps

A breakdown of the average speed of data that has passed through this port during the timespan.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recv** | **float** | The average speed of the data received (in kilobits-per-second). | [optional] 
**sent** | **float** | The average speed of the data sent (in kilobits-per-second). | [optional] 
**total** | **float** | The average speed of the data sent and received (in kilobits-per-second). | [optional] 

## Example

```python
from openapi_client.models.get_device_switch_ports_statuses200_response_inner_traffic_in_kbps import GetDeviceSwitchPortsStatuses200ResponseInnerTrafficInKbps

# TODO update the JSON string below
json = "{}"
# create an instance of GetDeviceSwitchPortsStatuses200ResponseInnerTrafficInKbps from a JSON string
get_device_switch_ports_statuses200_response_inner_traffic_in_kbps_instance = GetDeviceSwitchPortsStatuses200ResponseInnerTrafficInKbps.from_json(json)
# print the JSON string representation of the object
print(GetDeviceSwitchPortsStatuses200ResponseInnerTrafficInKbps.to_json())

# convert the object into a dict
get_device_switch_ports_statuses200_response_inner_traffic_in_kbps_dict = get_device_switch_ports_statuses200_response_inner_traffic_in_kbps_instance.to_dict()
# create an instance of GetDeviceSwitchPortsStatuses200ResponseInnerTrafficInKbps from a dict
get_device_switch_ports_statuses200_response_inner_traffic_in_kbps_from_dict = GetDeviceSwitchPortsStatuses200ResponseInnerTrafficInKbps.from_dict(get_device_switch_ports_statuses200_response_inner_traffic_in_kbps_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


