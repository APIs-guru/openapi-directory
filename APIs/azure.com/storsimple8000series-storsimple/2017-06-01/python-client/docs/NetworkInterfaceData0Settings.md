# NetworkInterfaceData0Settings

The 'Data 0' network interface card settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**controller_one_ip** | **str** | The controller 1&#39;s IPv4 address. | [optional] 
**controller_zero_ip** | **str** | The controller 0&#39;s IPv4 address. | [optional] 

## Example

```python
from openapi_client.models.network_interface_data0_settings import NetworkInterfaceData0Settings

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkInterfaceData0Settings from a JSON string
network_interface_data0_settings_instance = NetworkInterfaceData0Settings.from_json(json)
# print the JSON string representation of the object
print(NetworkInterfaceData0Settings.to_json())

# convert the object into a dict
network_interface_data0_settings_dict = network_interface_data0_settings_instance.to_dict()
# create an instance of NetworkInterfaceData0Settings from a dict
network_interface_data0_settings_from_dict = NetworkInterfaceData0Settings.from_dict(network_interface_data0_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


