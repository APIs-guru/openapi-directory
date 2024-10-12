# BadStatement

A placeholder for statements for which no correct statement nodes can be created

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **str** | Raw source text | [optional] 
**type** | **str** | Type of AST node | [optional] 

## Example

```python
from openapi_client.models.bad_statement import BadStatement

# TODO update the JSON string below
json = "{}"
# create an instance of BadStatement from a JSON string
bad_statement_instance = BadStatement.from_json(json)
# print the JSON string representation of the object
print(BadStatement.to_json())

# convert the object into a dict
bad_statement_dict = bad_statement_instance.to_dict()
# create an instance of BadStatement from a dict
bad_statement_from_dict = BadStatement.from_dict(bad_statement_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


