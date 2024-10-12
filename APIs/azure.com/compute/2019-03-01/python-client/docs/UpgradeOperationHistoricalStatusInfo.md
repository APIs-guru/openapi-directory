# UpgradeOperationHistoricalStatusInfo

Virtual Machine Scale Set OS Upgrade History operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Resource location | [optional] [readonly] 
**properties** | [**UpgradeOperationHistoricalStatusInfoProperties**](UpgradeOperationHistoricalStatusInfoProperties.md) |  | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.upgrade_operation_historical_status_info import UpgradeOperationHistoricalStatusInfo

# TODO update the JSON string below
json = "{}"
# create an instance of UpgradeOperationHistoricalStatusInfo from a JSON string
upgrade_operation_historical_status_info_instance = UpgradeOperationHistoricalStatusInfo.from_json(json)
# print the JSON string representation of the object
print(UpgradeOperationHistoricalStatusInfo.to_json())

# convert the object into a dict
upgrade_operation_historical_status_info_dict = upgrade_operation_historical_status_info_instance.to_dict()
# create an instance of UpgradeOperationHistoricalStatusInfo from a dict
upgrade_operation_historical_status_info_from_dict = UpgradeOperationHistoricalStatusInfo.from_dict(upgrade_operation_historical_status_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


