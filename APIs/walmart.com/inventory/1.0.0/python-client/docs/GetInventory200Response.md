# GetInventory200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quantity** | [**GetMultiNodeInventoryForAllSkuAndAllShipNodes200ResponseElementsInventoriesInnerNodesInnerReservedQty**](GetMultiNodeInventoryForAllSkuAndAllShipNodes200ResponseElementsInventoriesInnerNodesInnerReservedQty.md) |  | 
**sku** | **str** | A seller-provided Product ID. Response will have decoded value. | 

## Example

```python
from openapi_client.models.get_inventory200_response import GetInventory200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetInventory200Response from a JSON string
get_inventory200_response_instance = GetInventory200Response.from_json(json)
# print the JSON string representation of the object
print(GetInventory200Response.to_json())

# convert the object into a dict
get_inventory200_response_dict = get_inventory200_response_instance.to_dict()
# create an instance of GetInventory200Response from a dict
get_inventory200_response_from_dict = GetInventory200Response.from_dict(get_inventory200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


