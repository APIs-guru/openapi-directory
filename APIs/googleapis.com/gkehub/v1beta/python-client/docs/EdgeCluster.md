# EdgeCluster

EdgeCluster contains information specific to Google Edge Clusters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_link** | **str** | Immutable. Self-link of the Google Cloud resource for the Edge Cluster. For example: //edgecontainer.googleapis.com/projects/my-project/locations/us-west1-a/clusters/my-cluster | [optional] 

## Example

```python
from openapi_client.models.edge_cluster import EdgeCluster

# TODO update the JSON string below
json = "{}"
# create an instance of EdgeCluster from a JSON string
edge_cluster_instance = EdgeCluster.from_json(json)
# print the JSON string representation of the object
print(EdgeCluster.to_json())

# convert the object into a dict
edge_cluster_dict = edge_cluster_instance.to_dict()
# create an instance of EdgeCluster from a dict
edge_cluster_from_dict = EdgeCluster.from_dict(edge_cluster_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


