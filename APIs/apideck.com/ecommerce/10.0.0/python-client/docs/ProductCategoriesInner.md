# ProductCategoriesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**name** | **str** | The name of the category. | [optional] 

## Example

```python
from openapi_client.models.product_categories_inner import ProductCategoriesInner

# TODO update the JSON string below
json = "{}"
# create an instance of ProductCategoriesInner from a JSON string
product_categories_inner_instance = ProductCategoriesInner.from_json(json)
# print the JSON string representation of the object
print(ProductCategoriesInner.to_json())

# convert the object into a dict
product_categories_inner_dict = product_categories_inner_instance.to_dict()
# create an instance of ProductCategoriesInner from a dict
product_categories_inner_from_dict = ProductCategoriesInner.from_dict(product_categories_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


