# Cluster

The cluster resource 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Azure resource etag. | [optional] [readonly] 
**id** | **str** | Azure resource identifier. | [optional] [readonly] 
**location** | **str** | Azure resource location. | 
**name** | **str** | Azure resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Azure resource tags. | [optional] 
**type** | **str** | Azure resource type. | [optional] [readonly] 
**properties** | [**ClusterProperties**](ClusterProperties.md) |  | [optional] 

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


