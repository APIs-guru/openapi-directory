# GetMultiNodeInventoryForSkuAndAllShipnodes200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nodes** | [**List[GetMultiNodeInventoryForSkuAndAllShipnodes200ResponseNodesInner]**](GetMultiNodeInventoryForSkuAndAllShipnodes200ResponseNodesInner.md) |  | [optional] 
**sku** | **str** | An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. | [optional] 

## Example

```python
from openapi_client.models.get_multi_node_inventory_for_sku_and_all_shipnodes200_response import GetMultiNodeInventoryForSkuAndAllShipnodes200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetMultiNodeInventoryForSkuAndAllShipnodes200Response from a JSON string
get_multi_node_inventory_for_sku_and_all_shipnodes200_response_instance = GetMultiNodeInventoryForSkuAndAllShipnodes200Response.from_json(json)
# print the JSON string representation of the object
print(GetMultiNodeInventoryForSkuAndAllShipnodes200Response.to_json())

# convert the object into a dict
get_multi_node_inventory_for_sku_and_all_shipnodes200_response_dict = get_multi_node_inventory_for_sku_and_all_shipnodes200_response_instance.to_dict()
# create an instance of GetMultiNodeInventoryForSkuAndAllShipnodes200Response from a dict
get_multi_node_inventory_for_sku_and_all_shipnodes200_response_from_dict = GetMultiNodeInventoryForSkuAndAllShipnodes200Response.from_dict(get_multi_node_inventory_for_sku_and_all_shipnodes200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


