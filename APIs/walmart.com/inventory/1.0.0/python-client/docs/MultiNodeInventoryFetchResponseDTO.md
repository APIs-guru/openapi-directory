# MultiNodeInventoryFetchResponseDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**elements** | [**GetMultiNodeInventoryForAllSkuAndAllShipNodes200ResponseElements**](GetMultiNodeInventoryForAllSkuAndAllShipNodes200ResponseElements.md) |  | [optional] 
**meta** | [**GetMultiNodeInventoryForAllSkuAndAllShipNodes200ResponseMeta**](GetMultiNodeInventoryForAllSkuAndAllShipNodes200ResponseMeta.md) |  | [optional] 

## Example

```python
from openapi_client.models.multi_node_inventory_fetch_response_dto import MultiNodeInventoryFetchResponseDTO

# TODO update the JSON string below
json = "{}"
# create an instance of MultiNodeInventoryFetchResponseDTO from a JSON string
multi_node_inventory_fetch_response_dto_instance = MultiNodeInventoryFetchResponseDTO.from_json(json)
# print the JSON string representation of the object
print(MultiNodeInventoryFetchResponseDTO.to_json())

# convert the object into a dict
multi_node_inventory_fetch_response_dto_dict = multi_node_inventory_fetch_response_dto_instance.to_dict()
# create an instance of MultiNodeInventoryFetchResponseDTO from a dict
multi_node_inventory_fetch_response_dto_from_dict = MultiNodeInventoryFetchResponseDTO.from_dict(multi_node_inventory_fetch_response_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


