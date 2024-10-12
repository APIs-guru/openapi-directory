# GetDeviceSwitchPortsStatuses200ResponseInnerUsageInKb

A breakdown of how many kilobytes have passed through this port during the timespan.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recv** | **int** | The amount of data received (in kilobytes). | [optional] 
**sent** | **int** | The amount of data sent (in kilobytes). | [optional] 
**total** | **int** | The total amount of data sent and received (in kilobytes). | [optional] 

## Example

```python
from openapi_client.models.get_device_switch_ports_statuses200_response_inner_usage_in_kb import GetDeviceSwitchPortsStatuses200ResponseInnerUsageInKb

# TODO update the JSON string below
json = "{}"
# create an instance of GetDeviceSwitchPortsStatuses200ResponseInnerUsageInKb from a JSON string
get_device_switch_ports_statuses200_response_inner_usage_in_kb_instance = GetDeviceSwitchPortsStatuses200ResponseInnerUsageInKb.from_json(json)
# print the JSON string representation of the object
print(GetDeviceSwitchPortsStatuses200ResponseInnerUsageInKb.to_json())

# convert the object into a dict
get_device_switch_ports_statuses200_response_inner_usage_in_kb_dict = get_device_switch_ports_statuses200_response_inner_usage_in_kb_instance.to_dict()
# create an instance of GetDeviceSwitchPortsStatuses200ResponseInnerUsageInKb from a dict
get_device_switch_ports_statuses200_response_inner_usage_in_kb_from_dict = GetDeviceSwitchPortsStatuses200ResponseInnerUsageInKb.from_dict(get_device_switch_ports_statuses200_response_inner_usage_in_kb_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


