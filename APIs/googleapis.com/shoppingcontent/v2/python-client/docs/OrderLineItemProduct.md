# OrderLineItemProduct


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brand** | **str** | Brand of the item. | [optional] 
**channel** | **str** | The item&#39;s channel (online or local). Acceptable values are: - \&quot;&#x60;local&#x60;\&quot; - \&quot;&#x60;online&#x60;\&quot;  | [optional] 
**condition** | **str** | Condition or state of the item. Acceptable values are: - \&quot;&#x60;new&#x60;\&quot; - \&quot;&#x60;refurbished&#x60;\&quot; - \&quot;&#x60;used&#x60;\&quot;  | [optional] 
**content_language** | **str** | The two-letter ISO 639-1 language code for the item. | [optional] 
**fees** | [**List[OrderLineItemProductFee]**](OrderLineItemProductFee.md) | Associated fees at order creation time. | [optional] 
**gtin** | **str** | Global Trade Item Number (GTIN) of the item. | [optional] 
**id** | **str** | The REST ID of the product. | [optional] 
**image_link** | **str** | URL of an image of the item. | [optional] 
**item_group_id** | **str** | Shared identifier for all variants of the same product. | [optional] 
**mpn** | **str** | Manufacturer Part Number (MPN) of the item. | [optional] 
**offer_id** | **str** | An identifier of the item. | [optional] 
**price** | [**Price**](Price.md) |  | [optional] 
**shown_image** | **str** | URL to the cached image shown to the user when order was placed. | [optional] 
**target_country** | **str** | The CLDR territory // code of the target country of the product. | [optional] 
**title** | **str** | The title of the product. | [optional] 
**variant_attributes** | [**List[OrderLineItemProductVariantAttribute]**](OrderLineItemProductVariantAttribute.md) | Variant attributes for the item. These are dimensions of the product, such as color, gender, material, pattern, and size. You can find a comprehensive list of variant attributes here. | [optional] 

## Example

```python
from openapi_client.models.order_line_item_product import OrderLineItemProduct

# TODO update the JSON string below
json = "{}"
# create an instance of OrderLineItemProduct from a JSON string
order_line_item_product_instance = OrderLineItemProduct.from_json(json)
# print the JSON string representation of the object
print(OrderLineItemProduct.to_json())

# convert the object into a dict
order_line_item_product_dict = order_line_item_product_instance.to_dict()
# create an instance of OrderLineItemProduct from a dict
order_line_item_product_from_dict = OrderLineItemProduct.from_dict(order_line_item_product_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


