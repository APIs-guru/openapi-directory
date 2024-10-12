# OBStatement2StatementValueInner

Set of elements used to provide details of a generic number value related to the statement resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Statement value type, in a coded form. | 
**value** | **str** | Value associated with the statement value type. | 

## Example

```python
from openapi_client.models.ob_statement2_statement_value_inner import OBStatement2StatementValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of OBStatement2StatementValueInner from a JSON string
ob_statement2_statement_value_inner_instance = OBStatement2StatementValueInner.from_json(json)
# print the JSON string representation of the object
print(OBStatement2StatementValueInner.to_json())

# convert the object into a dict
ob_statement2_statement_value_inner_dict = ob_statement2_statement_value_inner_instance.to_dict()
# create an instance of OBStatement2StatementValueInner from a dict
ob_statement2_statement_value_inner_from_dict = OBStatement2StatementValueInner.from_dict(ob_statement2_statement_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


