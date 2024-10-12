# AutomaticOSUpgradePolicy

The configuration parameters used for performing automatic OS upgrade.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disable_automatic_rollback** | **bool** | Whether OS image rollback feature should be disabled. Default value is false. | [optional] 
**enable_automatic_os_upgrade** | **bool** | Indicates whether OS upgrades should automatically be applied to scale set instances in a rolling fashion when a newer version of the OS image becomes available. Default value is false. If this is set to true for Windows based scale sets, recommendation is to set [enableAutomaticUpdates](https://docs.microsoft.com/dotnet/api/microsoft.azure.management.compute.models.windowsconfiguration.enableautomaticupdates?view&#x3D;azure-dotnet) to false. | [optional] 

## Example

```python
from openapi_client.models.automatic_os_upgrade_policy import AutomaticOSUpgradePolicy

# TODO update the JSON string below
json = "{}"
# create an instance of AutomaticOSUpgradePolicy from a JSON string
automatic_os_upgrade_policy_instance = AutomaticOSUpgradePolicy.from_json(json)
# print the JSON string representation of the object
print(AutomaticOSUpgradePolicy.to_json())

# convert the object into a dict
automatic_os_upgrade_policy_dict = automatic_os_upgrade_policy_instance.to_dict()
# create an instance of AutomaticOSUpgradePolicy from a dict
automatic_os_upgrade_policy_from_dict = AutomaticOSUpgradePolicy.from_dict(automatic_os_upgrade_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


