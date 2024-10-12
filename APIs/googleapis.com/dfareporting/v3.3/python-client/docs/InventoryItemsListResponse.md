# InventoryItemsListResponse

Inventory item List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inventory_items** | [**List[InventoryItem]**](InventoryItem.md) | Inventory item collection | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#inventoryItemsListResponse\&quot;. | [optional] 
**next_page_token** | **str** | Pagination token to be used for the next list operation. | [optional] 

## Example

```python
from openapi_client.models.inventory_items_list_response import InventoryItemsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of InventoryItemsListResponse from a JSON string
inventory_items_list_response_instance = InventoryItemsListResponse.from_json(json)
# print the JSON string representation of the object
print(InventoryItemsListResponse.to_json())

# convert the object into a dict
inventory_items_list_response_dict = inventory_items_list_response_instance.to_dict()
# create an instance of InventoryItemsListResponse from a dict
inventory_items_list_response_from_dict = InventoryItemsListResponse.from_dict(inventory_items_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


