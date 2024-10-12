# OBCashBalance1

Set of elements used to define the balance details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner. | 
**amount** | [**OBActiveOrHistoricCurrencyAndAmount**](OBActiveOrHistoricCurrencyAndAmount.md) |  | 
**credit_debit_indicator** | [**OBCreditDebitCode**](OBCreditDebitCode.md) |  | 
**credit_line** | [**List[OBCreditLine1]**](OBCreditLine1.md) | Set of elements used to provide details on the credit line. | [optional] 
**date_time** | **datetime** | Indicates the date (and time) of the balance.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 | 
**type** | [**OBBalanceType1Code**](OBBalanceType1Code.md) |  | 

## Example

```python
from openapi_client.models.ob_cash_balance1 import OBCashBalance1

# TODO update the JSON string below
json = "{}"
# create an instance of OBCashBalance1 from a JSON string
ob_cash_balance1_instance = OBCashBalance1.from_json(json)
# print the JSON string representation of the object
print(OBCashBalance1.to_json())

# convert the object into a dict
ob_cash_balance1_dict = ob_cash_balance1_instance.to_dict()
# create an instance of OBCashBalance1 from a dict
ob_cash_balance1_from_dict = OBCashBalance1.from_dict(ob_cash_balance1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


