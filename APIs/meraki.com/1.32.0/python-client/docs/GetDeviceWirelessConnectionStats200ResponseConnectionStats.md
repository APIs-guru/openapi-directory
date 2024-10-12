# GetDeviceWirelessConnectionStats200ResponseConnectionStats

The connection stats of the device

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assoc** | **int** | The number of failed association attempts | [optional] 
**auth** | **int** | The number of failed authentication attempts | [optional] 
**dhcp** | **int** | The number of failed DHCP attempts | [optional] 
**dns** | **int** | The number of failed DNS attempts | [optional] 
**success** | **int** | The number of successful connection attempts | [optional] 

## Example

```python
from openapi_client.models.get_device_wireless_connection_stats200_response_connection_stats import GetDeviceWirelessConnectionStats200ResponseConnectionStats

# TODO update the JSON string below
json = "{}"
# create an instance of GetDeviceWirelessConnectionStats200ResponseConnectionStats from a JSON string
get_device_wireless_connection_stats200_response_connection_stats_instance = GetDeviceWirelessConnectionStats200ResponseConnectionStats.from_json(json)
# print the JSON string representation of the object
print(GetDeviceWirelessConnectionStats200ResponseConnectionStats.to_json())

# convert the object into a dict
get_device_wireless_connection_stats200_response_connection_stats_dict = get_device_wireless_connection_stats200_response_connection_stats_instance.to_dict()
# create an instance of GetDeviceWirelessConnectionStats200ResponseConnectionStats from a dict
get_device_wireless_connection_stats200_response_connection_stats_from_dict = GetDeviceWirelessConnectionStats200ResponseConnectionStats.from_dict(get_device_wireless_connection_stats200_response_connection_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


