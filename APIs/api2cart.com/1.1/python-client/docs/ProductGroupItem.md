# ProductGroupItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**child_item_id** | **str** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**default_qty_in_pack** | **str** |  | [optional] 
**is_qty_in_pack_fixed** | **bool** |  | [optional] 
**product_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.product_group_item import ProductGroupItem

# TODO update the JSON string below
json = "{}"
# create an instance of ProductGroupItem from a JSON string
product_group_item_instance = ProductGroupItem.from_json(json)
# print the JSON string representation of the object
print(ProductGroupItem.to_json())

# convert the object into a dict
product_group_item_dict = product_group_item_instance.to_dict()
# create an instance of ProductGroupItem from a dict
product_group_item_from_dict = ProductGroupItem.from_dict(product_group_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


