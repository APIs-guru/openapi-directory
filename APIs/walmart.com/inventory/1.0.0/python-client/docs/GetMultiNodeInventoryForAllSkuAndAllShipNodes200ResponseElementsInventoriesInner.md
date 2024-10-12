# GetMultiNodeInventoryForAllSkuAndAllShipNodes200ResponseElementsInventoriesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nodes** | [**List[GetMultiNodeInventoryForAllSkuAndAllShipNodes200ResponseElementsInventoriesInnerNodesInner]**](GetMultiNodeInventoryForAllSkuAndAllShipNodes200ResponseElementsInventoriesInnerNodesInner.md) |  | [optional] 
**sku** | **str** | An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. | [optional] 

## Example

```python
from openapi_client.models.get_multi_node_inventory_for_all_sku_and_all_ship_nodes200_response_elements_inventories_inner import GetMultiNodeInventoryForAllSkuAndAllShipNodes200ResponseElementsInventoriesInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetMultiNodeInventoryForAllSkuAndAllShipNodes200ResponseElementsInventoriesInner from a JSON string
get_multi_node_inventory_for_all_sku_and_all_ship_nodes200_response_elements_inventories_inner_instance = GetMultiNodeInventoryForAllSkuAndAllShipNodes200ResponseElementsInventoriesInner.from_json(json)
# print the JSON string representation of the object
print(GetMultiNodeInventoryForAllSkuAndAllShipNodes200ResponseElementsInventoriesInner.to_json())

# convert the object into a dict
get_multi_node_inventory_for_all_sku_and_all_ship_nodes200_response_elements_inventories_inner_dict = get_multi_node_inventory_for_all_sku_and_all_ship_nodes200_response_elements_inventories_inner_instance.to_dict()
# create an instance of GetMultiNodeInventoryForAllSkuAndAllShipNodes200ResponseElementsInventoriesInner from a dict
get_multi_node_inventory_for_all_sku_and_all_ship_nodes200_response_elements_inventories_inner_from_dict = GetMultiNodeInventoryForAllSkuAndAllShipNodes200ResponseElementsInventoriesInner.from_dict(get_multi_node_inventory_for_all_sku_and_all_ship_nodes200_response_elements_inventories_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


