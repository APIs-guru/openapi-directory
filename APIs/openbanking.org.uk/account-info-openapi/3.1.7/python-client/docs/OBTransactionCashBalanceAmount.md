# OBTransactionCashBalanceAmount

Amount of money of the cash balance after a transaction entry is applied to the account..

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **str** | A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217. | 
**currency** | **str** | A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 \&quot;Codes for the representation of currencies and funds\&quot;. | 

## Example

```python
from openapi_client.models.ob_transaction_cash_balance_amount import OBTransactionCashBalanceAmount

# TODO update the JSON string below
json = "{}"
# create an instance of OBTransactionCashBalanceAmount from a JSON string
ob_transaction_cash_balance_amount_instance = OBTransactionCashBalanceAmount.from_json(json)
# print the JSON string representation of the object
print(OBTransactionCashBalanceAmount.to_json())

# convert the object into a dict
ob_transaction_cash_balance_amount_dict = ob_transaction_cash_balance_amount_instance.to_dict()
# create an instance of OBTransactionCashBalanceAmount from a dict
ob_transaction_cash_balance_amount_from_dict = OBTransactionCashBalanceAmount.from_dict(ob_transaction_cash_balance_amount_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


