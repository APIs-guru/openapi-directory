# OBTransaction6Detail

Provides further details on an entry in the report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner. | 
**address_line** | **str** | Information that locates and identifies a specific address for a transaction entry, that is presented in free format text. | [optional] 
**amount** | [**OBActiveOrHistoricCurrencyAndAmount9**](OBActiveOrHistoricCurrencyAndAmount9.md) |  | 
**balance** | [**OBTransactionCashBalance**](OBTransactionCashBalance.md) |  | [optional] 
**bank_transaction_code** | [**OBBankTransactionCodeStructure1**](OBBankTransactionCodeStructure1.md) |  | [optional] 
**booking_date_time** | **datetime** | Date and time when a transaction entry is posted to an account on the account servicer&#39;s books. Usage: Booking date is the expected booking date, unless the status is booked, in which case it is the actual booking date.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 | 
**card_instrument** | [**OBTransactionCardInstrument1**](OBTransactionCardInstrument1.md) |  | [optional] 
**charge_amount** | [**OBActiveOrHistoricCurrencyAndAmount10**](OBActiveOrHistoricCurrencyAndAmount10.md) |  | [optional] 
**credit_debit_indicator** | [**OBCreditDebitCode1**](OBCreditDebitCode1.md) |  | 
**creditor_account** | [**OBCashAccount60**](OBCashAccount60.md) |  | [optional] 
**creditor_agent** | [**OBBranchAndFinancialInstitutionIdentification61**](OBBranchAndFinancialInstitutionIdentification61.md) |  | [optional] 
**currency_exchange** | [**OBCurrencyExchange5**](OBCurrencyExchange5.md) |  | [optional] 
**debtor_account** | [**OBCashAccount61**](OBCashAccount61.md) |  | [optional] 
**debtor_agent** | [**OBBranchAndFinancialInstitutionIdentification62**](OBBranchAndFinancialInstitutionIdentification62.md) |  | [optional] 
**merchant_details** | [**OBMerchantDetails1**](OBMerchantDetails1.md) |  | [optional] 
**proprietary_bank_transaction_code** | [**ProprietaryBankTransactionCodeStructure1**](ProprietaryBankTransactionCodeStructure1.md) |  | [optional] 
**statement_reference** | **List[str]** |  | [optional] 
**status** | [**OBEntryStatus1Code**](OBEntryStatus1Code.md) |  | 
**supplementary_data** | **Dict[str, object]** | Additional information that can not be captured in the structured fields and/or any other specific block. | [optional] 
**transaction_id** | **str** | Unique identifier for the transaction within an servicing institution. This identifier is both unique and immutable. | [optional] 
**transaction_information** | **str** | Further details of the transaction.  This is the transaction narrative, which is unstructured text. | [optional] 
**transaction_mutability** | [**OBTransactionMutability1Code**](OBTransactionMutability1Code.md) |  | [optional] 
**transaction_reference** | **str** | Unique reference for the transaction. This reference is optionally populated, and may as an example be the FPID in the Faster Payments context. | [optional] 
**value_date_time** | **datetime** | Date and time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry. Usage: If transaction entry status is pending and value date is present, then the value date refers to an expected/requested value date. For transaction entries subject to availability/float and for which availability information is provided, the value date must not be used. In this case the availability component identifies the number of availability days.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 | [optional] 

## Example

```python
from openapi_client.models.ob_transaction6_detail import OBTransaction6Detail

# TODO update the JSON string below
json = "{}"
# create an instance of OBTransaction6Detail from a JSON string
ob_transaction6_detail_instance = OBTransaction6Detail.from_json(json)
# print the JSON string representation of the object
print(OBTransaction6Detail.to_json())

# convert the object into a dict
ob_transaction6_detail_dict = ob_transaction6_detail_instance.to_dict()
# create an instance of OBTransaction6Detail from a dict
ob_transaction6_detail_from_dict = OBTransaction6Detail.from_dict(ob_transaction6_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


