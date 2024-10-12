# VirtualCluster

An Azure SQL virtual cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**VirtualClusterProperties**](VirtualClusterProperties.md) |  | [optional] 
**location** | **str** | Resource location. | 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.virtual_cluster import VirtualCluster

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualCluster from a JSON string
virtual_cluster_instance = VirtualCluster.from_json(json)
# print the JSON string representation of the object
print(VirtualCluster.to_json())

# convert the object into a dict
virtual_cluster_dict = virtual_cluster_instance.to_dict()
# create an instance of VirtualCluster from a dict
virtual_cluster_from_dict = VirtualCluster.from_dict(virtual_cluster_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


