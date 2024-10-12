# QueryParameterTypeStructTypesInner

The type of a struct parameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Optional. Human-oriented description of the field. | [optional] 
**name** | **str** | Optional. The name of this field. | [optional] 
**type** | [**QueryParameterType**](QueryParameterType.md) |  | [optional] 

## Example

```python
from openapi_client.models.query_parameter_type_struct_types_inner import QueryParameterTypeStructTypesInner

# TODO update the JSON string below
json = "{}"
# create an instance of QueryParameterTypeStructTypesInner from a JSON string
query_parameter_type_struct_types_inner_instance = QueryParameterTypeStructTypesInner.from_json(json)
# print the JSON string representation of the object
print(QueryParameterTypeStructTypesInner.to_json())

# convert the object into a dict
query_parameter_type_struct_types_inner_dict = query_parameter_type_struct_types_inner_instance.to_dict()
# create an instance of QueryParameterTypeStructTypesInner from a dict
query_parameter_type_struct_types_inner_from_dict = QueryParameterTypeStructTypesInner.from_dict(query_parameter_type_struct_types_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


