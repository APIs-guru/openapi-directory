# ClusterConfigurationUpgradeDescription

Describes the parameters for a standalone cluster configuration upgrade.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_health_policies** | [**ApplicationHealthPolicies**](ApplicationHealthPolicies.md) |  | [optional] 
**cluster_config** | **str** | The cluster configuration as a JSON string. For example, [this file](https://github.com/Azure-Samples/service-fabric-dotnet-standalone-cluster-configuration/blob/master/Samples/ClusterConfig.Unsecure.DevCluster.json) contains JSON describing the [nodes and other properties of the cluster](https://docs.microsoft.com/azure/service-fabric/service-fabric-cluster-manifest). | 
**health_check_retry_timeout** | **str** | The length of time between attempts to perform health checks if the application or cluster is not healthy. | [optional] [default to 'PT0H0M0S']
**health_check_stable_duration_in_seconds** | **str** | The length of time that the application or cluster must remain healthy before the upgrade proceeds to the next upgrade domain. | [optional] [default to 'PT0H0M0S']
**health_check_wait_duration_in_seconds** | **str** | The length of time to wait after completing an upgrade domain before starting the health checks process. | [optional] [default to 'PT0H0M0S']
**max_percent_delta_unhealthy_nodes** | **int** | The maximum allowed percentage of delta health degradation during the upgrade. Allowed values are integer values from zero to 100. | [optional] 
**max_percent_unhealthy_applications** | **int** | The maximum allowed percentage of unhealthy applications during the upgrade. Allowed values are integer values from zero to 100. | [optional] 
**max_percent_unhealthy_nodes** | **int** | The maximum allowed percentage of unhealthy nodes during the upgrade. Allowed values are integer values from zero to 100. | [optional] 
**max_percent_upgrade_domain_delta_unhealthy_nodes** | **int** | The maximum allowed percentage of upgrade domain delta health degradation during the upgrade. Allowed values are integer values from zero to 100. | [optional] 
**upgrade_domain_timeout_in_seconds** | **str** | The timeout for the upgrade domain. | [optional] [default to 'PT0H0M0S']
**upgrade_timeout_in_seconds** | **str** | The upgrade timeout. | [optional] [default to 'PT0H0M0S']

## Example

```python
from openapi_client.models.cluster_configuration_upgrade_description import ClusterConfigurationUpgradeDescription

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterConfigurationUpgradeDescription from a JSON string
cluster_configuration_upgrade_description_instance = ClusterConfigurationUpgradeDescription.from_json(json)
# print the JSON string representation of the object
print(ClusterConfigurationUpgradeDescription.to_json())

# convert the object into a dict
cluster_configuration_upgrade_description_dict = cluster_configuration_upgrade_description_instance.to_dict()
# create an instance of ClusterConfigurationUpgradeDescription from a dict
cluster_configuration_upgrade_description_from_dict = ClusterConfigurationUpgradeDescription.from_dict(cluster_configuration_upgrade_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


