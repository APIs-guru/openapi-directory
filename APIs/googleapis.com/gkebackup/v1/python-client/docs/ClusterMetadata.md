# ClusterMetadata

Information about the GKE cluster from which this Backup was created.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**anthos_version** | **str** | Output only. Anthos version | [optional] [readonly] 
**backup_crd_versions** | **Dict[str, str]** | Output only. A list of the Backup for GKE CRD versions found in the cluster. | [optional] [readonly] 
**cluster** | **str** | Output only. The source cluster from which this Backup was created. Valid formats: - &#x60;projects/*/locations/*/clusters/*&#x60; - &#x60;projects/*/zones/*/clusters/*&#x60; This is inherited from the parent BackupPlan&#39;s cluster field. | [optional] [readonly] 
**gke_version** | **str** | Output only. GKE version | [optional] [readonly] 
**k8s_version** | **str** | Output only. The Kubernetes server version of the source cluster. | [optional] [readonly] 

## Example

```python
from openapi_client.models.cluster_metadata import ClusterMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterMetadata from a JSON string
cluster_metadata_instance = ClusterMetadata.from_json(json)
# print the JSON string representation of the object
print(ClusterMetadata.to_json())

# convert the object into a dict
cluster_metadata_dict = cluster_metadata_instance.to_dict()
# create an instance of ClusterMetadata from a dict
cluster_metadata_from_dict = ClusterMetadata.from_dict(cluster_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


