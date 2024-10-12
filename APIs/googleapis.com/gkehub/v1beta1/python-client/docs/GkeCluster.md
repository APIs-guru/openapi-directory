# GkeCluster

GkeCluster contains information specific to GKE clusters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_missing** | **bool** | Output only. If cluster_missing is set then it denotes that the GKE cluster no longer exists in the GKE Control Plane. | [optional] [readonly] 
**resource_link** | **str** | Immutable. Self-link of the GCP resource for the GKE cluster. For example: //container.googleapis.com/projects/my-project/locations/us-west1-a/clusters/my-cluster Zonal clusters are also supported. | [optional] 

## Example

```python
from openapi_client.models.gke_cluster import GkeCluster

# TODO update the JSON string below
json = "{}"
# create an instance of GkeCluster from a JSON string
gke_cluster_instance = GkeCluster.from_json(json)
# print the JSON string representation of the object
print(GkeCluster.to_json())

# convert the object into a dict
gke_cluster_dict = gke_cluster_instance.to_dict()
# create an instance of GkeCluster from a dict
gke_cluster_from_dict = GkeCluster.from_dict(gke_cluster_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


