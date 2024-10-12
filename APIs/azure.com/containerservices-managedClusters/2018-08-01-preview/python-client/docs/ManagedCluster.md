# ManagedCluster

Managed cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource location | 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 
**properties** | [**ManagedClusterProperties**](ManagedClusterProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.managed_cluster import ManagedCluster

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedCluster from a JSON string
managed_cluster_instance = ManagedCluster.from_json(json)
# print the JSON string representation of the object
print(ManagedCluster.to_json())

# convert the object into a dict
managed_cluster_dict = managed_cluster_instance.to_dict()
# create an instance of ManagedCluster from a dict
managed_cluster_from_dict = ManagedCluster.from_dict(managed_cluster_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


