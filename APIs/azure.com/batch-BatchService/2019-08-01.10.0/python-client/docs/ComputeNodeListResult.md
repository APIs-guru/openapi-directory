# ComputeNodeListResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_next_link** | **str** |  | [optional] 
**value** | [**List[ComputeNode]**](ComputeNode.md) |  | [optional] 

## Example

```python
from openapi_client.models.compute_node_list_result import ComputeNodeListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeNodeListResult from a JSON string
compute_node_list_result_instance = ComputeNodeListResult.from_json(json)
# print the JSON string representation of the object
print(ComputeNodeListResult.to_json())

# convert the object into a dict
compute_node_list_result_dict = compute_node_list_result_instance.to_dict()
# create an instance of ComputeNodeListResult from a dict
compute_node_list_result_from_dict = ComputeNodeListResult.from_dict(compute_node_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


