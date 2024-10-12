# ChargesListByInvoiceSection

Result of listing charge summary by invoiceSection. It contains a list of available change summaries in reverse chronological order by billing period.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ChargeSummaryByInvoiceSection]**](ChargeSummaryByInvoiceSection.md) | The list of charge summary by invoiceSection. | [optional] [readonly] 

## Example

```python
from openapi_client.models.charges_list_by_invoice_section import ChargesListByInvoiceSection

# TODO update the JSON string below
json = "{}"
# create an instance of ChargesListByInvoiceSection from a JSON string
charges_list_by_invoice_section_instance = ChargesListByInvoiceSection.from_json(json)
# print the JSON string representation of the object
print(ChargesListByInvoiceSection.to_json())

# convert the object into a dict
charges_list_by_invoice_section_dict = charges_list_by_invoice_section_instance.to_dict()
# create an instance of ChargesListByInvoiceSection from a dict
charges_list_by_invoice_section_from_dict = ChargesListByInvoiceSection.from_dict(charges_list_by_invoice_section_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


