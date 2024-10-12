# MultiNodeInventoryUpdateResponseDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nodes** | [**List[UpdateMultiNodeInventory200ResponseNodesInner]**](UpdateMultiNodeInventory200ResponseNodesInner.md) |  | [optional] 
**sku** | **str** | An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. | [optional] 

## Example

```python
from openapi_client.models.multi_node_inventory_update_response_dto import MultiNodeInventoryUpdateResponseDTO

# TODO update the JSON string below
json = "{}"
# create an instance of MultiNodeInventoryUpdateResponseDTO from a JSON string
multi_node_inventory_update_response_dto_instance = MultiNodeInventoryUpdateResponseDTO.from_json(json)
# print the JSON string representation of the object
print(MultiNodeInventoryUpdateResponseDTO.to_json())

# convert the object into a dict
multi_node_inventory_update_response_dto_dict = multi_node_inventory_update_response_dto_instance.to_dict()
# create an instance of MultiNodeInventoryUpdateResponseDTO from a dict
multi_node_inventory_update_response_dto_from_dict = MultiNodeInventoryUpdateResponseDTO.from_dict(multi_node_inventory_update_response_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


