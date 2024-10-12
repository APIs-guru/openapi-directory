# CreateNetworkFirmwareUpgradesRollbackRequestToVersion

Version to downgrade to (if the network has firmware flexibility)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The version ID | [optional] 

## Example

```python
from openapi_client.models.create_network_firmware_upgrades_rollback_request_to_version import CreateNetworkFirmwareUpgradesRollbackRequestToVersion

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkFirmwareUpgradesRollbackRequestToVersion from a JSON string
create_network_firmware_upgrades_rollback_request_to_version_instance = CreateNetworkFirmwareUpgradesRollbackRequestToVersion.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkFirmwareUpgradesRollbackRequestToVersion.to_json())

# convert the object into a dict
create_network_firmware_upgrades_rollback_request_to_version_dict = create_network_firmware_upgrades_rollback_request_to_version_instance.to_dict()
# create an instance of CreateNetworkFirmwareUpgradesRollbackRequestToVersion from a dict
create_network_firmware_upgrades_rollback_request_to_version_from_dict = CreateNetworkFirmwareUpgradesRollbackRequestToVersion.from_dict(create_network_firmware_upgrades_rollback_request_to_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


