# UpdateInventoriesRequestDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nodes** | [**List[UpdateMultiNodeInventoryRequestInventoriesNodesInner]**](UpdateMultiNodeInventoryRequestInventoriesNodesInner.md) |  | 

## Example

```python
from openapi_client.models.update_inventories_request_dto import UpdateInventoriesRequestDTO

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateInventoriesRequestDTO from a JSON string
update_inventories_request_dto_instance = UpdateInventoriesRequestDTO.from_json(json)
# print the JSON string representation of the object
print(UpdateInventoriesRequestDTO.to_json())

# convert the object into a dict
update_inventories_request_dto_dict = update_inventories_request_dto_instance.to_dict()
# create an instance of UpdateInventoriesRequestDTO from a dict
update_inventories_request_dto_from_dict = UpdateInventoriesRequestDTO.from_dict(update_inventories_request_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


