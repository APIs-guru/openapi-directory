# Cluster

A resizable group of nodes in a particular cloud location, capable of serving all Tables in the parent Instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_config** | [**ClusterConfig**](ClusterConfig.md) |  | [optional] 
**default_storage_type** | **str** | Immutable. The type of storage used by this cluster to serve its parent instance&#39;s tables, unless explicitly overridden. | [optional] 
**encryption_config** | [**EncryptionConfig**](EncryptionConfig.md) |  | [optional] 
**location** | **str** | Immutable. The location where this cluster&#39;s nodes and storage reside. For best performance, clients should be located as close as possible to this cluster. Currently only zones are supported, so values should be of the form &#x60;projects/{project}/locations/{zone}&#x60;. | [optional] 
**name** | **str** | The unique name of the cluster. Values are of the form &#x60;projects/{project}/instances/{instance}/clusters/a-z*&#x60;. | [optional] 
**serve_nodes** | **int** | The number of nodes in the cluster. If no value is set, Cloud Bigtable automatically allocates nodes based on your data footprint and optimized for 50% storage utilization. | [optional] 
**state** | **str** | Output only. The current state of the cluster. | [optional] [readonly] 

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


