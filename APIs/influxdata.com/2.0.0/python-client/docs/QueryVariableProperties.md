# QueryVariableProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | [optional] 
**values** | [**QueryVariablePropertiesValues**](QueryVariablePropertiesValues.md) |  | [optional] 

## Example

```python
from openapi_client.models.query_variable_properties import QueryVariableProperties

# TODO update the JSON string below
json = "{}"
# create an instance of QueryVariableProperties from a JSON string
query_variable_properties_instance = QueryVariableProperties.from_json(json)
# print the JSON string representation of the object
print(QueryVariableProperties.to_json())

# convert the object into a dict
query_variable_properties_dict = query_variable_properties_instance.to_dict()
# create an instance of QueryVariableProperties from a dict
query_variable_properties_from_dict = QueryVariableProperties.from_dict(query_variable_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


