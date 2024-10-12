# UpdateNetworkFirmwareUpgradesRequestProducts

Contains information about the network to update

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appliance** | [**UpdateNetworkFirmwareUpgradesRequestProductsAppliance**](UpdateNetworkFirmwareUpgradesRequestProductsAppliance.md) |  | [optional] 
**camera** | [**UpdateNetworkFirmwareUpgradesRequestProductsAppliance**](UpdateNetworkFirmwareUpgradesRequestProductsAppliance.md) |  | [optional] 
**cellular_gateway** | [**UpdateNetworkFirmwareUpgradesRequestProductsAppliance**](UpdateNetworkFirmwareUpgradesRequestProductsAppliance.md) |  | [optional] 
**sensor** | [**UpdateNetworkFirmwareUpgradesRequestProductsAppliance**](UpdateNetworkFirmwareUpgradesRequestProductsAppliance.md) |  | [optional] 
**switch** | [**UpdateNetworkFirmwareUpgradesRequestProductsAppliance**](UpdateNetworkFirmwareUpgradesRequestProductsAppliance.md) |  | [optional] 
**wireless** | [**UpdateNetworkFirmwareUpgradesRequestProductsAppliance**](UpdateNetworkFirmwareUpgradesRequestProductsAppliance.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_network_firmware_upgrades_request_products import UpdateNetworkFirmwareUpgradesRequestProducts

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkFirmwareUpgradesRequestProducts from a JSON string
update_network_firmware_upgrades_request_products_instance = UpdateNetworkFirmwareUpgradesRequestProducts.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkFirmwareUpgradesRequestProducts.to_json())

# convert the object into a dict
update_network_firmware_upgrades_request_products_dict = update_network_firmware_upgrades_request_products_instance.to_dict()
# create an instance of UpdateNetworkFirmwareUpgradesRequestProducts from a dict
update_network_firmware_upgrades_request_products_from_dict = UpdateNetworkFirmwareUpgradesRequestProducts.from_dict(update_network_firmware_upgrades_request_products_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


