# InvoiceablePartial

Invoiceable

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_account** | **str** | An account requires billing_information to be used as a &#x60;billing_account&#x60;. | [optional] 
**contract_ref** | **str** | A reference to a contract. If no specific contract is used, a default MAY be chosen by the implementer.  | [optional] 
**purchase_order** | **str** | Purchase Order ID which will be displayed on the invoice.  | [optional] [default to '']

## Example

```python
from openapi_client.models.invoiceable_partial import InvoiceablePartial

# TODO update the JSON string below
json = "{}"
# create an instance of InvoiceablePartial from a JSON string
invoiceable_partial_instance = InvoiceablePartial.from_json(json)
# print the JSON string representation of the object
print(InvoiceablePartial.to_json())

# convert the object into a dict
invoiceable_partial_dict = invoiceable_partial_instance.to_dict()
# create an instance of InvoiceablePartial from a dict
invoiceable_partial_from_dict = InvoiceablePartial.from_dict(invoiceable_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


