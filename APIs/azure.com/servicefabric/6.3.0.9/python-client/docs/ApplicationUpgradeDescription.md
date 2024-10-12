# ApplicationUpgradeDescription

Describes the parameters for an application upgrade. Note that upgrade description replaces the existing application description. This means that if the parameters are not specified, the existing parameters on the applications will be overwritten with the empty parameters list. This would result in the application using the default value of the parameters from the application manifest. If you do not want to change any existing parameter values, please get the application parameters first using the GetApplicationInfo query and then supply those values as Parameters in this ApplicationUpgradeDescription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_health_policy** | [**ApplicationHealthPolicy**](ApplicationHealthPolicy.md) |  | [optional] 
**force_restart** | **bool** | If true, then processes are forcefully restarted during upgrade even when the code version has not changed (the upgrade only changes configuration or data). | [optional] [default to False]
**monitoring_policy** | [**MonitoringPolicyDescription**](MonitoringPolicyDescription.md) |  | [optional] 
**name** | **str** | The name of the target application, including the &#39;fabric:&#39; URI scheme. | 
**parameters** | [**List[ApplicationParameter]**](ApplicationParameter.md) | List of application parameters with overridden values from their default values specified in the application manifest. | 
**rolling_upgrade_mode** | [**UpgradeMode**](UpgradeMode.md) |  | [optional] [default to UpgradeMode.UNMONITOREDAUTO]
**target_application_type_version** | **str** | The target application type version (found in the application manifest) for the application upgrade. | 
**upgrade_kind** | [**UpgradeKind**](UpgradeKind.md) |  | [default to UpgradeKind.ROLLING]
**upgrade_replica_set_check_timeout_in_seconds** | **int** | The maximum amount of time to block processing of an upgrade domain and prevent loss of availability when there are unexpected issues. When this timeout expires, processing of the upgrade domain will proceed regardless of availability loss issues. The timeout is reset at the start of each upgrade domain. Valid values are between 0 and 42949672925 inclusive. (unsigned 32-bit integer). | [optional] 

## Example

```python
from openapi_client.models.application_upgrade_description import ApplicationUpgradeDescription

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationUpgradeDescription from a JSON string
application_upgrade_description_instance = ApplicationUpgradeDescription.from_json(json)
# print the JSON string representation of the object
print(ApplicationUpgradeDescription.to_json())

# convert the object into a dict
application_upgrade_description_dict = application_upgrade_description_instance.to_dict()
# create an instance of ApplicationUpgradeDescription from a dict
application_upgrade_description_from_dict = ApplicationUpgradeDescription.from_dict(application_upgrade_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


