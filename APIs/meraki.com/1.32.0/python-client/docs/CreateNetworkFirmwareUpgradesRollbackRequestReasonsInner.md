# CreateNetworkFirmwareUpgradesRollbackRequestReasonsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | Reason for the rollback | 
**comment** | **str** | Additional comment about the rollback | 

## Example

```python
from openapi_client.models.create_network_firmware_upgrades_rollback_request_reasons_inner import CreateNetworkFirmwareUpgradesRollbackRequestReasonsInner

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkFirmwareUpgradesRollbackRequestReasonsInner from a JSON string
create_network_firmware_upgrades_rollback_request_reasons_inner_instance = CreateNetworkFirmwareUpgradesRollbackRequestReasonsInner.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkFirmwareUpgradesRollbackRequestReasonsInner.to_json())

# convert the object into a dict
create_network_firmware_upgrades_rollback_request_reasons_inner_dict = create_network_firmware_upgrades_rollback_request_reasons_inner_instance.to_dict()
# create an instance of CreateNetworkFirmwareUpgradesRollbackRequestReasonsInner from a dict
create_network_firmware_upgrades_rollback_request_reasons_inner_from_dict = CreateNetworkFirmwareUpgradesRollbackRequestReasonsInner.from_dict(create_network_firmware_upgrades_rollback_request_reasons_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


