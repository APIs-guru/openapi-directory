# InvoiceResponseCondition

Specifies an error in the received invoice.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_code** | **str** | The code of the field with the error. Find the element here: https://docs.peppol.eu/poacc/billing/3.0/syntax/ubl-invoice/ and then get the field&#39;s Business term. | 
**field_value** | **str** | The (error) value of the field. | 

## Example

```python
from openapi_client.models.invoice_response_condition import InvoiceResponseCondition

# TODO update the JSON string below
json = "{}"
# create an instance of InvoiceResponseCondition from a JSON string
invoice_response_condition_instance = InvoiceResponseCondition.from_json(json)
# print the JSON string representation of the object
print(InvoiceResponseCondition.to_json())

# convert the object into a dict
invoice_response_condition_dict = invoice_response_condition_instance.to_dict()
# create an instance of InvoiceResponseCondition from a dict
invoice_response_condition_from_dict = InvoiceResponseCondition.from_dict(invoice_response_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


