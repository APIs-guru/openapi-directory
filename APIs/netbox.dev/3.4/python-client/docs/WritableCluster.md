# WritableCluster


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**device_count** | **int** |  | [optional] [readonly] 
**display** | **str** |  | [optional] [readonly] 
**group** | **int** |  | [optional] 
**id** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**name** | **str** |  | 
**site** | **int** |  | [optional] 
**status** | **str** |  | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**tenant** | **int** |  | [optional] 
**type** | **int** |  | 
**url** | **str** |  | [optional] [readonly] 
**virtualmachine_count** | **int** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.writable_cluster import WritableCluster

# TODO update the JSON string below
json = "{}"
# create an instance of WritableCluster from a JSON string
writable_cluster_instance = WritableCluster.from_json(json)
# print the JSON string representation of the object
print(WritableCluster.to_json())

# convert the object into a dict
writable_cluster_dict = writable_cluster_instance.to_dict()
# create an instance of WritableCluster from a dict
writable_cluster_from_dict = WritableCluster.from_dict(writable_cluster_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


