# OBScheduledPayment3Basic


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner. | 
**debtor_reference** | **str** | A reference value provided by the PSU to the PISP while setting up the scheduled payment. | [optional] 
**instructed_amount** | [**OBActiveOrHistoricCurrencyAndAmount1**](OBActiveOrHistoricCurrencyAndAmount1.md) |  | 
**reference** | **str** | Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction. Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money. If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor&#39;s reference or payment remittance identification should be quoted in the end-to-end transaction identification. | [optional] 
**scheduled_payment_date_time** | **datetime** | The date on which the scheduled payment will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 | 
**scheduled_payment_id** | **str** | A unique and immutable identifier used to identify the scheduled payment resource. This identifier has no meaning to the account owner. | [optional] 
**scheduled_type** | [**OBExternalScheduleType1Code**](OBExternalScheduleType1Code.md) |  | 

## Example

```python
from openapi_client.models.ob_scheduled_payment3_basic import OBScheduledPayment3Basic

# TODO update the JSON string below
json = "{}"
# create an instance of OBScheduledPayment3Basic from a JSON string
ob_scheduled_payment3_basic_instance = OBScheduledPayment3Basic.from_json(json)
# print the JSON string representation of the object
print(OBScheduledPayment3Basic.to_json())

# convert the object into a dict
ob_scheduled_payment3_basic_dict = ob_scheduled_payment3_basic_instance.to_dict()
# create an instance of OBScheduledPayment3Basic from a dict
ob_scheduled_payment3_basic_from_dict = OBScheduledPayment3Basic.from_dict(ob_scheduled_payment3_basic_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


