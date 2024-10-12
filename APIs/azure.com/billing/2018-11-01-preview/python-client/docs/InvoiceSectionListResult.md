# InvoiceSectionListResult

Result of listing invoice sections.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[InvoiceSection]**](InvoiceSection.md) | The list of invoice sections. | [optional] [readonly] 

## Example

```python
from openapi_client.models.invoice_section_list_result import InvoiceSectionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of InvoiceSectionListResult from a JSON string
invoice_section_list_result_instance = InvoiceSectionListResult.from_json(json)
# print the JSON string representation of the object
print(InvoiceSectionListResult.to_json())

# convert the object into a dict
invoice_section_list_result_dict = invoice_section_list_result_instance.to_dict()
# create an instance of InvoiceSectionListResult from a dict
invoice_section_list_result_from_dict = InvoiceSectionListResult.from_dict(invoice_section_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


