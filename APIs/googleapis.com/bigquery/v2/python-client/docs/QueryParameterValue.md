# QueryParameterValue

The value of a query parameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**array_values** | [**List[QueryParameterValue]**](QueryParameterValue.md) | Optional. The array values, if this is an array type. | [optional] 
**range_value** | [**RangeValue**](RangeValue.md) |  | [optional] 
**struct_values** | [**Dict[str, QueryParameterValue]**](QueryParameterValue.md) | The struct field values. | [optional] 
**value** | **str** | Optional. The value of this value, if a simple scalar type. | [optional] 

## Example

```python
from openapi_client.models.query_parameter_value import QueryParameterValue

# TODO update the JSON string below
json = "{}"
# create an instance of QueryParameterValue from a JSON string
query_parameter_value_instance = QueryParameterValue.from_json(json)
# print the JSON string representation of the object
print(QueryParameterValue.to_json())

# convert the object into a dict
query_parameter_value_dict = query_parameter_value_instance.to_dict()
# create an instance of QueryParameterValue from a dict
query_parameter_value_from_dict = QueryParameterValue.from_dict(query_parameter_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


