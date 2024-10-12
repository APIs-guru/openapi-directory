# ClusterInfo

Information about a single cluster for clustering model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**centroid_id** | **str** | Centroid id. | [optional] 
**cluster_radius** | **float** | Cluster radius, the average distance from centroid to each point assigned to the cluster. | [optional] 
**cluster_size** | **str** | Cluster size, the total number of points assigned to the cluster. | [optional] 

## Example

```python
from openapi_client.models.cluster_info import ClusterInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterInfo from a JSON string
cluster_info_instance = ClusterInfo.from_json(json)
# print the JSON string representation of the object
print(ClusterInfo.to_json())

# convert the object into a dict
cluster_info_dict = cluster_info_instance.to_dict()
# create an instance of ClusterInfo from a dict
cluster_info_from_dict = ClusterInfo.from_dict(cluster_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


