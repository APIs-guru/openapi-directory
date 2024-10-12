# Cluster

Contains information about a Cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ClusterProperties**](ClusterProperties.md) |  | [optional] 
**id** | **str** | The ID of the resource | [optional] [readonly] 
**location** | **str** | The location of the resource | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**tags** | **Dict[str, str]** | The tags of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource | [optional] [readonly] 

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


