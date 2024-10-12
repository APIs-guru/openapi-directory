# InvoiceProperties

The properties of the invoice.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_period_ids** | **List[str]** | Array of billing period ids that the invoice is attributed to. | [optional] [readonly] 
**download_url** | [**DownloadUrl**](DownloadUrl.md) |  | [optional] 
**invoice_period_end_date** | **date** | The end of the date range covered by the invoice. | [optional] [readonly] 
**invoice_period_start_date** | **date** | The start of the date range covered by the invoice. | [optional] [readonly] 

## Example

```python
from openapi_client.models.invoice_properties import InvoiceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of InvoiceProperties from a JSON string
invoice_properties_instance = InvoiceProperties.from_json(json)
# print the JSON string representation of the object
print(InvoiceProperties.to_json())

# convert the object into a dict
invoice_properties_dict = invoice_properties_instance.to_dict()
# create an instance of InvoiceProperties from a dict
invoice_properties_from_dict = InvoiceProperties.from_dict(invoice_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


