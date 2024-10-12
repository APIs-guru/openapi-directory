# ProductUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**List[ProductAttribute]**](ProductAttribute.md) | List of &#x60;key&#x60; &#x60;value&#x60; attributes of this product. This is very important for search and SEO optmization. Include all relevant information | [optional] 
**brand** | **str** | Brand name | [optional] 
**categories** | **List[str]** | Array of categories associated with this product | [optional] 
**description** | **str** | Product text description. | [optional] 
**dimensions** | [**Dimensions**](Dimensions.md) |  | [optional] 
**gift_wrap** | [**GiftWrap**](GiftWrap.md) |  | [optional] 
**gtin** | **List[str]** | Array of product EAN and/or ISBN and/or ASIN codes | [optional] 
**images** | **List[str]** | List of valid Product image URLs. HTTP or HTTPS are valid. HTTPS is prefered. | [optional] 
**price** | [**ProductPrice**](ProductPrice.md) |  | [optional] 
**product_group_id** | **str** | Unique Product Group ID. Products with the same &#x60;productGroupId&#x60; will be grouped and displayed as a unique entry. Use &#x60;productGroupId&#x60; to group diferent SKUs that represent diferent colors, sizes, capacities, etc.. | [optional] 
**product_id** | **str** | Brand Lovers Product Id. Use this to recommend a product association | [optional] 
**sku_seller_id** | **str** | Unique Product Id (SKU) in the seller system | 
**stock** | **int** | Number of products availble for sale from the seller. Each new successfull order will automatically reduce the number of products available. | [optional] 
**title** | **str** | Product name as advertised by manufacturer. This how the product will be displayed in the Marketplace | [optional] 
**videos** | **List[str]** | List of videos de URLs associated with this product. HTTP or HTTPS are valid. HTTPS is prefered. | [optional] 

## Example

```python
from openapi_client.models.product_update import ProductUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of ProductUpdate from a JSON string
product_update_instance = ProductUpdate.from_json(json)
# print the JSON string representation of the object
print(ProductUpdate.to_json())

# convert the object into a dict
product_update_dict = product_update_instance.to_dict()
# create an instance of ProductUpdate from a dict
product_update_from_dict = ProductUpdate.from_dict(product_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


