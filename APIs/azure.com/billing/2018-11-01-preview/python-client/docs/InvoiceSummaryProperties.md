# InvoiceSummaryProperties

The properties of the invoice.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount_due** | [**Amount**](Amount.md) |  | [optional] 
**billed_amount** | [**Amount**](Amount.md) |  | [optional] 
**billing_profile_id** | **str** | The billing profile id this invoice belongs to. | [optional] [readonly] 
**billing_profile_name** | **str** | The profile name this invoice belongs to. | [optional] [readonly] 
**document_urls** | [**List[DownloadProperties]**](DownloadProperties.md) | List of document urls available to download including invoice and tax documents. | [optional] [readonly] 
**due_date** | **datetime** | The due date for invoice. | [optional] [readonly] 
**invoice_date** | **datetime** | The date when invoice was created. | [optional] [readonly] 
**invoice_period_end_date** | **datetime** | The end date of the billing period. | [optional] [readonly] 
**invoice_period_start_date** | **datetime** | The start date of the billing period. | [optional] [readonly] 
**payments** | [**List[PaymentProperties]**](PaymentProperties.md) | List of payments. | [optional] [readonly] 
**purchase_order_number** | **str** | The purchase identifier for the invoice. | [optional] [readonly] 
**status** | **str** | Invoice status. | [optional] [readonly] 

## Example

```python
from openapi_client.models.invoice_summary_properties import InvoiceSummaryProperties

# TODO update the JSON string below
json = "{}"
# create an instance of InvoiceSummaryProperties from a JSON string
invoice_summary_properties_instance = InvoiceSummaryProperties.from_json(json)
# print the JSON string representation of the object
print(InvoiceSummaryProperties.to_json())

# convert the object into a dict
invoice_summary_properties_dict = invoice_summary_properties_instance.to_dict()
# create an instance of InvoiceSummaryProperties from a dict
invoice_summary_properties_from_dict = InvoiceSummaryProperties.from_dict(invoice_summary_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


