# InventoryReference

This complex type is used to identify an item that is managed by the Inventory API. The type defines the fields contained in an inventory reference ID.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inventory_reference_id** | **str** | The seller&#39;s inventory reference ID for an item that is managed with the Inventory API.  &lt;br&gt;&lt;br&gt;An inventory reference is either the ID of a single listing or the ID of the parent of an item group listing (a multi-variation listing, such as a shirt that is available in multiple sizes and colors).  &lt;br&gt;&lt;br&gt;&lt;i&gt;Required if &lt;/i&gt; if you supply an &lt;b&gt;inventoryReferenceType&lt;/b&gt;. | [optional] 
**inventory_reference_type** | **str** | Indicates the type of item indicated by the &lt;b&gt;inventoryReferenceId&lt;/b&gt;.  &lt;br&gt;&lt;br&gt;This value can be set to either &lt;code&gt;INVENTORY_ITEM&lt;/code&gt; or &lt;code&gt;INVENTORY_ITEM_GROUP&lt;/code&gt; (if the ID points to a multi-variation listing). &lt;br&gt;&lt;br&gt;&lt;i&gt;Required if &lt;/i&gt; if you supply an &lt;b&gt;inventoryReferenceId&lt;/b&gt;. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/marketing/types/pls:InventoryReferenceTypeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 

## Example

```python
from openapi_client.models.inventory_reference import InventoryReference

# TODO update the JSON string below
json = "{}"
# create an instance of InventoryReference from a JSON string
inventory_reference_instance = InventoryReference.from_json(json)
# print the JSON string representation of the object
print(InventoryReference.to_json())

# convert the object into a dict
inventory_reference_dict = inventory_reference_instance.to_dict()
# create an instance of InventoryReference from a dict
inventory_reference_from_dict = InventoryReference.from_dict(inventory_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


