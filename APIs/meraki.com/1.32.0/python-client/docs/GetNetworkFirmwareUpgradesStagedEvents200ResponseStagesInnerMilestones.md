# GetNetworkFirmwareUpgradesStagedEvents200ResponseStagesInnerMilestones

The Staged Upgrade Milestones for the stage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**canceled_at** | **datetime** | Time that the group was canceled | [optional] 
**completed_at** | **datetime** | Finish time for the group | [optional] 
**scheduled_for** | **datetime** | Scheduled start time for the group | [optional] 
**started_at** | **datetime** | Start time for the group | [optional] 

## Example

```python
from openapi_client.models.get_network_firmware_upgrades_staged_events200_response_stages_inner_milestones import GetNetworkFirmwareUpgradesStagedEvents200ResponseStagesInnerMilestones

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkFirmwareUpgradesStagedEvents200ResponseStagesInnerMilestones from a JSON string
get_network_firmware_upgrades_staged_events200_response_stages_inner_milestones_instance = GetNetworkFirmwareUpgradesStagedEvents200ResponseStagesInnerMilestones.from_json(json)
# print the JSON string representation of the object
print(GetNetworkFirmwareUpgradesStagedEvents200ResponseStagesInnerMilestones.to_json())

# convert the object into a dict
get_network_firmware_upgrades_staged_events200_response_stages_inner_milestones_dict = get_network_firmware_upgrades_staged_events200_response_stages_inner_milestones_instance.to_dict()
# create an instance of GetNetworkFirmwareUpgradesStagedEvents200ResponseStagesInnerMilestones from a dict
get_network_firmware_upgrades_staged_events200_response_stages_inner_milestones_from_dict = GetNetworkFirmwareUpgradesStagedEvents200ResponseStagesInnerMilestones.from_dict(get_network_firmware_upgrades_staged_events200_response_stages_inner_milestones_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


