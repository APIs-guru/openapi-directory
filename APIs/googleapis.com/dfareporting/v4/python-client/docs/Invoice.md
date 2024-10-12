# Invoice

Contains information about a single invoice

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaign_summaries** | [**List[CampaignSummary]**](CampaignSummary.md) | The list of summarized campaign information associated with this invoice. | [optional] 
**corrected_invoice_id** | **str** | The originally issued invoice that is being adjusted by this invoice, if applicable. May appear on invoice PDF as *Reference invoice number*. | [optional] 
**currency_code** | **str** | Invoice currency code in ISO 4217 format. | [optional] 
**due_date** | **str** | The invoice due date. | [optional] 
**id** | **str** | ID of this invoice. | [optional] 
**invoice_type** | **str** | The type of invoice document. | [optional] 
**issue_date** | **str** | The date when the invoice was issued. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#invoice\&quot;. | [optional] 
**payments_account_id** | **str** | The ID of the payments account the invoice belongs to. Appears on the invoice PDF as *Billing Account Number*. | [optional] 
**payments_profile_id** | **str** | The ID of the payments profile the invoice belongs to. Appears on the invoice PDF as *Billing ID*. | [optional] 
**pdf_url** | **str** | The URL to download a PDF copy of the invoice. Note that this URL is user specific and requires a valid OAuth 2.0 access token to access. The access token must be provided in an *Authorization: Bearer* HTTP header. The URL will only be usable for 7 days from when the api is called. | [optional] 
**purchase_order_number** | **str** | Purchase order number associated with the invoice. | [optional] 
**replaced_invoice_ids** | **List[str]** | The originally issued invoice(s) that is being cancelled by this invoice, if applicable. May appear on invoice PDF as *Replaced invoice numbers*. Note: There may be multiple replaced invoices due to consolidation of multiple invoices into a single invoice. | [optional] 
**service_end_date** | **str** | The invoice service end date. | [optional] 
**service_start_date** | **str** | The invoice service start date. | [optional] 
**subtotal_amount_micros** | **str** | The pre-tax subtotal amount, in micros of the invoice&#39;s currency. | [optional] 
**total_amount_micros** | **str** | The invoice total amount, in micros of the invoice&#39;s currency. | [optional] 
**total_tax_amount_micros** | **str** | The sum of all taxes in invoice, in micros of the invoice&#39;s currency. | [optional] 

## Example

```python
from openapi_client.models.invoice import Invoice

# TODO update the JSON string below
json = "{}"
# create an instance of Invoice from a JSON string
invoice_instance = Invoice.from_json(json)
# print the JSON string representation of the object
print(Invoice.to_json())

# convert the object into a dict
invoice_dict = invoice_instance.to_dict()
# create an instance of Invoice from a dict
invoice_from_dict = Invoice.from_dict(invoice_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


