# ProductOptionItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**price** | **str** |  | [optional] 
**product_option_item_id** | **str** |  | [optional] 
**quantity** | **int** |  | [optional] 
**sku** | **str** |  | [optional] 
**sort_order** | **int** |  | [optional] 
**type_price** | **str** |  | [optional] 
**weight** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.product_option_item import ProductOptionItem

# TODO update the JSON string below
json = "{}"
# create an instance of ProductOptionItem from a JSON string
product_option_item_instance = ProductOptionItem.from_json(json)
# print the JSON string representation of the object
print(ProductOptionItem.to_json())

# convert the object into a dict
product_option_item_dict = product_option_item_instance.to_dict()
# create an instance of ProductOptionItem from a dict
product_option_item_from_dict = ProductOptionItem.from_dict(product_option_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


