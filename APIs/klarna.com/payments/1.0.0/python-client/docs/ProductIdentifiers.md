# ProductIdentifiers


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brand** | **str** | The product&#39;s brand name as generally recognized by consumers. If no brand is available for a product, do not supply any value. | [optional] 
**category_path** | **str** | The product&#39;s category path as used in the merchant&#39;s webshop. Include the full and most detailed category and separate the segments with &#39; &gt; &#39; | [optional] 
**color** | **str** | Color to be shown to the end customer (max 64 characters). | [optional] 
**global_trade_item_number** | **str** | The product&#39;s Global Trade Item Number (GTIN). Common types of GTIN are EAN, ISBN or UPC. Exclude dashes and spaces, where possible | [optional] 
**manufacturer_part_number** | **str** | The product&#39;s Manufacturer Part Number (MPN), which - together with the brand - uniquely identifies a product. Only submit MPNs assigned by a manufacturer and use the most specific MPN possible | [optional] 
**size** | **str** | Size to be shown to the end customer (max 64 characters). | [optional] 

## Example

```python
from openapi_client.models.product_identifiers import ProductIdentifiers

# TODO update the JSON string below
json = "{}"
# create an instance of ProductIdentifiers from a JSON string
product_identifiers_instance = ProductIdentifiers.from_json(json)
# print the JSON string representation of the object
print(ProductIdentifiers.to_json())

# convert the object into a dict
product_identifiers_dict = product_identifiers_instance.to_dict()
# create an instance of ProductIdentifiers from a dict
product_identifiers_from_dict = ProductIdentifiers.from_dict(product_identifiers_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


