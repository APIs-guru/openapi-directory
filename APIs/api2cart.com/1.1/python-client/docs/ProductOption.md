# ProductOption


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**available** | **bool** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**option_items** | [**List[ProductOptionItem]**](ProductOptionItem.md) |  | [optional] 
**product_option_id** | **str** |  | [optional] 
**required** | **bool** |  | [optional] 
**sort_order** | **int** |  | [optional] 
**type** | **str** |  | [optional] 
**used_in_combination** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.product_option import ProductOption

# TODO update the JSON string below
json = "{}"
# create an instance of ProductOption from a JSON string
product_option_instance = ProductOption.from_json(json)
# print the JSON string representation of the object
print(ProductOption.to_json())

# convert the object into a dict
product_option_dict = product_option_instance.to_dict()
# create an instance of ProductOption from a dict
product_option_from_dict = ProductOption.from_dict(product_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


