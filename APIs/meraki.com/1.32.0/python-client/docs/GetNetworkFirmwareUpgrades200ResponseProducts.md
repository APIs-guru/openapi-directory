# GetNetworkFirmwareUpgrades200ResponseProducts

The network devices to be updated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appliance** | [**GetNetworkFirmwareUpgrades200ResponseProductsAppliance**](GetNetworkFirmwareUpgrades200ResponseProductsAppliance.md) |  | [optional] 
**camera** | [**GetNetworkFirmwareUpgrades200ResponseProductsAppliance**](GetNetworkFirmwareUpgrades200ResponseProductsAppliance.md) |  | [optional] 
**cellular_gateway** | [**GetNetworkFirmwareUpgrades200ResponseProductsAppliance**](GetNetworkFirmwareUpgrades200ResponseProductsAppliance.md) |  | [optional] 
**sensor** | [**GetNetworkFirmwareUpgrades200ResponseProductsAppliance**](GetNetworkFirmwareUpgrades200ResponseProductsAppliance.md) |  | [optional] 
**switch** | [**GetNetworkFirmwareUpgrades200ResponseProductsAppliance**](GetNetworkFirmwareUpgrades200ResponseProductsAppliance.md) |  | [optional] 
**wireless** | [**GetNetworkFirmwareUpgrades200ResponseProductsAppliance**](GetNetworkFirmwareUpgrades200ResponseProductsAppliance.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_network_firmware_upgrades200_response_products import GetNetworkFirmwareUpgrades200ResponseProducts

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkFirmwareUpgrades200ResponseProducts from a JSON string
get_network_firmware_upgrades200_response_products_instance = GetNetworkFirmwareUpgrades200ResponseProducts.from_json(json)
# print the JSON string representation of the object
print(GetNetworkFirmwareUpgrades200ResponseProducts.to_json())

# convert the object into a dict
get_network_firmware_upgrades200_response_products_dict = get_network_firmware_upgrades200_response_products_instance.to_dict()
# create an instance of GetNetworkFirmwareUpgrades200ResponseProducts from a dict
get_network_firmware_upgrades200_response_products_from_dict = GetNetworkFirmwareUpgrades200ResponseProducts.from_dict(get_network_firmware_upgrades200_response_products_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


