# CreateNetworkFirmwareUpgradesStagedEventRequestProductsSwitch

Version information for the switch network being upgraded

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_upgrade** | [**CreateNetworkFirmwareUpgradesStagedEventRequestProductsSwitchNextUpgrade**](CreateNetworkFirmwareUpgradesStagedEventRequestProductsSwitchNextUpgrade.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_network_firmware_upgrades_staged_event_request_products_switch import CreateNetworkFirmwareUpgradesStagedEventRequestProductsSwitch

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkFirmwareUpgradesStagedEventRequestProductsSwitch from a JSON string
create_network_firmware_upgrades_staged_event_request_products_switch_instance = CreateNetworkFirmwareUpgradesStagedEventRequestProductsSwitch.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkFirmwareUpgradesStagedEventRequestProductsSwitch.to_json())

# convert the object into a dict
create_network_firmware_upgrades_staged_event_request_products_switch_dict = create_network_firmware_upgrades_staged_event_request_products_switch_instance.to_dict()
# create an instance of CreateNetworkFirmwareUpgradesStagedEventRequestProductsSwitch from a dict
create_network_firmware_upgrades_staged_event_request_products_switch_from_dict = CreateNetworkFirmwareUpgradesStagedEventRequestProductsSwitch.from_dict(create_network_firmware_upgrades_staged_event_request_products_switch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


