# Product

The type that defines the fields for the product information of the item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_images** | [**List[Image]**](Image.md) | An array of containers with the URLs for the product images that are in addition to the primary image. | [optional] 
**additional_product_identities** | [**List[AdditionalProductIdentity]**](AdditionalProductIdentity.md) | An array of product identifiers associated with the item. This container is returned if the seller has associated the eBay Product Identifier (ePID) with the item and in the request fieldgroups is set to PRODUCT. | [optional] 
**aspect_groups** | [**List[AspectGroup]**](AspectGroup.md) | An array of containers for the product aspects. Each group contains the aspect group name and the aspect name/value pairs. | [optional] 
**brand** | **str** | The brand associated with product. To identify the product, this is always used along with MPN (manufacturer part number). | [optional] 
**description** | **str** | The rich description of an eBay product, which might contain HTML. | [optional] 
**gtins** | **List[str]** | An array of all the possible GTINs values associated with the product. A GTIN is a unique Global Trade Item number of the item as defined by https://www.gtin.info. This can be a UPC (Universal Product Code), EAN (European Article Number), or an ISBN (International Standard Book Number) value. | [optional] 
**image** | [**Image**](Image.md) |  | [optional] 
**mpns** | **List[str]** | An array of all possible MPN values associated with the product. A MPNs is manufacturer part number of the product. To identify the product, this is always used along with brand. | [optional] 
**title** | **str** | The title of the product. | [optional] 

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


