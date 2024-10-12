# MonitoringConfig

MonitoringConfig informs Fleet-based applications/services/UIs how the metrics for the underlying cluster is reported to cloud monitoring services. It can be set from empty to non-empty, but can't be mutated directly to prevent accidentally breaking the constinousty of metrics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster** | **str** | Optional. Cluster name used to report metrics. For Anthos on VMWare/Baremetal/MultiCloud clusters, it would be in format {cluster_type}/{cluster_name}, e.g., \&quot;awsClusters/cluster_1\&quot;. | [optional] 
**cluster_hash** | **str** | Optional. For GKE and Multicloud clusters, this is the UUID of the cluster resource. For VMWare and Baremetal clusters, this is the kube-system UID. | [optional] 
**kubernetes_metrics_prefix** | **str** | Optional. Kubernetes system metrics, if available, are written to this prefix. This defaults to kubernetes.io for GKE, and kubernetes.io/anthos for Anthos eventually. Noted: Anthos MultiCloud will have kubernetes.io prefix today but will migration to be under kubernetes.io/anthos. | [optional] 
**location** | **str** | Optional. Location used to report Metrics | [optional] 
**project_id** | **str** | Optional. Project used to report Metrics | [optional] 

## Example

```python
from openapi_client.models.monitoring_config import MonitoringConfig

# TODO update the JSON string below
json = "{}"
# create an instance of MonitoringConfig from a JSON string
monitoring_config_instance = MonitoringConfig.from_json(json)
# print the JSON string representation of the object
print(MonitoringConfig.to_json())

# convert the object into a dict
monitoring_config_dict = monitoring_config_instance.to_dict()
# create an instance of MonitoringConfig from a dict
monitoring_config_from_dict = MonitoringConfig.from_dict(monitoring_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


