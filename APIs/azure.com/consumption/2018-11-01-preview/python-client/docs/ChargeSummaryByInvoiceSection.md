# ChargeSummaryByInvoiceSection

A charge summary resource by invoiceSection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ChargeSummaryProperties**](ChargeSummaryProperties.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.charge_summary_by_invoice_section import ChargeSummaryByInvoiceSection

# TODO update the JSON string below
json = "{}"
# create an instance of ChargeSummaryByInvoiceSection from a JSON string
charge_summary_by_invoice_section_instance = ChargeSummaryByInvoiceSection.from_json(json)
# print the JSON string representation of the object
print(ChargeSummaryByInvoiceSection.to_json())

# convert the object into a dict
charge_summary_by_invoice_section_dict = charge_summary_by_invoice_section_instance.to_dict()
# create an instance of ChargeSummaryByInvoiceSection from a dict
charge_summary_by_invoice_section_from_dict = ChargeSummaryByInvoiceSection.from_dict(charge_summary_by_invoice_section_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


