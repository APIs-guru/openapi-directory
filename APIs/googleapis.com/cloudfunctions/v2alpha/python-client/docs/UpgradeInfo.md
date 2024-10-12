# UpgradeInfo

Information related to: * A function's eligibility for 1st Gen to 2nd Gen migration * Current state of migration for function undergoing migration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_config** | [**BuildConfig**](BuildConfig.md) |  | [optional] 
**event_trigger** | [**EventTrigger**](EventTrigger.md) |  | [optional] 
**service_config** | [**ServiceConfig**](ServiceConfig.md) |  | [optional] 
**upgrade_state** | **str** | UpgradeState of the function | [optional] 

## Example

```python
from openapi_client.models.upgrade_info import UpgradeInfo

# TODO update the JSON string below
json = "{}"
# create an instance of UpgradeInfo from a JSON string
upgrade_info_instance = UpgradeInfo.from_json(json)
# print the JSON string representation of the object
print(UpgradeInfo.to_json())

# convert the object into a dict
upgrade_info_dict = upgrade_info_instance.to_dict()
# create an instance of UpgradeInfo from a dict
upgrade_info_from_dict = UpgradeInfo.from_dict(upgrade_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


