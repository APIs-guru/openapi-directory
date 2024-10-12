# OBStatement2StatementFeeInner

Set of elements used to provide details of a fee for the statement resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**OBActiveOrHistoricCurrencyAndAmount6**](OBActiveOrHistoricCurrencyAndAmount6.md) |  | 
**credit_debit_indicator** | [**OBCreditDebitCode0**](OBCreditDebitCode0.md) |  | 
**description** | **str** | Description that may be available for the statement fee. | [optional] 
**frequency** | **str** | How frequently the fee is applied to the Account. | [optional] 
**rate** | **float** | Rate charged for Statement Fee (where it is charged in terms of a rate rather than an amount) | [optional] 
**rate_type** | **str** | Description that may be available for the statement fee rate type. | [optional] 
**type** | **str** | Fee type, in a coded form. | 

## Example

```python
from openapi_client.models.ob_statement2_statement_fee_inner import OBStatement2StatementFeeInner

# TODO update the JSON string below
json = "{}"
# create an instance of OBStatement2StatementFeeInner from a JSON string
ob_statement2_statement_fee_inner_instance = OBStatement2StatementFeeInner.from_json(json)
# print the JSON string representation of the object
print(OBStatement2StatementFeeInner.to_json())

# convert the object into a dict
ob_statement2_statement_fee_inner_dict = ob_statement2_statement_fee_inner_instance.to_dict()
# create an instance of OBStatement2StatementFeeInner from a dict
ob_statement2_statement_fee_inner_from_dict = OBStatement2StatementFeeInner.from_dict(ob_statement2_statement_fee_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


