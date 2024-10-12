# WritableInventoryItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**depth** | **int** |  | [optional] [readonly] 
**asset_tag** | **str** | A unique tag used to identify this item | [optional] 
**component** | **object** |  | [optional] [readonly] 
**component_id** | **int** |  | [optional] 
**component_type** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**device** | **int** |  | 
**discovered** | **bool** | This item was automatically discovered | [optional] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**label** | **str** | Physical label | [optional] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**manufacturer** | **int** |  | [optional] 
**name** | **str** |  | 
**parent** | **int** |  | [optional] 
**part_id** | **str** | Manufacturer-assigned part identifier | [optional] 
**role** | **int** |  | [optional] 
**serial** | **str** |  | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.writable_inventory_item import WritableInventoryItem

# TODO update the JSON string below
json = "{}"
# create an instance of WritableInventoryItem from a JSON string
writable_inventory_item_instance = WritableInventoryItem.from_json(json)
# print the JSON string representation of the object
print(WritableInventoryItem.to_json())

# convert the object into a dict
writable_inventory_item_dict = writable_inventory_item_instance.to_dict()
# create an instance of WritableInventoryItem from a dict
writable_inventory_item_from_dict = WritableInventoryItem.from_dict(writable_inventory_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


