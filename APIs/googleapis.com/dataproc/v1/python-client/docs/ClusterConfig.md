# ClusterConfig

The cluster config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**autoscaling_config** | [**AutoscalingConfig**](AutoscalingConfig.md) |  | [optional] 
**auxiliary_node_groups** | [**List[AuxiliaryNodeGroup]**](AuxiliaryNodeGroup.md) | Optional. The node group settings. | [optional] 
**config_bucket** | **str** | Optional. A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster&#39;s staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see Dataproc staging and temp buckets (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket. | [optional] 
**dataproc_metric_config** | [**DataprocMetricConfig**](DataprocMetricConfig.md) |  | [optional] 
**encryption_config** | [**EncryptionConfig**](EncryptionConfig.md) |  | [optional] 
**endpoint_config** | [**EndpointConfig**](EndpointConfig.md) |  | [optional] 
**gce_cluster_config** | [**GceClusterConfig**](GceClusterConfig.md) |  | [optional] 
**gke_cluster_config** | [**GkeClusterConfig**](GkeClusterConfig.md) |  | [optional] 
**initialization_actions** | [**List[NodeInitializationAction]**](NodeInitializationAction.md) | Optional. Commands to execute on each node after config is completed. By default, executables are run on master and all worker nodes. You can test a node&#39;s role metadata to run an executable on a master or worker node, as shown below using curl (you can also use wget): ROLE&#x3D;$(curl -H Metadata-Flavor:Google http://metadata/computeMetadata/v1/instance/attributes/dataproc-role) if [[ \&quot;${ROLE}\&quot; &#x3D;&#x3D; &#39;Master&#39; ]]; then ... master specific actions ... else ... worker specific actions ... fi  | [optional] 
**lifecycle_config** | [**LifecycleConfig**](LifecycleConfig.md) |  | [optional] 
**master_config** | [**InstanceGroupConfig**](InstanceGroupConfig.md) |  | [optional] 
**metastore_config** | [**MetastoreConfig**](MetastoreConfig.md) |  | [optional] 
**secondary_worker_config** | [**InstanceGroupConfig**](InstanceGroupConfig.md) |  | [optional] 
**security_config** | [**SecurityConfig**](SecurityConfig.md) |  | [optional] 
**software_config** | [**SoftwareConfig**](SoftwareConfig.md) |  | [optional] 
**temp_bucket** | **str** | Optional. A Cloud Storage bucket used to store ephemeral cluster and jobs data, such as Spark and MapReduce history files. If you do not specify a temp bucket, Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster&#39;s temp bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket. The default bucket has a TTL of 90 days, but you can use any TTL (or none) if you specify a bucket (see Dataproc staging and temp buckets (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket. | [optional] 
**worker_config** | [**InstanceGroupConfig**](InstanceGroupConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.cluster_config import ClusterConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterConfig from a JSON string
cluster_config_instance = ClusterConfig.from_json(json)
# print the JSON string representation of the object
print(ClusterConfig.to_json())

# convert the object into a dict
cluster_config_dict = cluster_config_instance.to_dict()
# create an instance of ClusterConfig from a dict
cluster_config_from_dict = ClusterConfig.from_dict(cluster_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


