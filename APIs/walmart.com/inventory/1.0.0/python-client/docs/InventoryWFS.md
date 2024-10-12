# InventoryWFS


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ship_nodes** | [**List[GetWFSInventory200ResponsePayloadInventoryInnerShipNodesInner]**](GetWFSInventory200ResponsePayloadInventoryInnerShipNodesInner.md) |  | [optional] 
**sku** | **str** | An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. | [optional] 

## Example

```python
from openapi_client.models.inventory_wfs import InventoryWFS

# TODO update the JSON string below
json = "{}"
# create an instance of InventoryWFS from a JSON string
inventory_wfs_instance = InventoryWFS.from_json(json)
# print the JSON string representation of the object
print(InventoryWFS.to_json())

# convert the object into a dict
inventory_wfs_dict = inventory_wfs_instance.to_dict()
# create an instance of InventoryWFS from a dict
inventory_wfs_from_dict = InventoryWFS.from_dict(inventory_wfs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


