# Invoice

A single invoice.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**budget_invoice_grouping_id** | **str** | The budget grouping ID for this invoice. This field will only be set if the invoice level of the corresponding billing profile was set to \&quot;Budget invoice grouping ID\&quot;. | [optional] 
**budget_summaries** | [**List[BudgetSummary]**](BudgetSummary.md) | The list of summarized information for each budget associated with this invoice. This field will only be set if the invoice detail level of the corresponding billing profile was set to \&quot;Budget level PO\&quot;. | [optional] 
**corrected_invoice_id** | **str** | The ID of the original invoice being adjusted by this invoice, if applicable. May appear on the invoice PDF as &#x60;Reference invoice number&#x60;. If replaced_invoice_ids is set, this field will be empty. | [optional] 
**currency_code** | **str** | The currency used in the invoice in ISO 4217 format. | [optional] 
**display_name** | **str** | The display name of the invoice. | [optional] 
**due_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**invoice_id** | **str** | The unique ID of the invoice. | [optional] 
**invoice_type** | **str** | The type of invoice document. | [optional] 
**issue_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**name** | **str** | The resource name of the invoice. | [optional] 
**non_budget_micros** | **str** | The total amount of costs or adjustments not tied to a particular budget, in micros of the invoice&#39;s currency. For example, if currency_code is &#x60;USD&#x60;, then 1000000 represents one US dollar. | [optional] 
**payments_account_id** | **str** | The ID of the payments account the invoice belongs to. Appears on the invoice PDF as &#x60;Billing Account Number&#x60;. | [optional] 
**payments_profile_id** | **str** | The ID of the payments profile the invoice belongs to. Appears on the invoice PDF as &#x60;Billing ID&#x60;. | [optional] 
**pdf_url** | **str** | The URL to download a PDF copy of the invoice. This URL is user specific and requires a valid OAuth 2.0 access token to access. The access token must be provided in an &#x60;Authorization: Bearer&#x60; HTTP header and be authorized for one of the following scopes: * &#x60;https://www.googleapis.com/auth/display-video-mediaplanning&#x60; * &#x60;https://www.googleapis.com/auth/display-video&#x60; The URL will be valid for 7 days after retrieval of this invoice object or until this invoice is retrieved again. | [optional] 
**purchase_order_number** | **str** | Purchase order number associated with the invoice. | [optional] 
**replaced_invoice_ids** | **List[str]** | The ID(s) of any originally issued invoice that is being cancelled by this invoice, if applicable. Multiple invoices may be listed if those invoices are being consolidated into a single invoice. May appear on invoice PDF as &#x60;Replaced invoice numbers&#x60;. If corrected_invoice_id is set, this field will be empty. | [optional] 
**service_date_range** | [**DateRange**](DateRange.md) |  | [optional] 
**subtotal_amount_micros** | **str** | The pre-tax subtotal amount, in micros of the invoice&#39;s currency. For example, if currency_code is &#x60;USD&#x60;, then 1000000 represents one US dollar. | [optional] 
**total_amount_micros** | **str** | The invoice total amount, in micros of the invoice&#39;s currency. For example, if currency_code is &#x60;USD&#x60;, then 1000000 represents one US dollar. | [optional] 
**total_tax_amount_micros** | **str** | The sum of all taxes in invoice, in micros of the invoice&#39;s currency. For example, if currency_code is &#x60;USD&#x60;, then 1000000 represents one US dollar. | [optional] 

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


