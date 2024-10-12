# InventoryItem

This type defines the fields for the seller inventory reference IDs (also known as an \"SKU\" or \"custom label\").

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inventory_reference_id** | **str** | The seller&#39;s inventory reference ID for a listing. Also known as the \&quot;SKU\&quot; or \&quot;custom label,\&quot; an inventory reference ID is either the ID of the listing or, if the listing has variations (such as a shirt that&#39;s available in multiple sizes and colors), the ID of the parent listing. | [optional] 

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


