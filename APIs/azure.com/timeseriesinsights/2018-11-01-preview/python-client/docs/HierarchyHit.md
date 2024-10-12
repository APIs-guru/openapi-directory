# HierarchyHit

The hierarchy node which contains the instances matching the query based on the input. May be empty or null.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cumulative_instance_count** | **int** | Total number of instances that belong to this node and it&#39;s subtrees matching the query. | [optional] [readonly] 
**hierarchy_nodes** | [**SearchHierarchyNodesResponse**](SearchHierarchyNodesResponse.md) |  | [optional] 
**name** | **str** | Name of the hierarchy node. May be empty, cannot be null. | [optional] [readonly] 

## Example

```python
from openapi_client.models.hierarchy_hit import HierarchyHit

# TODO update the JSON string below
json = "{}"
# create an instance of HierarchyHit from a JSON string
hierarchy_hit_instance = HierarchyHit.from_json(json)
# print the JSON string representation of the object
print(HierarchyHit.to_json())

# convert the object into a dict
hierarchy_hit_dict = hierarchy_hit_instance.to_dict()
# create an instance of HierarchyHit from a dict
hierarchy_hit_from_dict = HierarchyHit.from_dict(hierarchy_hit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


