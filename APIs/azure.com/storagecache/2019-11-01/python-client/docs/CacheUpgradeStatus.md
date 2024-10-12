# CacheUpgradeStatus

Properties describing the software upgrade state of the Cache.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_firmware_version** | **str** | Version string of the firmware currently installed on this Cache. | [optional] [readonly] 
**firmware_update_deadline** | **datetime** | Time at which the pending firmware update will automatically be installed on the Cache. | [optional] [readonly] 
**firmware_update_status** | **str** | True if there is a firmware update ready to install on this Cache. The firmware will automatically be installed after firmwareUpdateDeadline if not triggered earlier via the upgrade operation. | [optional] [readonly] 
**last_firmware_update** | **datetime** | Time of the last successful firmware update. | [optional] [readonly] 
**pending_firmware_version** | **str** | When firmwareUpdateAvailable is true, this field holds the version string for the update. | [optional] [readonly] 

## Example

```python
from openapi_client.models.cache_upgrade_status import CacheUpgradeStatus

# TODO update the JSON string below
json = "{}"
# create an instance of CacheUpgradeStatus from a JSON string
cache_upgrade_status_instance = CacheUpgradeStatus.from_json(json)
# print the JSON string representation of the object
print(CacheUpgradeStatus.to_json())

# convert the object into a dict
cache_upgrade_status_dict = cache_upgrade_status_instance.to_dict()
# create an instance of CacheUpgradeStatus from a dict
cache_upgrade_status_from_dict = CacheUpgradeStatus.from_dict(cache_upgrade_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


