# RollingUpgradeStatusInfo

The status of the latest virtual machine scale set rolling upgrade.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RollingUpgradeStatusInfoProperties**](RollingUpgradeStatusInfoProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource location | 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.rolling_upgrade_status_info import RollingUpgradeStatusInfo

# TODO update the JSON string below
json = "{}"
# create an instance of RollingUpgradeStatusInfo from a JSON string
rolling_upgrade_status_info_instance = RollingUpgradeStatusInfo.from_json(json)
# print the JSON string representation of the object
print(RollingUpgradeStatusInfo.to_json())

# convert the object into a dict
rolling_upgrade_status_info_dict = rolling_upgrade_status_info_instance.to_dict()
# create an instance of RollingUpgradeStatusInfo from a dict
rolling_upgrade_status_info_from_dict = RollingUpgradeStatusInfo.from_dict(rolling_upgrade_status_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


