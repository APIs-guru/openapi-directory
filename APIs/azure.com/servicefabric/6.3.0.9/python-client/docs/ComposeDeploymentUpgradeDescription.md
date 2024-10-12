# ComposeDeploymentUpgradeDescription

Describes the parameters for a compose deployment upgrade.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_health_policy** | [**ApplicationHealthPolicy**](ApplicationHealthPolicy.md) |  | [optional] 
**compose_file_content** | **str** | The content of the compose file that describes the deployment to create. | 
**deployment_name** | **str** | The name of the deployment. | 
**force_restart** | **bool** | If true, then processes are forcefully restarted during upgrade even when the code version has not changed (the upgrade only changes configuration or data). | [optional] [default to False]
**monitoring_policy** | [**MonitoringPolicyDescription**](MonitoringPolicyDescription.md) |  | [optional] 
**registry_credential** | [**RegistryCredential**](RegistryCredential.md) |  | [optional] 
**rolling_upgrade_mode** | [**UpgradeMode**](UpgradeMode.md) |  | [optional] [default to UpgradeMode.UNMONITOREDAUTO]
**upgrade_kind** | [**UpgradeKind**](UpgradeKind.md) |  | [default to UpgradeKind.ROLLING]
**upgrade_replica_set_check_timeout_in_seconds** | **int** | The maximum amount of time to block processing of an upgrade domain and prevent loss of availability when there are unexpected issues. When this timeout expires, processing of the upgrade domain will proceed regardless of availability loss issues. The timeout is reset at the start of each upgrade domain. Valid values are between 0 and 42949672925 inclusive. (unsigned 32-bit integer). | [optional] 

## Example

```python
from openapi_client.models.compose_deployment_upgrade_description import ComposeDeploymentUpgradeDescription

# TODO update the JSON string below
json = "{}"
# create an instance of ComposeDeploymentUpgradeDescription from a JSON string
compose_deployment_upgrade_description_instance = ComposeDeploymentUpgradeDescription.from_json(json)
# print the JSON string representation of the object
print(ComposeDeploymentUpgradeDescription.to_json())

# convert the object into a dict
compose_deployment_upgrade_description_dict = compose_deployment_upgrade_description_instance.to_dict()
# create an instance of ComposeDeploymentUpgradeDescription from a dict
compose_deployment_upgrade_description_from_dict = ComposeDeploymentUpgradeDescription.from_dict(compose_deployment_upgrade_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


