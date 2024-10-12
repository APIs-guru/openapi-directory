# Product


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ancestors** | **List[str]** |  | [optional] 
**attributes** | [**List[Attribute]**](Attribute.md) |  | [optional] 
**base_product** | [**BaseProduct**](BaseProduct.md) |  | [optional] 
**brand** | **str** |  | [optional] 
**catalog** | [**Catalog**](Catalog.md) |  | [optional] 
**categories** | [**List[Category]**](Category.md) |  | [optional] 
**change_date** | **datetime** |  | 
**code** | **str** |  | 
**create_date** | **datetime** |  | 
**id** | **str** |  | 
**images** | **List[object]** |  | [optional] 
**is_order** | **bool** |  | 
**is_sku** | **bool** |  | 
**name** | **str** |  | [optional] 
**rating** | **float** |  | [optional] 
**urls** | [**Url**](Url.md) |  | [optional] 
**vendors** | [**List[Vendor]**](Vendor.md) |  | [optional] 

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


