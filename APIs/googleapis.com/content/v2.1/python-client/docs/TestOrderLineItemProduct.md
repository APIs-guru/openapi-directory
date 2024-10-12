# TestOrderLineItemProduct


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brand** | **str** | Required. Brand of the item. | [optional] 
**condition** | **str** | Required. Condition or state of the item. Acceptable values are: - \&quot;&#x60;new&#x60;\&quot;  | [optional] 
**content_language** | **str** | Required. The two-letter ISO 639-1 language code for the item. Acceptable values are: - \&quot;&#x60;en&#x60;\&quot; - \&quot;&#x60;fr&#x60;\&quot;  | [optional] 
**fees** | [**List[OrderLineItemProductFee]**](OrderLineItemProductFee.md) | Fees for the item. Optional. | [optional] 
**gtin** | **str** | Global Trade Item Number (GTIN) of the item. Optional. | [optional] 
**image_link** | **str** | Required. URL of an image of the item. | [optional] 
**item_group_id** | **str** | Shared identifier for all variants of the same product. Optional. | [optional] 
**mpn** | **str** | Manufacturer Part Number (MPN) of the item. Optional. | [optional] 
**offer_id** | **str** | Required. An identifier of the item. | [optional] 
**price** | [**Price**](Price.md) |  | [optional] 
**target_country** | **str** | Required. The CLDR territory code of the target country of the product. | [optional] 
**title** | **str** | Required. The title of the product. | [optional] 
**variant_attributes** | [**List[OrderLineItemProductVariantAttribute]**](OrderLineItemProductVariantAttribute.md) | Variant attributes for the item. Optional. | [optional] 

## Example

```python
from openapi_client.models.test_order_line_item_product import TestOrderLineItemProduct

# TODO update the JSON string below
json = "{}"
# create an instance of TestOrderLineItemProduct from a JSON string
test_order_line_item_product_instance = TestOrderLineItemProduct.from_json(json)
# print the JSON string representation of the object
print(TestOrderLineItemProduct.to_json())

# convert the object into a dict
test_order_line_item_product_dict = test_order_line_item_product_instance.to_dict()
# create an instance of TestOrderLineItemProduct from a dict
test_order_line_item_product_from_dict = TestOrderLineItemProduct.from_dict(test_order_line_item_product_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


