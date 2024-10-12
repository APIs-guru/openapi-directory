# CreateNetworkFirmwareUpgradesStagedEventRequestProducts

Contains firmware upgrade version information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**switch** | [**CreateNetworkFirmwareUpgradesStagedEventRequestProductsSwitch**](CreateNetworkFirmwareUpgradesStagedEventRequestProductsSwitch.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_network_firmware_upgrades_staged_event_request_products import CreateNetworkFirmwareUpgradesStagedEventRequestProducts

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkFirmwareUpgradesStagedEventRequestProducts from a JSON string
create_network_firmware_upgrades_staged_event_request_products_instance = CreateNetworkFirmwareUpgradesStagedEventRequestProducts.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkFirmwareUpgradesStagedEventRequestProducts.to_json())

# convert the object into a dict
create_network_firmware_upgrades_staged_event_request_products_dict = create_network_firmware_upgrades_staged_event_request_products_instance.to_dict()
# create an instance of CreateNetworkFirmwareUpgradesStagedEventRequestProducts from a dict
create_network_firmware_upgrades_staged_event_request_products_from_dict = CreateNetworkFirmwareUpgradesStagedEventRequestProducts.from_dict(create_network_firmware_upgrades_staged_event_request_products_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


