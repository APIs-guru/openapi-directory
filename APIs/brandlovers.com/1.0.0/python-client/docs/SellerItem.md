# SellerItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**List[ProductAttribute]**](ProductAttribute.md) |  | 
**brand** | **str** | Brand name | 
**dimensions** | [**Dimensions**](Dimensions.md) |  | 
**gift_wrap** | [**GiftWrap**](GiftWrap.md) |  | [optional] 
**gtin** | **List[str]** | Array of product EAN and/or ISBN and/or ASIN codes | [optional] 
**images** | [**List[Image]**](Image.md) | List of valid Product image URLs. | 
**prices** | [**List[ProductPrice]**](ProductPrice.md) | Price information for each marketplace that this product is listed | 
**product** | [**ProductReference**](ProductReference.md) |  | 
**sku_seller_id** | **str** | Unique Product Id (SKU) in the seller system | 
**status** | [**List[SellerItemStatus]**](SellerItemStatus.md) | Product status for each marketplace that this product is listed | 
**stocks** | [**List[ControlledStock]**](ControlledStock.md) | Invetory information for each marketplace that this product is listed | 
**title** | **str** | Product name as advertised by manufacturer. This how the product will be displayed in the Marketplace | 
**urls** | [**List[ProductSiteReference]**](ProductSiteReference.md) | List of URLs where the product is listed for sale | [optional] 

## Example

```python
from openapi_client.models.seller_item import SellerItem

# TODO update the JSON string below
json = "{}"
# create an instance of SellerItem from a JSON string
seller_item_instance = SellerItem.from_json(json)
# print the JSON string representation of the object
print(SellerItem.to_json())

# convert the object into a dict
seller_item_dict = seller_item_instance.to_dict()
# create an instance of SellerItem from a dict
seller_item_from_dict = SellerItem.from_dict(seller_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


