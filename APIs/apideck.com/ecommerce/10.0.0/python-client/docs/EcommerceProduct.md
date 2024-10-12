# EcommerceProduct


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categories** | [**List[ProductCategoriesInner]**](ProductCategoriesInner.md) | An array of categories for the product, used for organization and searching. | [optional] 
**created_at** | **datetime** | The date and time when the object was created. | [optional] [readonly] 
**custom_mappings** | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
**description** | **str** | A detailed description of the product. | [optional] 
**id** | **str** | A unique identifier for an object. | [readonly] 
**images** | [**List[ProductImagesInner]**](ProductImagesInner.md) | An array of image URLs for the product. | [optional] 
**inventory_quantity** | **str** | The quantity of the product in stock. | [optional] 
**name** | **str** | The name of the product as it should be displayed to customers. | [optional] 
**options** | [**List[ProductOptionsInner]**](ProductOptionsInner.md) | An array of options for the product. | [optional] 
**price** | **str** | The price of the product. | [optional] 
**sku** | **str** | The stock keeping unit of the product. | [optional] 
**status** | **str** | The current status of the product (active or archived). | [optional] 
**tags** | **List[Optional[str]]** | An array of tags for the product, used for organization and searching. | [optional] 
**updated_at** | **datetime** | The date and time when the object was last updated. | [optional] [readonly] 
**variants** | [**List[EcommerceProductVariantsInner]**](EcommerceProductVariantsInner.md) |  | [optional] 
**weight** | **str** | The weight of the product. | [optional] 
**weight_unit** | **str** | The unit of measurement for the weight of the product. | [optional] 

## Example

```python
from openapi_client.models.ecommerce_product import EcommerceProduct

# TODO update the JSON string below
json = "{}"
# create an instance of EcommerceProduct from a JSON string
ecommerce_product_instance = EcommerceProduct.from_json(json)
# print the JSON string representation of the object
print(EcommerceProduct.to_json())

# convert the object into a dict
ecommerce_product_dict = ecommerce_product_instance.to_dict()
# create an instance of EcommerceProduct from a dict
ecommerce_product_from_dict = EcommerceProduct.from_dict(ecommerce_product_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


