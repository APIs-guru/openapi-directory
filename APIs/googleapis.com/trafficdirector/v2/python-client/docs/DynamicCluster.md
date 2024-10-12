# DynamicCluster

Describes a dynamically loaded cluster via the CDS API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster** | **Dict[str, object]** | The cluster config. | [optional] 
**last_updated** | **str** | The timestamp when the Cluster was last updated. | [optional] 
**version_info** | **str** | This is the per-resource version information. This version is currently taken from the :ref:&#x60;version_info &#x60; field at the time that the cluster was loaded. In the future, discrete per-cluster versions may be supported by the API. | [optional] 

## Example

```python
from openapi_client.models.dynamic_cluster import DynamicCluster

# TODO update the JSON string below
json = "{}"
# create an instance of DynamicCluster from a JSON string
dynamic_cluster_instance = DynamicCluster.from_json(json)
# print the JSON string representation of the object
print(DynamicCluster.to_json())

# convert the object into a dict
dynamic_cluster_dict = dynamic_cluster_instance.to_dict()
# create an instance of DynamicCluster from a dict
dynamic_cluster_from_dict = DynamicCluster.from_dict(dynamic_cluster_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


