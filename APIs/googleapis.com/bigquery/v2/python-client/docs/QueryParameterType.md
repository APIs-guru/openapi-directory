# QueryParameterType

The type of a query parameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**array_type** | [**QueryParameterType**](QueryParameterType.md) |  | [optional] 
**range_element_type** | [**QueryParameterType**](QueryParameterType.md) |  | [optional] 
**struct_types** | [**List[QueryParameterTypeStructTypesInner]**](QueryParameterTypeStructTypesInner.md) | Optional. The types of the fields of this struct, in order, if this is a struct. | [optional] 
**type** | **str** | Required. The top level type of this field. | [optional] 

## Example

```python
from openapi_client.models.query_parameter_type import QueryParameterType

# TODO update the JSON string below
json = "{}"
# create an instance of QueryParameterType from a JSON string
query_parameter_type_instance = QueryParameterType.from_json(json)
# print the JSON string representation of the object
print(QueryParameterType.to_json())

# convert the object into a dict
query_parameter_type_dict = query_parameter_type_instance.to_dict()
# create an instance of QueryParameterType from a dict
query_parameter_type_from_dict = QueryParameterType.from_dict(query_parameter_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


