# InvoiceListResult

Result of listing invoices.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[Invoice]**](Invoice.md) | The list of invoices. | [optional] [readonly] 

## Example

```python
from openapi_client.models.invoice_list_result import InvoiceListResult

# TODO update the JSON string below
json = "{}"
# create an instance of InvoiceListResult from a JSON string
invoice_list_result_instance = InvoiceListResult.from_json(json)
# print the JSON string representation of the object
print(InvoiceListResult.to_json())

# convert the object into a dict
invoice_list_result_dict = invoice_list_result_instance.to_dict()
# create an instance of InvoiceListResult from a dict
invoice_list_result_from_dict = InvoiceListResult.from_dict(invoice_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


