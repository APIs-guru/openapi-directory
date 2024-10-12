# PurchaseInvoiceTaxElement

The tax element.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | The tax amount. | [optional] 
**category** | **str** | The tax category. | [optional] 
**category_code** | **str** | Deprecated. The tax category code. | [optional] 
**country** | **str** | The tax country. | [optional] 
**percentage** | **float** | The tax percentage. | [optional] 
**type** | **str** | The tax type. | [optional] 

## Example

```python
from openapi_client.models.purchase_invoice_tax_element import PurchaseInvoiceTaxElement

# TODO update the JSON string below
json = "{}"
# create an instance of PurchaseInvoiceTaxElement from a JSON string
purchase_invoice_tax_element_instance = PurchaseInvoiceTaxElement.from_json(json)
# print the JSON string representation of the object
print(PurchaseInvoiceTaxElement.to_json())

# convert the object into a dict
purchase_invoice_tax_element_dict = purchase_invoice_tax_element_instance.to_dict()
# create an instance of PurchaseInvoiceTaxElement from a dict
purchase_invoice_tax_element_from_dict = PurchaseInvoiceTaxElement.from_dict(purchase_invoice_tax_element_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


