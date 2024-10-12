# UpdateNetworkFirmwareUpgradesStagedEventsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stages** | [**List[UpdateNetworkFirmwareUpgradesStagedEventsRequestStagesInner]**](UpdateNetworkFirmwareUpgradesStagedEventsRequestStagesInner.md) | All firmware upgrade stages in the network with their start time. | 

## Example

```python
from openapi_client.models.update_network_firmware_upgrades_staged_events_request import UpdateNetworkFirmwareUpgradesStagedEventsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkFirmwareUpgradesStagedEventsRequest from a JSON string
update_network_firmware_upgrades_staged_events_request_instance = UpdateNetworkFirmwareUpgradesStagedEventsRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkFirmwareUpgradesStagedEventsRequest.to_json())

# convert the object into a dict
update_network_firmware_upgrades_staged_events_request_dict = update_network_firmware_upgrades_staged_events_request_instance.to_dict()
# create an instance of UpdateNetworkFirmwareUpgradesStagedEventsRequest from a dict
update_network_firmware_upgrades_staged_events_request_from_dict = UpdateNetworkFirmwareUpgradesStagedEventsRequest.from_dict(update_network_firmware_upgrades_staged_events_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


