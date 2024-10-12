# MultiNodeInventoryUpdateRequestDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inventories** | [**UpdateMultiNodeInventoryRequestInventories**](UpdateMultiNodeInventoryRequestInventories.md) |  | 

## Example

```python
from openapi_client.models.multi_node_inventory_update_request_dto import MultiNodeInventoryUpdateRequestDTO

# TODO update the JSON string below
json = "{}"
# create an instance of MultiNodeInventoryUpdateRequestDTO from a JSON string
multi_node_inventory_update_request_dto_instance = MultiNodeInventoryUpdateRequestDTO.from_json(json)
# print the JSON string representation of the object
print(MultiNodeInventoryUpdateRequestDTO.to_json())

# convert the object into a dict
multi_node_inventory_update_request_dto_dict = multi_node_inventory_update_request_dto_instance.to_dict()
# create an instance of MultiNodeInventoryUpdateRequestDTO from a dict
multi_node_inventory_update_request_dto_from_dict = MultiNodeInventoryUpdateRequestDTO.from_dict(multi_node_inventory_update_request_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


