# TransferProductRequestProperties

The properties of the product to initiate a transfer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_billing_profile_id** | **str** | The destination billing profile id. | [optional] 
**destination_invoice_section_id** | **str** | The destination invoice section id. | [optional] 

## Example

```python
from openapi_client.models.transfer_product_request_properties import TransferProductRequestProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TransferProductRequestProperties from a JSON string
transfer_product_request_properties_instance = TransferProductRequestProperties.from_json(json)
# print the JSON string representation of the object
print(TransferProductRequestProperties.to_json())

# convert the object into a dict
transfer_product_request_properties_dict = transfer_product_request_properties_instance.to_dict()
# create an instance of TransferProductRequestProperties from a dict
transfer_product_request_properties_from_dict = TransferProductRequestProperties.from_dict(transfer_product_request_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


