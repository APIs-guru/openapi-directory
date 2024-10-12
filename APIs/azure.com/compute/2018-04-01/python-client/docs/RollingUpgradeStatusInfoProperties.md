# RollingUpgradeStatusInfoProperties

The status of the latest virtual machine scale set rolling upgrade.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**ApiError**](ApiError.md) |  | [optional] 
**policy** | [**RollingUpgradePolicy**](RollingUpgradePolicy.md) |  | [optional] 
**progress** | [**RollingUpgradeProgressInfo**](RollingUpgradeProgressInfo.md) |  | [optional] 
**running_status** | [**RollingUpgradeRunningStatus**](RollingUpgradeRunningStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.rolling_upgrade_status_info_properties import RollingUpgradeStatusInfoProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RollingUpgradeStatusInfoProperties from a JSON string
rolling_upgrade_status_info_properties_instance = RollingUpgradeStatusInfoProperties.from_json(json)
# print the JSON string representation of the object
print(RollingUpgradeStatusInfoProperties.to_json())

# convert the object into a dict
rolling_upgrade_status_info_properties_dict = rolling_upgrade_status_info_properties_instance.to_dict()
# create an instance of RollingUpgradeStatusInfoProperties from a dict
rolling_upgrade_status_info_properties_from_dict = RollingUpgradeStatusInfoProperties.from_dict(rolling_upgrade_status_info_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


