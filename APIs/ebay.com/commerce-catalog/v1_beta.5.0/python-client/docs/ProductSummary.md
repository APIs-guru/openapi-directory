# ProductSummary

This type contains a summary of a specified product. The product summary includes information about the product's identifiers, product images, aspects, and the <b>getProduct</b> URL for retrieving the product details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_images** | [**List[Image]**](Image.md) | Contains information about additional images associated with this product. For the primary image, see the &lt;b&gt;image&lt;/b&gt; container. | [optional] 
**aspects** | [**List[Aspect]**](Aspect.md) | Contains an array of the category aspects and their values that are associated with this product. | [optional] 
**brand** | **str** | The manufacturer&#39;s brand name for this product. | [optional] 
**ean** | **List[str]** | A list of all European Article Numbers (EANs) that identify this product. | [optional] 
**epid** | **str** | The eBay product ID of this product. | [optional] 
**gtin** | **List[str]** | A list of all GTINs that identify this product. This includes all of the values returned in the &lt;b&gt;ean&lt;/b&gt;, &lt;b&gt;isbn&lt;/b&gt;, and &lt;b&gt;upc&lt;/b&gt; fields. | [optional] 
**image** | [**Image**](Image.md) |  | [optional] 
**isbn** | **List[str]** | A list of all International Standard Book Numbers (ISBNs) that identify this product. | [optional] 
**mpn** | **List[str]** | A list of all Manufacturer Product Number (MPN) values that the manufacturer uses to identify this product. | [optional] 
**product_href** | **str** | The URI of the &lt;b&gt;getProduct&lt;/b&gt; call request that retrieves this product&#39;s details. | [optional] 
**product_web_url** | **str** | The URL for this product&#39;s eBay product page. | [optional] 
**title** | **str** | The title of this product on eBay. | [optional] 
**upc** | **List[str]** | A list of Universal Product Codes (UPCs) that identify this product. | [optional] 

## Example

```python
from openapi_client.models.product_summary import ProductSummary

# TODO update the JSON string below
json = "{}"
# create an instance of ProductSummary from a JSON string
product_summary_instance = ProductSummary.from_json(json)
# print the JSON string representation of the object
print(ProductSummary.to_json())

# convert the object into a dict
product_summary_dict = product_summary_instance.to_dict()
# create an instance of ProductSummary from a dict
product_summary_from_dict = ProductSummary.from_dict(product_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


