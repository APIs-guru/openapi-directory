# CreateNetworkFirmwareUpgradesRollback200ResponseToVersion

Version to downgrade to (if the network has firmware flexibility)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**firmware** | **str** | Name of the firmware version | [optional] 
**id** | **str** | Firmware version identifier | [optional] 
**release_date** | **datetime** | Release date of the firmware version | [optional] 
**release_type** | **str** | Release type of the firmware version | [optional] 
**short_name** | **str** | Firmware version short name | [optional] 

## Example

```python
from openapi_client.models.create_network_firmware_upgrades_rollback200_response_to_version import CreateNetworkFirmwareUpgradesRollback200ResponseToVersion

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkFirmwareUpgradesRollback200ResponseToVersion from a JSON string
create_network_firmware_upgrades_rollback200_response_to_version_instance = CreateNetworkFirmwareUpgradesRollback200ResponseToVersion.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkFirmwareUpgradesRollback200ResponseToVersion.to_json())

# convert the object into a dict
create_network_firmware_upgrades_rollback200_response_to_version_dict = create_network_firmware_upgrades_rollback200_response_to_version_instance.to_dict()
# create an instance of CreateNetworkFirmwareUpgradesRollback200ResponseToVersion from a dict
create_network_firmware_upgrades_rollback200_response_to_version_from_dict = CreateNetworkFirmwareUpgradesRollback200ResponseToVersion.from_dict(create_network_firmware_upgrades_rollback200_response_to_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


