# UpdateNetworkFirmwareUpgradesStagedEventsRequestStagesInnerMilestones

The Staged Upgrade Milestones for the specific stage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scheduled_for** | **str** | The start time of the staged upgrade stage. (In ISO-8601 format, in the time zone of the network.) | 

## Example

```python
from openapi_client.models.update_network_firmware_upgrades_staged_events_request_stages_inner_milestones import UpdateNetworkFirmwareUpgradesStagedEventsRequestStagesInnerMilestones

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkFirmwareUpgradesStagedEventsRequestStagesInnerMilestones from a JSON string
update_network_firmware_upgrades_staged_events_request_stages_inner_milestones_instance = UpdateNetworkFirmwareUpgradesStagedEventsRequestStagesInnerMilestones.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkFirmwareUpgradesStagedEventsRequestStagesInnerMilestones.to_json())

# convert the object into a dict
update_network_firmware_upgrades_staged_events_request_stages_inner_milestones_dict = update_network_firmware_upgrades_staged_events_request_stages_inner_milestones_instance.to_dict()
# create an instance of UpdateNetworkFirmwareUpgradesStagedEventsRequestStagesInnerMilestones from a dict
update_network_firmware_upgrades_staged_events_request_stages_inner_milestones_from_dict = UpdateNetworkFirmwareUpgradesStagedEventsRequestStagesInnerMilestones.from_dict(update_network_firmware_upgrades_staged_events_request_stages_inner_milestones_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


