# ChromeOsDeviceLastKnownNetworkInner

Information for an ip address.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_address** | **str** | The IP address. | [optional] 
**wan_ip_address** | **str** | The WAN IP address. | [optional] 

## Example

```python
from openapi_client.models.chrome_os_device_last_known_network_inner import ChromeOsDeviceLastKnownNetworkInner

# TODO update the JSON string below
json = "{}"
# create an instance of ChromeOsDeviceLastKnownNetworkInner from a JSON string
chrome_os_device_last_known_network_inner_instance = ChromeOsDeviceLastKnownNetworkInner.from_json(json)
# print the JSON string representation of the object
print(ChromeOsDeviceLastKnownNetworkInner.to_json())

# convert the object into a dict
chrome_os_device_last_known_network_inner_dict = chrome_os_device_last_known_network_inner_instance.to_dict()
# create an instance of ChromeOsDeviceLastKnownNetworkInner from a dict
chrome_os_device_last_known_network_inner_from_dict = ChromeOsDeviceLastKnownNetworkInner.from_dict(chrome_os_device_last_known_network_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


