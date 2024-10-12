# GetNetworkAlertsHistory200ResponseInnerDevice

info related to the device that caused the alert

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**serial** | **str** | device serial | [optional] 

## Example

```python
from openapi_client.models.get_network_alerts_history200_response_inner_device import GetNetworkAlertsHistory200ResponseInnerDevice

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkAlertsHistory200ResponseInnerDevice from a JSON string
get_network_alerts_history200_response_inner_device_instance = GetNetworkAlertsHistory200ResponseInnerDevice.from_json(json)
# print the JSON string representation of the object
print(GetNetworkAlertsHistory200ResponseInnerDevice.to_json())

# convert the object into a dict
get_network_alerts_history200_response_inner_device_dict = get_network_alerts_history200_response_inner_device_instance.to_dict()
# create an instance of GetNetworkAlertsHistory200ResponseInnerDevice from a dict
get_network_alerts_history200_response_inner_device_from_dict = GetNetworkAlertsHistory200ResponseInnerDevice.from_dict(get_network_alerts_history200_response_inner_device_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


