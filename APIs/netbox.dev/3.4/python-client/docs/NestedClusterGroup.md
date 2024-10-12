# NestedClusterGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_count** | **int** |  | [optional] [readonly] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**name** | **str** |  | 
**slug** | **str** |  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.nested_cluster_group import NestedClusterGroup

# TODO update the JSON string below
json = "{}"
# create an instance of NestedClusterGroup from a JSON string
nested_cluster_group_instance = NestedClusterGroup.from_json(json)
# print the JSON string representation of the object
print(NestedClusterGroup.to_json())

# convert the object into a dict
nested_cluster_group_dict = nested_cluster_group_instance.to_dict()
# create an instance of NestedClusterGroup from a dict
nested_cluster_group_from_dict = NestedClusterGroup.from_dict(nested_cluster_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


