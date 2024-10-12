# GetNetworkFirmwareUpgradesStagedEvents200ResponseStagesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group** | [**GetNetworkFirmwareUpgradesStagedEvents200ResponseStagesInnerGroup**](GetNetworkFirmwareUpgradesStagedEvents200ResponseStagesInnerGroup.md) |  | [optional] 
**milestones** | [**GetNetworkFirmwareUpgradesStagedEvents200ResponseStagesInnerMilestones**](GetNetworkFirmwareUpgradesStagedEvents200ResponseStagesInnerMilestones.md) |  | [optional] 
**status** | **str** | Current upgrade status of the group | [optional] 

## Example

```python
from openapi_client.models.get_network_firmware_upgrades_staged_events200_response_stages_inner import GetNetworkFirmwareUpgradesStagedEvents200ResponseStagesInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkFirmwareUpgradesStagedEvents200ResponseStagesInner from a JSON string
get_network_firmware_upgrades_staged_events200_response_stages_inner_instance = GetNetworkFirmwareUpgradesStagedEvents200ResponseStagesInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkFirmwareUpgradesStagedEvents200ResponseStagesInner.to_json())

# convert the object into a dict
get_network_firmware_upgrades_staged_events200_response_stages_inner_dict = get_network_firmware_upgrades_staged_events200_response_stages_inner_instance.to_dict()
# create an instance of GetNetworkFirmwareUpgradesStagedEvents200ResponseStagesInner from a dict
get_network_firmware_upgrades_staged_events200_response_stages_inner_from_dict = GetNetworkFirmwareUpgradesStagedEvents200ResponseStagesInner.from_dict(get_network_firmware_upgrades_staged_events200_response_stages_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


