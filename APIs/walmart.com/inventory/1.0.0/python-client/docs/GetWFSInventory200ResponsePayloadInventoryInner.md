# GetWFSInventory200ResponsePayloadInventoryInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ship_nodes** | [**List[GetWFSInventory200ResponsePayloadInventoryInnerShipNodesInner]**](GetWFSInventory200ResponsePayloadInventoryInnerShipNodesInner.md) |  | [optional] 
**sku** | **str** | An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. | [optional] 

## Example

```python
from openapi_client.models.get_wfs_inventory200_response_payload_inventory_inner import GetWFSInventory200ResponsePayloadInventoryInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetWFSInventory200ResponsePayloadInventoryInner from a JSON string
get_wfs_inventory200_response_payload_inventory_inner_instance = GetWFSInventory200ResponsePayloadInventoryInner.from_json(json)
# print the JSON string representation of the object
print(GetWFSInventory200ResponsePayloadInventoryInner.to_json())

# convert the object into a dict
get_wfs_inventory200_response_payload_inventory_inner_dict = get_wfs_inventory200_response_payload_inventory_inner_instance.to_dict()
# create an instance of GetWFSInventory200ResponsePayloadInventoryInner from a dict
get_wfs_inventory200_response_payload_inventory_inner_from_dict = GetWFSInventory200ResponsePayloadInventoryInner.from_dict(get_wfs_inventory200_response_payload_inventory_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


