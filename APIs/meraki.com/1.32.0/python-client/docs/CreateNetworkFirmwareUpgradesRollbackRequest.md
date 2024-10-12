# CreateNetworkFirmwareUpgradesRollbackRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product** | **str** | Product type to rollback (if the network is a combined network) | [optional] 
**reasons** | [**List[CreateNetworkFirmwareUpgradesRollbackRequestReasonsInner]**](CreateNetworkFirmwareUpgradesRollbackRequestReasonsInner.md) | Reasons for the rollback | 
**time** | **datetime** | Scheduled time for the rollback | [optional] 
**to_version** | [**CreateNetworkFirmwareUpgradesRollbackRequestToVersion**](CreateNetworkFirmwareUpgradesRollbackRequestToVersion.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_network_firmware_upgrades_rollback_request import CreateNetworkFirmwareUpgradesRollbackRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkFirmwareUpgradesRollbackRequest from a JSON string
create_network_firmware_upgrades_rollback_request_instance = CreateNetworkFirmwareUpgradesRollbackRequest.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkFirmwareUpgradesRollbackRequest.to_json())

# convert the object into a dict
create_network_firmware_upgrades_rollback_request_dict = create_network_firmware_upgrades_rollback_request_instance.to_dict()
# create an instance of CreateNetworkFirmwareUpgradesRollbackRequest from a dict
create_network_firmware_upgrades_rollback_request_from_dict = CreateNetworkFirmwareUpgradesRollbackRequest.from_dict(create_network_firmware_upgrades_rollback_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


