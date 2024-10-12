# AutoOSUpgradePolicy

The configuration parameters used for performing automatic OS upgrade.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disable_auto_rollback** | **bool** | Whether OS image rollback feature should be disabled. Default value is false. | [optional] 

## Example

```python
from openapi_client.models.auto_os_upgrade_policy import AutoOSUpgradePolicy

# TODO update the JSON string below
json = "{}"
# create an instance of AutoOSUpgradePolicy from a JSON string
auto_os_upgrade_policy_instance = AutoOSUpgradePolicy.from_json(json)
# print the JSON string representation of the object
print(AutoOSUpgradePolicy.to_json())

# convert the object into a dict
auto_os_upgrade_policy_dict = auto_os_upgrade_policy_instance.to_dict()
# create an instance of AutoOSUpgradePolicy from a dict
auto_os_upgrade_policy_from_dict = AutoOSUpgradePolicy.from_dict(auto_os_upgrade_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


