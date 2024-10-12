# Cluster

A cluster in a private cloud.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Creation time of this resource. | [optional] [readonly] 
**management** | **bool** | Output only. True if the cluster is a management cluster; false otherwise. There can only be one management cluster in a private cloud and it has to be the first one. | [optional] [readonly] 
**name** | **str** | Output only. The resource name of this cluster. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: &#x60;projects/my-project/locations/us-central1-a/privateClouds/my-cloud/clusters/my-cluster&#x60; | [optional] [readonly] 
**node_type_configs** | [**Dict[str, NodeTypeConfig]**](NodeTypeConfig.md) | Required. The map of cluster node types in this cluster, where the key is canonical identifier of the node type (corresponds to the &#x60;NodeType&#x60;). | [optional] 
**state** | **str** | Output only. State of the resource. | [optional] [readonly] 
**stretched_cluster_config** | [**StretchedClusterConfig**](StretchedClusterConfig.md) |  | [optional] 
**uid** | **str** | Output only. System-generated unique identifier for the resource. | [optional] [readonly] 
**update_time** | **str** | Output only. Last update time of this resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.cluster import Cluster

# TODO update the JSON string below
json = "{}"
# create an instance of Cluster from a JSON string
cluster_instance = Cluster.from_json(json)
# print the JSON string representation of the object
print(Cluster.to_json())

# convert the object into a dict
cluster_dict = cluster_instance.to_dict()
# create an instance of Cluster from a dict
cluster_from_dict = Cluster.from_dict(cluster_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


