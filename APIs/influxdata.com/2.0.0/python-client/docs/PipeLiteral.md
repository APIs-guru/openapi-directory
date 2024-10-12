# PipeLiteral

Represents a specialized literal value, indicating the left hand value of a pipe expression

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Type of AST node | [optional] 

## Example

```python
from openapi_client.models.pipe_literal import PipeLiteral

# TODO update the JSON string below
json = "{}"
# create an instance of PipeLiteral from a JSON string
pipe_literal_instance = PipeLiteral.from_json(json)
# print the JSON string representation of the object
print(PipeLiteral.to_json())

# convert the object into a dict
pipe_literal_dict = pipe_literal_instance.to_dict()
# create an instance of PipeLiteral from a dict
pipe_literal_from_dict = PipeLiteral.from_dict(pipe_literal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


