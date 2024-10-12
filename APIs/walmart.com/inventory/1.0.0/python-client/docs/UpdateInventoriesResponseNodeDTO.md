# UpdateInventoriesResponseNodeDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[GetMultiNodeInventoryForSkuAndAllShipnodes200ResponseNodesInnerErrorsInner]**](GetMultiNodeInventoryForSkuAndAllShipnodes200ResponseNodesInnerErrorsInner.md) | Node Update Error description. | [optional] 
**ship_node** | **str** | ShipNode Id of the ship node for which the inventory is requested | [optional] 
**status** | **str** | Node Update status. Example: &#39;Success&#39; | [optional] 

## Example

```python
from openapi_client.models.update_inventories_response_node_dto import UpdateInventoriesResponseNodeDTO

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateInventoriesResponseNodeDTO from a JSON string
update_inventories_response_node_dto_instance = UpdateInventoriesResponseNodeDTO.from_json(json)
# print the JSON string representation of the object
print(UpdateInventoriesResponseNodeDTO.to_json())

# convert the object into a dict
update_inventories_response_node_dto_dict = update_inventories_response_node_dto_instance.to_dict()
# create an instance of UpdateInventoriesResponseNodeDTO from a dict
update_inventories_response_node_dto_from_dict = UpdateInventoriesResponseNodeDTO.from_dict(update_inventories_response_node_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


