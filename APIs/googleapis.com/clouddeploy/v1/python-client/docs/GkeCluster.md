# GkeCluster

Information specifying a GKE Cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster** | **str** | Information specifying a GKE Cluster. Format is &#x60;projects/{project_id}/locations/{location_id}/clusters/{cluster_id}&#x60;. | [optional] 
**internal_ip** | **bool** | Optional. If true, &#x60;cluster&#x60; is accessed using the private IP address of the control plane endpoint. Otherwise, the default IP address of the control plane endpoint is used. The default IP address is the private IP address for clusters with private control-plane endpoints and the public IP address otherwise. Only specify this option when &#x60;cluster&#x60; is a [private GKE cluster](https://cloud.google.com/kubernetes-engine/docs/concepts/private-cluster-concept). | [optional] 

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


