# UpdateMultiNodeInventoryRequestInventories


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nodes** | [**List[UpdateMultiNodeInventoryRequestInventoriesNodesInner]**](UpdateMultiNodeInventoryRequestInventoriesNodesInner.md) |  | 

## Example

```python
from openapi_client.models.update_multi_node_inventory_request_inventories import UpdateMultiNodeInventoryRequestInventories

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateMultiNodeInventoryRequestInventories from a JSON string
update_multi_node_inventory_request_inventories_instance = UpdateMultiNodeInventoryRequestInventories.from_json(json)
# print the JSON string representation of the object
print(UpdateMultiNodeInventoryRequestInventories.to_json())

# convert the object into a dict
update_multi_node_inventory_request_inventories_dict = update_multi_node_inventory_request_inventories_instance.to_dict()
# create an instance of UpdateMultiNodeInventoryRequestInventories from a dict
update_multi_node_inventory_request_inventories_from_dict = UpdateMultiNodeInventoryRequestInventories.from_dict(update_multi_node_inventory_request_inventories_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


