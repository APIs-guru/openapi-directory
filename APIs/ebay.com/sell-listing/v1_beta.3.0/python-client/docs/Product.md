# Product

The type that defines the fields for the aspects of a product.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aspects** | [**List[Aspect]**](Aspect.md) | The list of item aspects that describe the item (such as size, color, capacity, model, brand, etc.) | [optional] 
**brand** | **str** | The name brand of the item, such as Nike, Apple, etc. | [optional] 
**description** | **str** | The description of the item that was created by the seller. This field supports plain text or rich content within HTML tags. Note: Active content is not supported. Active content includes animation or video via JavaScript, Flash, plug-ins, or form actions. Max Length: 500,000 | [optional] 
**epid** | **str** | An EPID is the eBay product identifier of a product from the eBay product catalog. Note: If you submit both a category ID and an EPID, eBay determines the best category based on the EPID and uses that. The category ID will be ignored. | [optional] 
**image_urls** | **List[str]** | The image URLs of the item. The first URL will be the primary image, which appears on the View Item page in the eBay listing. The URL can be from the following: The eBay Picture Services (images previously uploaded). A server outside of eBay (self-hosted). For more details, see PictureURL and Introduction to Pictures in Listings. Maximum: 12 URLs (for most categories and marketplaces) Restrictions: You cannot mix self-hosted and EPS-hosted URLs in the same listing. All image URLs must be &#39;https&#39;. | [optional] 
**title** | **str** | The seller-created title of the item. This should include unique characteristics of the item, such as brand, model, color, size, capacity, etc. For example: Levi&#39;s 501 size 10 black jeans | [optional] 

## Example

```python
from openapi_client.models.product import Product

# TODO update the JSON string below
json = "{}"
# create an instance of Product from a JSON string
product_instance = Product.from_json(json)
# print the JSON string representation of the object
print(Product.to_json())

# convert the object into a dict
product_dict = product_instance.to_dict()
# create an instance of Product from a dict
product_from_dict = Product.from_dict(product_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


