# TestStatement

Declares a Flux test case

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignment** | [**VariableAssignment**](VariableAssignment.md) |  | [optional] 
**type** | **str** | Type of AST node | [optional] 

## Example

```python
from openapi_client.models.test_statement import TestStatement

# TODO update the JSON string below
json = "{}"
# create an instance of TestStatement from a JSON string
test_statement_instance = TestStatement.from_json(json)
# print the JSON string representation of the object
print(TestStatement.to_json())

# convert the object into a dict
test_statement_dict = test_statement_instance.to_dict()
# create an instance of TestStatement from a dict
test_statement_from_dict = TestStatement.from_dict(test_statement_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


