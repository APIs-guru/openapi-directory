# InventoryItem

Represents a buy from the Planning inventory store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account ID of this inventory item. | [optional] 
**ad_slots** | [**List[AdSlot]**](AdSlot.md) | Ad slots of this inventory item. If this inventory item represents a standalone placement, there will be exactly one ad slot. If this inventory item represents a placement group, there will be more than one ad slot, each representing one child placement in that placement group. | [optional] 
**advertiser_id** | **str** | Advertiser ID of this inventory item. | [optional] 
**content_category_id** | **str** | Content category ID of this inventory item. | [optional] 
**estimated_click_through_rate** | **str** | Estimated click-through rate of this inventory item. | [optional] 
**estimated_conversion_rate** | **str** | Estimated conversion rate of this inventory item. | [optional] 
**id** | **str** | ID of this inventory item. | [optional] 
**in_plan** | **bool** | Whether this inventory item is in plan. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#inventoryItem\&quot;. | [optional] 
**last_modified_info** | [**LastModifiedInfo**](LastModifiedInfo.md) |  | [optional] 
**name** | **str** | Name of this inventory item. For standalone inventory items, this is the same name as that of its only ad slot. For group inventory items, this can differ from the name of any of its ad slots. | [optional] 
**negotiation_channel_id** | **str** | Negotiation channel ID of this inventory item. | [optional] 
**order_id** | **str** | Order ID of this inventory item. | [optional] 
**placement_strategy_id** | **str** | Placement strategy ID of this inventory item. | [optional] 
**pricing** | [**Pricing**](Pricing.md) |  | [optional] 
**project_id** | **str** | Project ID of this inventory item. | [optional] 
**rfp_id** | **str** | RFP ID of this inventory item. | [optional] 
**site_id** | **str** | ID of the site this inventory item is associated with. | [optional] 
**subaccount_id** | **str** | Subaccount ID of this inventory item. | [optional] 
**type** | **str** | Type of inventory item. | [optional] 

## Example

```python
from openapi_client.models.inventory_item import InventoryItem

# TODO update the JSON string below
json = "{}"
# create an instance of InventoryItem from a JSON string
inventory_item_instance = InventoryItem.from_json(json)
# print the JSON string representation of the object
print(InventoryItem.to_json())

# convert the object into a dict
inventory_item_dict = inventory_item_instance.to_dict()
# create an instance of InventoryItem from a dict
inventory_item_from_dict = InventoryItem.from_dict(inventory_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


