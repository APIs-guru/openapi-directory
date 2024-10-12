# InvoiceSectionProperties

The properties of an InvoiceSection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The name of the InvoiceSection. | [optional] 

## Example

```python
from openapi_client.models.invoice_section_properties import InvoiceSectionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of InvoiceSectionProperties from a JSON string
invoice_section_properties_instance = InvoiceSectionProperties.from_json(json)
# print the JSON string representation of the object
print(InvoiceSectionProperties.to_json())

# convert the object into a dict
invoice_section_properties_dict = invoice_section_properties_instance.to_dict()
# create an instance of InvoiceSectionProperties from a dict
invoice_section_properties_from_dict = InvoiceSectionProperties.from_dict(invoice_section_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


