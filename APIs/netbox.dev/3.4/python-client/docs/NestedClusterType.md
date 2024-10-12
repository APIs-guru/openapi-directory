# NestedClusterType


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
from openapi_client.models.nested_cluster_type import NestedClusterType

# TODO update the JSON string below
json = "{}"
# create an instance of NestedClusterType from a JSON string
nested_cluster_type_instance = NestedClusterType.from_json(json)
# print the JSON string representation of the object
print(NestedClusterType.to_json())

# convert the object into a dict
nested_cluster_type_dict = nested_cluster_type_instance.to_dict()
# create an instance of NestedClusterType from a dict
nested_cluster_type_from_dict = NestedClusterType.from_dict(nested_cluster_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


