# InvoiceSectionCreationRequest

The properties of an InvoiceSection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_profile_id** | **str** | The billing profile id. | [optional] 
**display_name** | **str** | The name of the InvoiceSection. | [optional] 

## Example

```python
from openapi_client.models.invoice_section_creation_request import InvoiceSectionCreationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of InvoiceSectionCreationRequest from a JSON string
invoice_section_creation_request_instance = InvoiceSectionCreationRequest.from_json(json)
# print the JSON string representation of the object
print(InvoiceSectionCreationRequest.to_json())

# convert the object into a dict
invoice_section_creation_request_dict = invoice_section_creation_request_instance.to_dict()
# create an instance of InvoiceSectionCreationRequest from a dict
invoice_section_creation_request_from_dict = InvoiceSectionCreationRequest.from_dict(invoice_section_creation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


