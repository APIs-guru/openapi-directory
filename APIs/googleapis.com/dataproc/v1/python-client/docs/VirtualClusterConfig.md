# VirtualClusterConfig

The Dataproc cluster config for a cluster that does not directly control the underlying compute resources, such as a Dataproc-on-GKE cluster (https://cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-overview).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auxiliary_services_config** | [**AuxiliaryServicesConfig**](AuxiliaryServicesConfig.md) |  | [optional] 
**kubernetes_cluster_config** | [**KubernetesClusterConfig**](KubernetesClusterConfig.md) |  | [optional] 
**staging_bucket** | **str** | Optional. A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster&#39;s staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see Dataproc staging and temp buckets (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket. | [optional] 

## Example

```python
from openapi_client.models.virtual_cluster_config import VirtualClusterConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualClusterConfig from a JSON string
virtual_cluster_config_instance = VirtualClusterConfig.from_json(json)
# print the JSON string representation of the object
print(VirtualClusterConfig.to_json())

# convert the object into a dict
virtual_cluster_config_dict = virtual_cluster_config_instance.to_dict()
# create an instance of VirtualClusterConfig from a dict
virtual_cluster_config_from_dict = VirtualClusterConfig.from_dict(virtual_cluster_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


