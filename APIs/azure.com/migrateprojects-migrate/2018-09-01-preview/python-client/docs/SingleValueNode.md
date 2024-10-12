# SingleValueNode


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** |  | [optional] [readonly] 
**type_reference** | [**IEdmTypeReference**](IEdmTypeReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.single_value_node import SingleValueNode

# TODO update the JSON string below
json = "{}"
# create an instance of SingleValueNode from a JSON string
single_value_node_instance = SingleValueNode.from_json(json)
# print the JSON string representation of the object
print(SingleValueNode.to_json())

# convert the object into a dict
single_value_node_dict = single_value_node_instance.to_dict()
# create an instance of SingleValueNode from a dict
single_value_node_from_dict = SingleValueNode.from_dict(single_value_node_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


