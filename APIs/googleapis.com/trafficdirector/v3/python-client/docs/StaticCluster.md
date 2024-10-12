# StaticCluster

Describes a statically loaded cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster** | **Dict[str, object]** | The cluster config. | [optional] 
**last_updated** | **str** | The timestamp when the Cluster was last updated. | [optional] 

## Example

```python
from openapi_client.models.static_cluster import StaticCluster

# TODO update the JSON string below
json = "{}"
# create an instance of StaticCluster from a JSON string
static_cluster_instance = StaticCluster.from_json(json)
# print the JSON string representation of the object
print(StaticCluster.to_json())

# convert the object into a dict
static_cluster_dict = static_cluster_instance.to_dict()
# create an instance of StaticCluster from a dict
static_cluster_from_dict = StaticCluster.from_dict(static_cluster_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


