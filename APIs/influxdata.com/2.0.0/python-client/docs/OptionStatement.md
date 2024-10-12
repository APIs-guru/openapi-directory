# OptionStatement

A single variable declaration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignment** | [**OptionStatementAssignment**](OptionStatementAssignment.md) |  | [optional] 
**type** | **str** | Type of AST node | [optional] 

## Example

```python
from openapi_client.models.option_statement import OptionStatement

# TODO update the JSON string below
json = "{}"
# create an instance of OptionStatement from a JSON string
option_statement_instance = OptionStatement.from_json(json)
# print the JSON string representation of the object
print(OptionStatement.to_json())

# convert the object into a dict
option_statement_dict = option_statement_instance.to_dict()
# create an instance of OptionStatement from a dict
option_statement_from_dict = OptionStatement.from_dict(option_statement_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


