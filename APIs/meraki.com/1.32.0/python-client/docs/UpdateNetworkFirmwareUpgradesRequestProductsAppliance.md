# UpdateNetworkFirmwareUpgradesRequestProductsAppliance

The network device to be updated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_upgrade** | [**UpdateNetworkFirmwareUpgradesRequestProductsApplianceNextUpgrade**](UpdateNetworkFirmwareUpgradesRequestProductsApplianceNextUpgrade.md) |  | [optional] 
**participate_in_next_beta_release** | **bool** | Whether or not the network wants beta firmware | [optional] 

## Example

```python
from openapi_client.models.update_network_firmware_upgrades_request_products_appliance import UpdateNetworkFirmwareUpgradesRequestProductsAppliance

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkFirmwareUpgradesRequestProductsAppliance from a JSON string
update_network_firmware_upgrades_request_products_appliance_instance = UpdateNetworkFirmwareUpgradesRequestProductsAppliance.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkFirmwareUpgradesRequestProductsAppliance.to_json())

# convert the object into a dict
update_network_firmware_upgrades_request_products_appliance_dict = update_network_firmware_upgrades_request_products_appliance_instance.to_dict()
# create an instance of UpdateNetworkFirmwareUpgradesRequestProductsAppliance from a dict
update_network_firmware_upgrades_request_products_appliance_from_dict = UpdateNetworkFirmwareUpgradesRequestProductsAppliance.from_dict(update_network_firmware_upgrades_request_products_appliance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


