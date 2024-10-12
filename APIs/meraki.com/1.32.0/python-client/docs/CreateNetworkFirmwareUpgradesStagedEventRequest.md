# CreateNetworkFirmwareUpgradesStagedEventRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**products** | [**CreateNetworkFirmwareUpgradesStagedEventRequestProducts**](CreateNetworkFirmwareUpgradesStagedEventRequestProducts.md) |  | [optional] 
**stages** | [**List[UpdateNetworkFirmwareUpgradesStagedEventsRequestStagesInner]**](UpdateNetworkFirmwareUpgradesStagedEventsRequestStagesInner.md) | All firmware upgrade stages in the network with their start time. | 

## Example

```python
from openapi_client.models.create_network_firmware_upgrades_staged_event_request import CreateNetworkFirmwareUpgradesStagedEventRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkFirmwareUpgradesStagedEventRequest from a JSON string
create_network_firmware_upgrades_staged_event_request_instance = CreateNetworkFirmwareUpgradesStagedEventRequest.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkFirmwareUpgradesStagedEventRequest.to_json())

# convert the object into a dict
create_network_firmware_upgrades_staged_event_request_dict = create_network_firmware_upgrades_staged_event_request_instance.to_dict()
# create an instance of CreateNetworkFirmwareUpgradesStagedEventRequest from a dict
create_network_firmware_upgrades_staged_event_request_from_dict = CreateNetworkFirmwareUpgradesStagedEventRequest.from_dict(create_network_firmware_upgrades_staged_event_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


