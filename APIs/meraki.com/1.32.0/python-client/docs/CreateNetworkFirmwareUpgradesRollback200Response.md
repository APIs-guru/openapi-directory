# CreateNetworkFirmwareUpgradesRollback200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product** | **str** | Product type to rollback (if the network is a combined network) | [optional] 
**reasons** | [**List[CreateNetworkFirmwareUpgradesRollback200ResponseReasonsInner]**](CreateNetworkFirmwareUpgradesRollback200ResponseReasonsInner.md) | Reasons for the rollback | [optional] 
**status** | **str** | Status of the rollback | [optional] 
**time** | **datetime** | Scheduled time for the rollback | [optional] 
**to_version** | [**CreateNetworkFirmwareUpgradesRollback200ResponseToVersion**](CreateNetworkFirmwareUpgradesRollback200ResponseToVersion.md) |  | [optional] 
**upgrade_batch_id** | **str** | Batch ID of the firmware rollback | [optional] 

## Example

```python
from openapi_client.models.create_network_firmware_upgrades_rollback200_response import CreateNetworkFirmwareUpgradesRollback200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkFirmwareUpgradesRollback200Response from a JSON string
create_network_firmware_upgrades_rollback200_response_instance = CreateNetworkFirmwareUpgradesRollback200Response.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkFirmwareUpgradesRollback200Response.to_json())

# convert the object into a dict
create_network_firmware_upgrades_rollback200_response_dict = create_network_firmware_upgrades_rollback200_response_instance.to_dict()
# create an instance of CreateNetworkFirmwareUpgradesRollback200Response from a dict
create_network_firmware_upgrades_rollback200_response_from_dict = CreateNetworkFirmwareUpgradesRollback200Response.from_dict(create_network_firmware_upgrades_rollback200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


