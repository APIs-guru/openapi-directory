# OBStatement2StatementRateInner

Set of elements used to provide details of a generic rate related to the statement resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rate** | **str** | Rate associated with the statement rate type. | 
**type** | **str** | Statement rate type, in a coded form. | 

## Example

```python
from openapi_client.models.ob_statement2_statement_rate_inner import OBStatement2StatementRateInner

# TODO update the JSON string below
json = "{}"
# create an instance of OBStatement2StatementRateInner from a JSON string
ob_statement2_statement_rate_inner_instance = OBStatement2StatementRateInner.from_json(json)
# print the JSON string representation of the object
print(OBStatement2StatementRateInner.to_json())

# convert the object into a dict
ob_statement2_statement_rate_inner_dict = ob_statement2_statement_rate_inner_instance.to_dict()
# create an instance of OBStatement2StatementRateInner from a dict
ob_statement2_statement_rate_inner_from_dict = OBStatement2StatementRateInner.from_dict(ob_statement2_statement_rate_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


