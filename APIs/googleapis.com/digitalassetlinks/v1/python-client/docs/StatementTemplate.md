# StatementTemplate

A single statement to check in a bulk call using BulkCheck. See CheckRequest for details about each field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**relation** | **str** | The relationship being asserted between the source and target. If omitted, you must specify a BulkCheckRequest.default_relation value to use here. | [optional] 
**source** | [**Asset**](Asset.md) |  | [optional] 
**target** | [**Asset**](Asset.md) |  | [optional] 

## Example

```python
from openapi_client.models.statement_template import StatementTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of StatementTemplate from a JSON string
statement_template_instance = StatementTemplate.from_json(json)
# print the JSON string representation of the object
print(StatementTemplate.to_json())

# convert the object into a dict
statement_template_dict = statement_template_instance.to_dict()
# create an instance of StatementTemplate from a dict
statement_template_from_dict = StatementTemplate.from_dict(statement_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


