# JsonNode


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**array** | **bool** |  | [optional] 
**big_decimal** | **bool** |  | [optional] 
**big_integer** | **bool** |  | [optional] 
**big_integer_value** | **int** |  | [optional] 
**binary** | **bool** |  | [optional] 
**binary_value** | **List[bytearray]** |  | [optional] 
**boolean** | **bool** |  | [optional] 
**boolean_value** | **bool** |  | [optional] 
**container_node** | **bool** |  | [optional] 
**decimal_value** | **float** |  | [optional] 
**double** | **bool** |  | [optional] 
**double_value** | **float** |  | [optional] 
**elements** | **object** |  | [optional] 
**field_names** | **object** |  | [optional] 
**fields** | **object** |  | [optional] 
**floating_point_number** | **bool** |  | [optional] 
**int** | **bool** |  | [optional] 
**int_value** | **int** |  | [optional] 
**integral_number** | **bool** |  | [optional] 
**long** | **bool** |  | [optional] 
**long_value** | **int** |  | [optional] 
**missing_node** | **bool** |  | [optional] 
**null** | **bool** |  | [optional] 
**number** | **bool** |  | [optional] 
**number_type** | **str** |  | [optional] 
**number_value** | **float** |  | [optional] 
**object** | **bool** |  | [optional] 
**pojo** | **bool** |  | [optional] 
**text_value** | **str** |  | [optional] 
**textual** | **bool** |  | [optional] 
**value_as_boolean** | **bool** |  | [optional] 
**value_as_double** | **float** |  | [optional] 
**value_as_int** | **int** |  | [optional] 
**value_as_long** | **int** |  | [optional] 
**value_as_text** | **str** |  | [optional] 
**value_node** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.json_node import JsonNode

# TODO update the JSON string below
json = "{}"
# create an instance of JsonNode from a JSON string
json_node_instance = JsonNode.from_json(json)
# print the JSON string representation of the object
print(JsonNode.to_json())

# convert the object into a dict
json_node_dict = json_node_instance.to_dict()
# create an instance of JsonNode from a dict
json_node_from_dict = JsonNode.from_dict(json_node_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


