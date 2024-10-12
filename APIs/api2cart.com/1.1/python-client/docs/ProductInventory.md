# ProductInventory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**in_stock** | **bool** |  | [optional] 
**priority** | **int** |  | [optional] 
**quantity** | **float** |  | [optional] 
**warehouse_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.product_inventory import ProductInventory

# TODO update the JSON string below
json = "{}"
# create an instance of ProductInventory from a JSON string
product_inventory_instance = ProductInventory.from_json(json)
# print the JSON string representation of the object
print(ProductInventory.to_json())

# convert the object into a dict
product_inventory_dict = product_inventory_instance.to_dict()
# create an instance of ProductInventory from a dict
product_inventory_from_dict = ProductInventory.from_dict(product_inventory_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


