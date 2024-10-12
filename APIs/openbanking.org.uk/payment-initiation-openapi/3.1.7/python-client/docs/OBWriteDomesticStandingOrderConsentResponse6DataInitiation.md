# OBWriteDomesticStandingOrderConsentResponse6DataInitiation

The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a domestic standing order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creditor_account** | [**OBWriteDomesticStandingOrder3DataInitiationCreditorAccount**](OBWriteDomesticStandingOrder3DataInitiationCreditorAccount.md) |  | 
**debtor_account** | [**OBWriteDomestic2DataInitiationDebtorAccount**](OBWriteDomestic2DataInitiationDebtorAccount.md) |  | [optional] 
**final_payment_amount** | [**OBWriteDomesticStandingOrder3DataInitiationFinalPaymentAmount**](OBWriteDomesticStandingOrder3DataInitiationFinalPaymentAmount.md) |  | [optional] 
**final_payment_date_time** | **datetime** | The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 | [optional] 
**first_payment_amount** | [**OBWriteDomesticStandingOrder3DataInitiationFirstPaymentAmount**](OBWriteDomesticStandingOrder3DataInitiationFirstPaymentAmount.md) |  | 
**first_payment_date_time** | **datetime** | The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 | 
**frequency** | **str** | Individual Definitions: EvryDay - Every day EvryWorkgDay - Every working day IntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07) WkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07) IntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-5 to -1, 1 to 31) QtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED).  ENGLISH &#x3D; Paid on the 25th March, 24th June, 29th September and 25th December.  SCOTTISH &#x3D; Paid on the 2nd February, 15th May, 1st August and 11th November. RECEIVED &#x3D; Paid on the 20th March, 19th June, 24th September and 20th December.  Individual Patterns: EvryDay (ScheduleCode) EvryWorkgDay (ScheduleCode) IntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek) WkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek) IntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth) QtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay The regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here: EvryDay EvryWorkgDay IntrvlWkDay:0[1-9]:0[1-7] WkInMnthDay:0[1-5]:0[1-7] IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]) QtrDay:(ENGLISH|SCOTTISH|RECEIVED) Full Regular Expression: ^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$ | 
**number_of_payments** | **str** | Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date. | [optional] 
**recurring_payment_amount** | [**OBWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmount**](OBWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmount.md) |  | [optional] 
**recurring_payment_date_time** | **datetime** | The date on which the first recurring payment for a Standing Order schedule will be made.  Usage: This must be populated only if the first recurring date is different to the first payment date.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 | [optional] 
**reference** | **str** | Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction. Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money. If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor&#39;s reference or payment remittance identification should be quoted in the end-to-end transaction identification. | [optional] 
**supplementary_data** | **Dict[str, object]** | Additional information that can not be captured in the structured fields and/or any other specific block. | [optional] 

## Example

```python
from openapi_client.models.ob_write_domestic_standing_order_consent_response6_data_initiation import OBWriteDomesticStandingOrderConsentResponse6DataInitiation

# TODO update the JSON string below
json = "{}"
# create an instance of OBWriteDomesticStandingOrderConsentResponse6DataInitiation from a JSON string
ob_write_domestic_standing_order_consent_response6_data_initiation_instance = OBWriteDomesticStandingOrderConsentResponse6DataInitiation.from_json(json)
# print the JSON string representation of the object
print(OBWriteDomesticStandingOrderConsentResponse6DataInitiation.to_json())

# convert the object into a dict
ob_write_domestic_standing_order_consent_response6_data_initiation_dict = ob_write_domestic_standing_order_consent_response6_data_initiation_instance.to_dict()
# create an instance of OBWriteDomesticStandingOrderConsentResponse6DataInitiation from a dict
ob_write_domestic_standing_order_consent_response6_data_initiation_from_dict = OBWriteDomesticStandingOrderConsentResponse6DataInitiation.from_dict(ob_write_domestic_standing_order_consent_response6_data_initiation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


