# OBStandingOrder5



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner. | 
**creditor_account** | [**OBCashAccount5**](OBCashAccount5.md) |  | [optional] 
**final_payment_amount** | [**OBActiveOrHistoricCurrencyAndAmount**](OBActiveOrHistoricCurrencyAndAmount.md) |  | [optional] 
**final_payment_date_time** | **datetime** | The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone.An example is below:  2017-04-05T10:43:07+00:00 | [optional] 
**first_payment_amount** | [**OBActiveOrHistoricCurrencyAndAmount**](OBActiveOrHistoricCurrencyAndAmount.md) |  | [optional] 
**first_payment_date_time** | **datetime** | The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone.An example is below:  2017-04-05T10:43:07+00:00 | [optional] 
**frequency** | **str** | Individual Definitions:  IntrvlMnthDay - An interval specified in months(between 01, 02, 03, 04, 06, 12, 24), specifying the day within the month(01 to 31)  Full Regular Expression:  ^(IntrvlMnthDay:(0[1,2,3,4,6]|12|24):(0[1-9]|[12] [0-9]|3[01]))$ | 
**last_payment_amount** | [**OBActiveOrHistoricCurrencyAndAmount**](OBActiveOrHistoricCurrencyAndAmount.md) |  | [optional] 
**last_payment_date_time** | **datetime** | The date on which the last (most recent) payment for a Standing Order schedule was made.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone.An example is below:  2017-04-05T10:43:07+00:00 | [optional] 
**next_payment_amount** | [**OBActiveOrHistoricCurrencyAndAmount**](OBActiveOrHistoricCurrencyAndAmount.md) |  | [optional] 
**next_payment_date_time** | **datetime** | The date on which the next payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone.An example is below:  2017-04-05T10:43:07+00:00 | [optional] 
**reference** | **str** | Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.  Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.  If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor&#39;s reference or payment remittance identification should be quoted in the end-to-end transaction identification. | [optional] 
**standing_order_id** | **str** | A unique and immutable identifier used to identify the standing order resource. This identifier has no meaning to the account owner. | [optional] 
**standing_order_status_code** | [**OBExternalStandingOrderStatus1Code**](OBExternalStandingOrderStatus1Code.md) |  | [optional] 

## Example

```python
from openapi_client.models.ob_standing_order5 import OBStandingOrder5

# TODO update the JSON string below
json = "{}"
# create an instance of OBStandingOrder5 from a JSON string
ob_standing_order5_instance = OBStandingOrder5.from_json(json)
# print the JSON string representation of the object
print(OBStandingOrder5.to_json())

# convert the object into a dict
ob_standing_order5_dict = ob_standing_order5_instance.to_dict()
# create an instance of OBStandingOrder5 from a dict
ob_standing_order5_from_dict = OBStandingOrder5.from_dict(ob_standing_order5_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


