# AddonsConfig

Configuration for the addons that can be automatically spun up in the cluster, enabling additional functionality.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_run_config** | [**CloudRunConfig**](CloudRunConfig.md) |  | [optional] 
**config_connector_config** | [**ConfigConnectorConfig**](ConfigConnectorConfig.md) |  | [optional] 
**dns_cache_config** | [**DnsCacheConfig**](DnsCacheConfig.md) |  | [optional] 
**gce_persistent_disk_csi_driver_config** | [**GcePersistentDiskCsiDriverConfig**](GcePersistentDiskCsiDriverConfig.md) |  | [optional] 
**gcp_filestore_csi_driver_config** | [**GcpFilestoreCsiDriverConfig**](GcpFilestoreCsiDriverConfig.md) |  | [optional] 
**gcs_fuse_csi_driver_config** | [**GcsFuseCsiDriverConfig**](GcsFuseCsiDriverConfig.md) |  | [optional] 
**gke_backup_agent_config** | [**GkeBackupAgentConfig**](GkeBackupAgentConfig.md) |  | [optional] 
**horizontal_pod_autoscaling** | [**HorizontalPodAutoscaling**](HorizontalPodAutoscaling.md) |  | [optional] 
**http_load_balancing** | [**HttpLoadBalancing**](HttpLoadBalancing.md) |  | [optional] 
**istio_config** | [**IstioConfig**](IstioConfig.md) |  | [optional] 
**kalm_config** | [**KalmConfig**](KalmConfig.md) |  | [optional] 
**kubernetes_dashboard** | [**KubernetesDashboard**](KubernetesDashboard.md) |  | [optional] 
**network_policy_config** | [**NetworkPolicyConfig**](NetworkPolicyConfig.md) |  | [optional] 
**stateful_ha_config** | [**StatefulHAConfig**](StatefulHAConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.addons_config import AddonsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AddonsConfig from a JSON string
addons_config_instance = AddonsConfig.from_json(json)
# print the JSON string representation of the object
print(AddonsConfig.to_json())

# convert the object into a dict
addons_config_dict = addons_config_instance.to_dict()
# create an instance of AddonsConfig from a dict
addons_config_from_dict = AddonsConfig.from_dict(addons_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


