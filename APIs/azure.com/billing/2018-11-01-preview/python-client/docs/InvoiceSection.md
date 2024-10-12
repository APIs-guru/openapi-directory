# InvoiceSection

An InvoiceSection resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**InvoiceSectionProperties**](InvoiceSectionProperties.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.invoice_section import InvoiceSection

# TODO update the JSON string below
json = "{}"
# create an instance of InvoiceSection from a JSON string
invoice_section_instance = InvoiceSection.from_json(json)
# print the JSON string representation of the object
print(InvoiceSection.to_json())

# convert the object into a dict
invoice_section_dict = invoice_section_instance.to_dict()
# create an instance of InvoiceSection from a dict
invoice_section_from_dict = InvoiceSection.from_dict(invoice_section_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


