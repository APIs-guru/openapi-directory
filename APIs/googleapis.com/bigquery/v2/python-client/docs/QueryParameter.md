# QueryParameter

A parameter given to a query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Optional. If unset, this is a positional parameter. Otherwise, should be unique within a query. | [optional] 
**parameter_type** | [**QueryParameterType**](QueryParameterType.md) |  | [optional] 
**parameter_value** | [**QueryParameterValue**](QueryParameterValue.md) |  | [optional] 

## Example

```python
from openapi_client.models.query_parameter import QueryParameter

# TODO update the JSON string below
json = "{}"
# create an instance of QueryParameter from a JSON string
query_parameter_instance = QueryParameter.from_json(json)
# print the JSON string representation of the object
print(QueryParameter.to_json())

# convert the object into a dict
query_parameter_dict = query_parameter_instance.to_dict()
# create an instance of QueryParameter from a dict
query_parameter_from_dict = QueryParameter.from_dict(query_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


