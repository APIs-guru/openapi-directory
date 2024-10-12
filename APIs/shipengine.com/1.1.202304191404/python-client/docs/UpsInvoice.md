# UpsInvoice

UPS invoice

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**control_id** | **str** | A string that uniquely identifies the control | [optional] 
**invoice_amount** | **float** |  | [optional] 
**invoice_currency_code** | **str** |  | [optional] 
**invoice_date** | **datetime** | invoice date | [optional] 
**invoice_number** | **str** | invoice number | [optional] 

## Example

```python
from openapi_client.models.ups_invoice import UpsInvoice

# TODO update the JSON string below
json = "{}"
# create an instance of UpsInvoice from a JSON string
ups_invoice_instance = UpsInvoice.from_json(json)
# print the JSON string representation of the object
print(UpsInvoice.to_json())

# convert the object into a dict
ups_invoice_dict = ups_invoice_instance.to_dict()
# create an instance of UpsInvoice from a dict
ups_invoice_from_dict = UpsInvoice.from_dict(ups_invoice_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


