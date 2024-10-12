# Cluster

Message containing the information about one cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**centroid_id** | **str** | Centroid id. | [optional] 
**count** | **str** | Count of training data rows that were assigned to this cluster. | [optional] 
**feature_values** | [**List[FeatureValue]**](FeatureValue.md) | Values of highly variant features for this cluster. | [optional] 

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


