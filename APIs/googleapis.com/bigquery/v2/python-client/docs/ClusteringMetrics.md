# ClusteringMetrics

Evaluation metrics for clustering models.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clusters** | [**List[Cluster]**](Cluster.md) | Information for all clusters. | [optional] 
**davies_bouldin_index** | **float** | Davies-Bouldin index. | [optional] 
**mean_squared_distance** | **float** | Mean of squared distances between each sample to its cluster centroid. | [optional] 

## Example

```python
from openapi_client.models.clustering_metrics import ClusteringMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of ClusteringMetrics from a JSON string
clustering_metrics_instance = ClusteringMetrics.from_json(json)
# print the JSON string representation of the object
print(ClusteringMetrics.to_json())

# convert the object into a dict
clustering_metrics_dict = clustering_metrics_instance.to_dict()
# create an instance of ClusteringMetrics from a dict
clustering_metrics_from_dict = ClusteringMetrics.from_dict(clustering_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


