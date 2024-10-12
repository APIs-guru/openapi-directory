# WfsInventoryDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**headers** | [**GetWFSInventory200ResponseHeaders**](GetWFSInventory200ResponseHeaders.md) |  | [optional] 
**payload** | [**GetWFSInventory200ResponsePayload**](GetWFSInventory200ResponsePayload.md) |  | [optional] 

## Example

```python
from openapi_client.models.wfs_inventory_dto import WfsInventoryDTO

# TODO update the JSON string below
json = "{}"
# create an instance of WfsInventoryDTO from a JSON string
wfs_inventory_dto_instance = WfsInventoryDTO.from_json(json)
# print the JSON string representation of the object
print(WfsInventoryDTO.to_json())

# convert the object into a dict
wfs_inventory_dto_dict = wfs_inventory_dto_instance.to_dict()
# create an instance of WfsInventoryDTO from a dict
wfs_inventory_dto_from_dict = WfsInventoryDTO.from_dict(wfs_inventory_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


