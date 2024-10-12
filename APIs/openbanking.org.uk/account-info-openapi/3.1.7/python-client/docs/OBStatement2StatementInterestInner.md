# OBStatement2StatementInterestInner

Set of elements used to provide details of a generic interest amount related to the statement resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**OBActiveOrHistoricCurrencyAndAmount7**](OBActiveOrHistoricCurrencyAndAmount7.md) |  | 
**credit_debit_indicator** | [**OBCreditDebitCode0**](OBCreditDebitCode0.md) |  | 
**description** | **str** | Description that may be available for the statement interest. | [optional] 
**frequency** | **str** | Specifies the statement fee type requested | [optional] 
**rate** | **float** | field representing a percentage (e.g. 0.05 represents 5% and 0.9525 represents 95.25%). Note the number of decimal places may vary. | [optional] 
**rate_type** | **str** | Description that may be available for the statement Interest rate type. | [optional] 
**type** | **str** | Interest amount type, in a coded form. | 

## Example

```python
from openapi_client.models.ob_statement2_statement_interest_inner import OBStatement2StatementInterestInner

# TODO update the JSON string below
json = "{}"
# create an instance of OBStatement2StatementInterestInner from a JSON string
ob_statement2_statement_interest_inner_instance = OBStatement2StatementInterestInner.from_json(json)
# print the JSON string representation of the object
print(OBStatement2StatementInterestInner.to_json())

# convert the object into a dict
ob_statement2_statement_interest_inner_dict = ob_statement2_statement_interest_inner_instance.to_dict()
# create an instance of OBStatement2StatementInterestInner from a dict
ob_statement2_statement_interest_inner_from_dict = OBStatement2StatementInterestInner.from_dict(ob_statement2_statement_interest_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


