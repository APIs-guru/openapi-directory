# ClusterConfigurationUpgradeStatusInfo

Information about a standalone cluster configuration upgrade status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config_version** | **str** | The cluster configuration version. | [optional] 
**details** | **str** | The cluster upgrade status details. | [optional] 
**progress_status** | **int** | The cluster manifest version. | [optional] 
**upgrade_state** | [**UpgradeState**](UpgradeState.md) |  | [optional] 

## Example

```python
from openapi_client.models.cluster_configuration_upgrade_status_info import ClusterConfigurationUpgradeStatusInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterConfigurationUpgradeStatusInfo from a JSON string
cluster_configuration_upgrade_status_info_instance = ClusterConfigurationUpgradeStatusInfo.from_json(json)
# print the JSON string representation of the object
print(ClusterConfigurationUpgradeStatusInfo.to_json())

# convert the object into a dict
cluster_configuration_upgrade_status_info_dict = cluster_configuration_upgrade_status_info_instance.to_dict()
# create an instance of ClusterConfigurationUpgradeStatusInfo from a dict
cluster_configuration_upgrade_status_info_from_dict = ClusterConfigurationUpgradeStatusInfo.from_dict(cluster_configuration_upgrade_status_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


