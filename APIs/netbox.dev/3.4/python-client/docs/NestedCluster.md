# NestedCluster


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**name** | **str** |  | 
**url** | **str** |  | [optional] [readonly] 
**virtualmachine_count** | **int** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.nested_cluster import NestedCluster

# TODO update the JSON string below
json = "{}"
# create an instance of NestedCluster from a JSON string
nested_cluster_instance = NestedCluster.from_json(json)
# print the JSON string representation of the object
print(NestedCluster.to_json())

# convert the object into a dict
nested_cluster_dict = nested_cluster_instance.to_dict()
# create an instance of NestedCluster from a dict
nested_cluster_from_dict = NestedCluster.from_dict(nested_cluster_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


