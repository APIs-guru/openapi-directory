# ContextWhatsappReferredProduct

An object containing details of a product from a `product` message being quoted or replied to using the 'Message Business' option. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**catalog_id** | **str** | The ID of the catalog associated with the product from the &#x60;product&#x60; message being quoted or replied to using the &#39;Message Business&#39; option. | 
**product_retailer_id** | **str** | The ID of the product from the &#x60;product&#x60; message being quoted or replied to using the &#39;Message Business&#39; option. | 

## Example

```python
from openapi_client.models.context_whatsapp_referred_product import ContextWhatsappReferredProduct

# TODO update the JSON string below
json = "{}"
# create an instance of ContextWhatsappReferredProduct from a JSON string
context_whatsapp_referred_product_instance = ContextWhatsappReferredProduct.from_json(json)
# print the JSON string representation of the object
print(ContextWhatsappReferredProduct.to_json())

# convert the object into a dict
context_whatsapp_referred_product_dict = context_whatsapp_referred_product_instance.to_dict()
# create an instance of ContextWhatsappReferredProduct from a dict
context_whatsapp_referred_product_from_dict = ContextWhatsappReferredProduct.from_dict(context_whatsapp_referred_product_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


