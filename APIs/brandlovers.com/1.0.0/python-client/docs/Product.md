# Product


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**List[ProductAttribute]**](ProductAttribute.md) | List of &#x60;key&#x60; &#x60;value&#x60; attributes of this product. This is very important for search and SEO optmization. Include all relevant information | 
**brand** | **str** | Brand name | 
**categories** | **List[str]** | Array of categories associated with this product | 
**description** | **str** | Product description. | 
**dimensions** | [**Dimensions**](Dimensions.md) |  | [optional] 
**gift_wrap** | [**GiftWrap**](GiftWrap.md) |  | [optional] 
**gtin** | **List[str]** | Array of product EAN and/or ISBN and/or ASIN codes | [optional] 
**images** | **List[str]** | List of valid Product image URLs. HTTP or HTTPS are valid. HTTPS is prefered. | 
**price** | [**ProductPrice**](ProductPrice.md) |  | 
**product_group_id** | **str** | Unique Product Group ID. Products with the same &#x60;productGroupId&#x60; will be grouped and displayed as a unique entry. Use &#x60;productGroupId&#x60; to group diferent SKUs that represent diferent colors, sizes, capacities, etc.. | [optional] 
**product_id** | **str** | Brand Lovers Product ID. Use this to suggest a product association. This field is optional. | [optional] 
**sku_seller_id** | **str** | Unique Product Id (SKU) in the seller system | 
**stock** | **int** | Number of products availble for sale from the seller. Each new successfull order will automatically reduce the number of products available. | 
**title** | **str** | Product name as advertised by manufacturer. This how the product will be displayed in the Marketplace | 
**videos** | **List[str]** | List of videos de URLs associated with this product. HTTP or HTTPS are valid. HTTPS is prefered. | [optional] 

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


