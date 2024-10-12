# GetMultiNodeInventoryForSkuAndAllShipnodes200ResponseNodesInnerErrorsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** |  | [optional] 
**causes** | [**List[GetMultiNodeInventoryForSkuAndAllShipnodes200ResponseNodesInnerErrorsInnerCausesInner]**](GetMultiNodeInventoryForSkuAndAllShipnodes200ResponseNodesInnerErrorsInnerCausesInner.md) |  | [optional] 
**code** | **str** |  | 
**description** | **str** |  | [optional] 
**error_identifiers** | **Dict[str, object]** |  | [optional] 
**var_field** | **str** |  | [optional] 
**info** | **str** |  | [optional] 
**severity** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.get_multi_node_inventory_for_sku_and_all_shipnodes200_response_nodes_inner_errors_inner import GetMultiNodeInventoryForSkuAndAllShipnodes200ResponseNodesInnerErrorsInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetMultiNodeInventoryForSkuAndAllShipnodes200ResponseNodesInnerErrorsInner from a JSON string
get_multi_node_inventory_for_sku_and_all_shipnodes200_response_nodes_inner_errors_inner_instance = GetMultiNodeInventoryForSkuAndAllShipnodes200ResponseNodesInnerErrorsInner.from_json(json)
# print the JSON string representation of the object
print(GetMultiNodeInventoryForSkuAndAllShipnodes200ResponseNodesInnerErrorsInner.to_json())

# convert the object into a dict
get_multi_node_inventory_for_sku_and_all_shipnodes200_response_nodes_inner_errors_inner_dict = get_multi_node_inventory_for_sku_and_all_shipnodes200_response_nodes_inner_errors_inner_instance.to_dict()
# create an instance of GetMultiNodeInventoryForSkuAndAllShipnodes200ResponseNodesInnerErrorsInner from a dict
get_multi_node_inventory_for_sku_and_all_shipnodes200_response_nodes_inner_errors_inner_from_dict = GetMultiNodeInventoryForSkuAndAllShipnodes200ResponseNodesInnerErrorsInner.from_dict(get_multi_node_inventory_for_sku_and_all_shipnodes200_response_nodes_inner_errors_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


