# GetNetworkFirmwareUpgradesStagedStages200ResponseInnerGroup

The Staged Upgrade Group

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the Staged Upgrade Group | [optional] 
**id** | **str** | Id of the Staged Upgrade Group | [optional] 
**name** | **str** | Name of the Staged Upgrade Group | [optional] 

## Example

```python
from openapi_client.models.get_network_firmware_upgrades_staged_stages200_response_inner_group import GetNetworkFirmwareUpgradesStagedStages200ResponseInnerGroup

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkFirmwareUpgradesStagedStages200ResponseInnerGroup from a JSON string
get_network_firmware_upgrades_staged_stages200_response_inner_group_instance = GetNetworkFirmwareUpgradesStagedStages200ResponseInnerGroup.from_json(json)
# print the JSON string representation of the object
print(GetNetworkFirmwareUpgradesStagedStages200ResponseInnerGroup.to_json())

# convert the object into a dict
get_network_firmware_upgrades_staged_stages200_response_inner_group_dict = get_network_firmware_upgrades_staged_stages200_response_inner_group_instance.to_dict()
# create an instance of GetNetworkFirmwareUpgradesStagedStages200ResponseInnerGroup from a dict
get_network_firmware_upgrades_staged_stages200_response_inner_group_from_dict = GetNetworkFirmwareUpgradesStagedStages200ResponseInnerGroup.from_dict(get_network_firmware_upgrades_staged_stages200_response_inner_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


