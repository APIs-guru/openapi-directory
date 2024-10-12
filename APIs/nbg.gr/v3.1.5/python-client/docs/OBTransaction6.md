# OBTransaction6

Provides further details on an entry in the report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner. | 
**amount** | [**OBActiveOrHistoricCurrencyAndAmount**](OBActiveOrHistoricCurrencyAndAmount.md) |  | 
**balance** | [**OBTransactionCashBalance**](OBTransactionCashBalance.md) |  | [optional] 
**booking_date_time** | **datetime** | Date and time when a transaction entry is posted to an account on the account servicer&#39;s books.  Usage: Booking date is the expected booking date, unless the status is booked, in which case it is the actual booking date.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone.An example is below:  2017-04-05T10:43:07+00:00 | 
**credit_debit_indicator** | [**OBCreditDebitCode**](OBCreditDebitCode.md) |  | 
**creditor_account** | [**OBCashAccount6**](OBCashAccount6.md) |  | [optional] 
**debtor_account** | [**OBCashAccount6**](OBCashAccount6.md) |  | [optional] 
**proprietary_bank_transaction_code** | [**ProprietaryBankTransactionCodeStructure1**](ProprietaryBankTransactionCodeStructure1.md) |  | [optional] 
**status** | [**OBEntryStatus1Code**](OBEntryStatus1Code.md) |  | 
**transaction_information** | **str** | Further details of the transaction.  This is the transaction narrative, which is unstructured text. | [optional] 
**transaction_reference** | **str** | Unique reference for the transaction. This reference is optionally populated, and may as an example be the FPID in the Faster Payments context. | [optional] 
**value_date_time** | **datetime** | Date and time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry.  Usage: If transaction entry status is pending and value date is present, then the value date refers to an expected/requested value date.  For transaction entries subject to availability/float and for which availability information is provided, the value date must not be used.In this case the availability component identifies the number of availability days.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone.An example is below:  2017-04-05T10:43:07+00:00 | [optional] 

## Example

```python
from openapi_client.models.ob_transaction6 import OBTransaction6

# TODO update the JSON string below
json = "{}"
# create an instance of OBTransaction6 from a JSON string
ob_transaction6_instance = OBTransaction6.from_json(json)
# print the JSON string representation of the object
print(OBTransaction6.to_json())

# convert the object into a dict
ob_transaction6_dict = ob_transaction6_instance.to_dict()
# create an instance of OBTransaction6 from a dict
ob_transaction6_from_dict = OBTransaction6.from_dict(ob_transaction6_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


