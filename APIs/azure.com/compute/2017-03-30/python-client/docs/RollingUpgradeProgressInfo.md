# RollingUpgradeProgressInfo

Information about the number of virtual machine instances in each upgrade state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failed_instance_count** | **int** | The number of instances that have failed to be upgraded successfully. | [optional] [readonly] 
**in_progress_instance_count** | **int** | The number of instances that are currently being upgraded. | [optional] [readonly] 
**pending_instance_count** | **int** | The number of instances that have not yet begun to be upgraded. | [optional] [readonly] 
**successful_instance_count** | **int** | The number of instances that have been successfully upgraded. | [optional] [readonly] 

## Example

```python
from openapi_client.models.rolling_upgrade_progress_info import RollingUpgradeProgressInfo

# TODO update the JSON string below
json = "{}"
# create an instance of RollingUpgradeProgressInfo from a JSON string
rolling_upgrade_progress_info_instance = RollingUpgradeProgressInfo.from_json(json)
# print the JSON string representation of the object
print(RollingUpgradeProgressInfo.to_json())

# convert the object into a dict
rolling_upgrade_progress_info_dict = rolling_upgrade_progress_info_instance.to_dict()
# create an instance of RollingUpgradeProgressInfo from a dict
rolling_upgrade_progress_info_from_dict = RollingUpgradeProgressInfo.from_dict(rolling_upgrade_progress_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


