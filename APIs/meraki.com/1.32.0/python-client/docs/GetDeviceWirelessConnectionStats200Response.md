# GetDeviceWirelessConnectionStats200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_stats** | [**GetDeviceWirelessConnectionStats200ResponseConnectionStats**](GetDeviceWirelessConnectionStats200ResponseConnectionStats.md) |  | [optional] 
**serial** | **str** | The serial number for the device | [optional] 

## Example

```python
from openapi_client.models.get_device_wireless_connection_stats200_response import GetDeviceWirelessConnectionStats200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetDeviceWirelessConnectionStats200Response from a JSON string
get_device_wireless_connection_stats200_response_instance = GetDeviceWirelessConnectionStats200Response.from_json(json)
# print the JSON string representation of the object
print(GetDeviceWirelessConnectionStats200Response.to_json())

# convert the object into a dict
get_device_wireless_connection_stats200_response_dict = get_device_wireless_connection_stats200_response_instance.to_dict()
# create an instance of GetDeviceWirelessConnectionStats200Response from a dict
get_device_wireless_connection_stats200_response_from_dict = GetDeviceWirelessConnectionStats200Response.from_dict(get_device_wireless_connection_stats200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


