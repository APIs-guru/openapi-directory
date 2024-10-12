# GetMultiNodeInventoryForAllSkuAndAllShipNodes200ResponseMeta


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_cursor** | **str** | Used for pagination to fetch the next set of items. | [optional] 
**total_count** | **float** | Total number of Skus of the Seller. Example: &#39;235&#39; | [optional] 

## Example

```python
from openapi_client.models.get_multi_node_inventory_for_all_sku_and_all_ship_nodes200_response_meta import GetMultiNodeInventoryForAllSkuAndAllShipNodes200ResponseMeta

# TODO update the JSON string below
json = "{}"
# create an instance of GetMultiNodeInventoryForAllSkuAndAllShipNodes200ResponseMeta from a JSON string
get_multi_node_inventory_for_all_sku_and_all_ship_nodes200_response_meta_instance = GetMultiNodeInventoryForAllSkuAndAllShipNodes200ResponseMeta.from_json(json)
# print the JSON string representation of the object
print(GetMultiNodeInventoryForAllSkuAndAllShipNodes200ResponseMeta.to_json())

# convert the object into a dict
get_multi_node_inventory_for_all_sku_and_all_ship_nodes200_response_meta_dict = get_multi_node_inventory_for_all_sku_and_all_ship_nodes200_response_meta_instance.to_dict()
# create an instance of GetMultiNodeInventoryForAllSkuAndAllShipNodes200ResponseMeta from a dict
get_multi_node_inventory_for_all_sku_and_all_ship_nodes200_response_meta_from_dict = GetMultiNodeInventoryForAllSkuAndAllShipNodes200ResponseMeta.from_dict(get_multi_node_inventory_for_all_sku_and_all_ship_nodes200_response_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


