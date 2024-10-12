# UpdateNetworkFirmwareUpgradesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**products** | [**UpdateNetworkFirmwareUpgradesRequestProducts**](UpdateNetworkFirmwareUpgradesRequestProducts.md) |  | [optional] 
**timezone** | **str** | The timezone for the network | [optional] 
**upgrade_window** | [**GetNetworkFirmwareUpgrades200ResponseUpgradeWindow**](GetNetworkFirmwareUpgrades200ResponseUpgradeWindow.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_network_firmware_upgrades_request import UpdateNetworkFirmwareUpgradesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkFirmwareUpgradesRequest from a JSON string
update_network_firmware_upgrades_request_instance = UpdateNetworkFirmwareUpgradesRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkFirmwareUpgradesRequest.to_json())

# convert the object into a dict
update_network_firmware_upgrades_request_dict = update_network_firmware_upgrades_request_instance.to_dict()
# create an instance of UpdateNetworkFirmwareUpgradesRequest from a dict
update_network_firmware_upgrades_request_from_dict = UpdateNetworkFirmwareUpgradesRequest.from_dict(update_network_firmware_upgrades_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


