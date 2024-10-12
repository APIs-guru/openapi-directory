# CartWarehouse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**address** | [**CustomerAddress**](CustomerAddress.md) |  | [optional] 
**avail** | **bool** |  | [optional] 
**carriers_ids** | **List[str]** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**stores_ids** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.cart_warehouse import CartWarehouse

# TODO update the JSON string below
json = "{}"
# create an instance of CartWarehouse from a JSON string
cart_warehouse_instance = CartWarehouse.from_json(json)
# print the JSON string representation of the object
print(CartWarehouse.to_json())

# convert the object into a dict
cart_warehouse_dict = cart_warehouse_instance.to_dict()
# create an instance of CartWarehouse from a dict
cart_warehouse_from_dict = CartWarehouse.from_dict(cart_warehouse_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


