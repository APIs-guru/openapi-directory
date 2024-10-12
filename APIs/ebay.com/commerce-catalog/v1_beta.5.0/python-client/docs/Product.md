# Product

This type contains the full details of a specified product, including information about the product's identifiers, product images, aspects, and categories.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_images** | [**List[Image]**](Image.md) | Contains information about  additional images associated with this product. For the primary image, see the &lt;b&gt;image&lt;/b&gt; container. | [optional] 
**aspects** | [**List[Aspect]**](Aspect.md) | Contains an array of the category aspects and their values that are associated with this product. | [optional] 
**brand** | **str** | The manufacturer&#39;s brand name for this product. | [optional] 
**description** | **str** | The rich description of this product, which might contain HTML. | [optional] 
**ean** | **List[str]** | A list of all European Article Numbers (EANs) that identify this product. | [optional] 
**epid** | **str** | The eBay product ID of this product. | [optional] 
**gtin** | **List[str]** | A list of all GTINs that identify this product. Currently this can include EAN, ISBN, and UPC identifier types. | [optional] 
**image** | [**Image**](Image.md) |  | [optional] 
**isbn** | **List[str]** | A list of all International Standard Book Numbers (ISBNs) that identify this product.  | [optional] 
**mpn** | **List[str]** | A list of all MPN values that the manufacturer uses to identify this product. | [optional] 
**other_applicable_category_ids** | **List[str]** | A list of category IDs (other than the value of &lt;b&gt;primaryCategoryId&lt;/b&gt;) for all the leaf categories to which this product might belong. | [optional] 
**primary_category_id** | **str** | The identifier of the leaf category that eBay recommends using to list this product, based on previous listings of similar products. Products in the eBay catalog are not automatically associated with any particular category, but using an inappropriate category can make it difficult for prospective buyers to find the product. For other possible categories that might be used, see &lt;b&gt;otherApplicableCategoryIds&lt;/b&gt;. | [optional] 
**product_web_url** | **str** | The URL for this product&#39;s eBay product page. | [optional] 
**title** | **str** | The title of this product on eBay. | [optional] 
**upc** | **List[str]** | A list of Universal Product Codes (UPCs) that identify this product. | [optional] 
**version** | **str** | The current version number of this product record in the catalog. | [optional] 

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


