# GetNetworkFirmwareUpgrades200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**products** | [**GetNetworkFirmwareUpgrades200ResponseProducts**](GetNetworkFirmwareUpgrades200ResponseProducts.md) |  | [optional] 
**timezone** | **str** | The timezone for the network | [optional] 
**upgrade_window** | [**GetNetworkFirmwareUpgrades200ResponseUpgradeWindow**](GetNetworkFirmwareUpgrades200ResponseUpgradeWindow.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_network_firmware_upgrades200_response import GetNetworkFirmwareUpgrades200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkFirmwareUpgrades200Response from a JSON string
get_network_firmware_upgrades200_response_instance = GetNetworkFirmwareUpgrades200Response.from_json(json)
# print the JSON string representation of the object
print(GetNetworkFirmwareUpgrades200Response.to_json())

# convert the object into a dict
get_network_firmware_upgrades200_response_dict = get_network_firmware_upgrades200_response_instance.to_dict()
# create an instance of GetNetworkFirmwareUpgrades200Response from a dict
get_network_firmware_upgrades200_response_from_dict = GetNetworkFirmwareUpgrades200Response.from_dict(get_network_firmware_upgrades200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


