# OBStatement2StatementAmountInner

Set of elements used to provide details of a generic amount for the statement resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**OBActiveOrHistoricCurrencyAndAmount8**](OBActiveOrHistoricCurrencyAndAmount8.md) |  | 
**credit_debit_indicator** | [**OBCreditDebitCode0**](OBCreditDebitCode0.md) |  | 
**type** | **str** | Amount type, in a coded form. | 

## Example

```python
from openapi_client.models.ob_statement2_statement_amount_inner import OBStatement2StatementAmountInner

# TODO update the JSON string below
json = "{}"
# create an instance of OBStatement2StatementAmountInner from a JSON string
ob_statement2_statement_amount_inner_instance = OBStatement2StatementAmountInner.from_json(json)
# print the JSON string representation of the object
print(OBStatement2StatementAmountInner.to_json())

# convert the object into a dict
ob_statement2_statement_amount_inner_dict = ob_statement2_statement_amount_inner_instance.to_dict()
# create an instance of OBStatement2StatementAmountInner from a dict
ob_statement2_statement_amount_inner_from_dict = OBStatement2StatementAmountInner.from_dict(ob_statement2_statement_amount_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


