# GetNetworkFirmwareUpgradesStagedEvents200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**products** | [**GetNetworkFirmwareUpgradesStagedEvents200ResponseProducts**](GetNetworkFirmwareUpgradesStagedEvents200ResponseProducts.md) |  | [optional] 
**reasons** | [**List[CreateNetworkFirmwareUpgradesRollback200ResponseReasonsInner]**](CreateNetworkFirmwareUpgradesRollback200ResponseReasonsInner.md) | Reasons for the rollback | [optional] 
**stages** | [**List[GetNetworkFirmwareUpgradesStagedEvents200ResponseStagesInner]**](GetNetworkFirmwareUpgradesStagedEvents200ResponseStagesInner.md) | The ordered stages in the network | [optional] 

## Example

```python
from openapi_client.models.get_network_firmware_upgrades_staged_events200_response import GetNetworkFirmwareUpgradesStagedEvents200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkFirmwareUpgradesStagedEvents200Response from a JSON string
get_network_firmware_upgrades_staged_events200_response_instance = GetNetworkFirmwareUpgradesStagedEvents200Response.from_json(json)
# print the JSON string representation of the object
print(GetNetworkFirmwareUpgradesStagedEvents200Response.to_json())

# convert the object into a dict
get_network_firmware_upgrades_staged_events200_response_dict = get_network_firmware_upgrades_staged_events200_response_instance.to_dict()
# create an instance of GetNetworkFirmwareUpgradesStagedEvents200Response from a dict
get_network_firmware_upgrades_staged_events200_response_from_dict = GetNetworkFirmwareUpgradesStagedEvents200Response.from_dict(get_network_firmware_upgrades_staged_events200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


