# RollbacksNetworkFirmwareUpgradesStagedEventsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reasons** | [**List[CreateNetworkFirmwareUpgradesRollbackRequestReasonsInner]**](CreateNetworkFirmwareUpgradesRollbackRequestReasonsInner.md) | The reason for rolling back the staged upgrade | [optional] 
**stages** | [**List[UpdateNetworkFirmwareUpgradesStagedEventsRequestStagesInner]**](UpdateNetworkFirmwareUpgradesStagedEventsRequestStagesInner.md) | All completed or in-progress stages in the network with their new start times. All pending stages will be canceled | 

## Example

```python
from openapi_client.models.rollbacks_network_firmware_upgrades_staged_events_request import RollbacksNetworkFirmwareUpgradesStagedEventsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RollbacksNetworkFirmwareUpgradesStagedEventsRequest from a JSON string
rollbacks_network_firmware_upgrades_staged_events_request_instance = RollbacksNetworkFirmwareUpgradesStagedEventsRequest.from_json(json)
# print the JSON string representation of the object
print(RollbacksNetworkFirmwareUpgradesStagedEventsRequest.to_json())

# convert the object into a dict
rollbacks_network_firmware_upgrades_staged_events_request_dict = rollbacks_network_firmware_upgrades_staged_events_request_instance.to_dict()
# create an instance of RollbacksNetworkFirmwareUpgradesStagedEventsRequest from a dict
rollbacks_network_firmware_upgrades_staged_events_request_from_dict = RollbacksNetworkFirmwareUpgradesStagedEventsRequest.from_dict(rollbacks_network_firmware_upgrades_staged_events_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


