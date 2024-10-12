# InvoiceItemsFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of Invoice Items to search for | [optional] 

## Example

```python
from openapi_client.models.invoice_items_filter import InvoiceItemsFilter

# TODO update the JSON string below
json = "{}"
# create an instance of InvoiceItemsFilter from a JSON string
invoice_items_filter_instance = InvoiceItemsFilter.from_json(json)
# print the JSON string representation of the object
print(InvoiceItemsFilter.to_json())

# convert the object into a dict
invoice_items_filter_dict = invoice_items_filter_instance.to_dict()
# create an instance of InvoiceItemsFilter from a dict
invoice_items_filter_from_dict = InvoiceItemsFilter.from_dict(invoice_items_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


