# OBTransactionCashBalance

Set of elements used to define the balance as a numerical representation of the net increases and decreases in an account after a transaction entry is applied to the account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**OBActiveOrHistoricCurrencyAndAmount**](OBActiveOrHistoricCurrencyAndAmount.md) |  | 
**credit_debit_indicator** | [**OBCreditDebitCode**](OBCreditDebitCode.md) |  | 
**type** | [**OBBalanceType1Code**](OBBalanceType1Code.md) |  | 

## Example

```python
from openapi_client.models.ob_transaction_cash_balance import OBTransactionCashBalance

# TODO update the JSON string below
json = "{}"
# create an instance of OBTransactionCashBalance from a JSON string
ob_transaction_cash_balance_instance = OBTransactionCashBalance.from_json(json)
# print the JSON string representation of the object
print(OBTransactionCashBalance.to_json())

# convert the object into a dict
ob_transaction_cash_balance_dict = ob_transaction_cash_balance_instance.to_dict()
# create an instance of OBTransactionCashBalance from a dict
ob_transaction_cash_balance_from_dict = OBTransactionCashBalance.from_dict(ob_transaction_cash_balance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


