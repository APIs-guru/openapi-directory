# ClusterGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_count** | **int** |  | [optional] [readonly] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**name** | **str** |  | 
**slug** | **str** |  | 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.cluster_group import ClusterGroup

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterGroup from a JSON string
cluster_group_instance = ClusterGroup.from_json(json)
# print the JSON string representation of the object
print(ClusterGroup.to_json())

# convert the object into a dict
cluster_group_dict = cluster_group_instance.to_dict()
# create an instance of ClusterGroup from a dict
cluster_group_from_dict = ClusterGroup.from_dict(cluster_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


