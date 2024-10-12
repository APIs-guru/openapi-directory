# UpgradeOperationHistoricalStatusInfoProperties

Describes each OS upgrade on the Virtual Machine Scale Set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**ApiError**](ApiError.md) |  | [optional] 
**progress** | [**RollingUpgradeProgressInfo**](RollingUpgradeProgressInfo.md) |  | [optional] 
**rollback_info** | [**RollbackStatusInfo**](RollbackStatusInfo.md) |  | [optional] 
**running_status** | [**UpgradeOperationHistoryStatus**](UpgradeOperationHistoryStatus.md) |  | [optional] 
**started_by** | **str** | Invoker of the Upgrade Operation | [optional] [readonly] 
**target_image_reference** | [**ImageReference**](ImageReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.upgrade_operation_historical_status_info_properties import UpgradeOperationHistoricalStatusInfoProperties

# TODO update the JSON string below
json = "{}"
# create an instance of UpgradeOperationHistoricalStatusInfoProperties from a JSON string
upgrade_operation_historical_status_info_properties_instance = UpgradeOperationHistoricalStatusInfoProperties.from_json(json)
# print the JSON string representation of the object
print(UpgradeOperationHistoricalStatusInfoProperties.to_json())

# convert the object into a dict
upgrade_operation_historical_status_info_properties_dict = upgrade_operation_historical_status_info_properties_instance.to_dict()
# create an instance of UpgradeOperationHistoricalStatusInfoProperties from a dict
upgrade_operation_historical_status_info_properties_from_dict = UpgradeOperationHistoricalStatusInfoProperties.from_dict(upgrade_operation_historical_status_info_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


