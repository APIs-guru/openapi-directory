# ClusterConfigurationClustering


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_quantity** | **float** | Specifies max. quantity in a cluster | [optional] 
**min_quantity** | **float** | Specifies min. quantity in a cluster | [optional] 
**num_clusters** | **float** | Specifies the number of clusters | [optional] 

## Example

```python
from openapi_client.models.cluster_configuration_clustering import ClusterConfigurationClustering

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterConfigurationClustering from a JSON string
cluster_configuration_clustering_instance = ClusterConfigurationClustering.from_json(json)
# print the JSON string representation of the object
print(ClusterConfigurationClustering.to_json())

# convert the object into a dict
cluster_configuration_clustering_dict = cluster_configuration_clustering_instance.to_dict()
# create an instance of ClusterConfigurationClustering from a dict
cluster_configuration_clustering_from_dict = ClusterConfigurationClustering.from_dict(cluster_configuration_clustering_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


