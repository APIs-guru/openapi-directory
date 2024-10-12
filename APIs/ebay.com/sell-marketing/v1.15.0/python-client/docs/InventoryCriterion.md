# InventoryCriterion

This type defines either the selections rules or the list of listing IDs for the promotion. The \"listing IDs\" are are either the seller's item IDs or the eBay listing IDs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inventory_criterion_type** | **str** | Indicates how the items to include in the promotion are selected. You can include inventory by ID, using rules, or globally include all your inventory.  For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/marketing/types/sme:InventoryCriterionEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**inventory_items** | [**List[InventoryItem]**](InventoryItem.md) | An array of containers for the seller&#39;s inventory reference IDs (also known as an \&quot;SKU\&quot; or \&quot;custom label\&quot;) to be added to the promotion.  &lt;p class&#x3D;\&quot;tablenote\&quot;&gt;&lt;b&gt;Note:&lt;/b&gt; The request can have either &lt;b&gt;inventoryItems&lt;/b&gt; or &lt;b&gt;listingIds&lt;/b&gt;, but not both.&lt;/p&gt;  &lt;br&gt;&lt;br&gt;&lt;b&gt;Required:&lt;/b&gt; All listings in a promotion must offer an electronic payment method.  &lt;br&gt;&lt;b&gt;Maximum:&lt;/b&gt; 500 parent items  &lt;br&gt;&lt;b&gt;Maximum SKU or custom label length:&lt;/b&gt; 50 characters &lt;br&gt;&lt;br&gt;&lt;i&gt;Required if &lt;/i&gt; &lt;b&gt;InventoryCriterionType&lt;/b&gt; is set to &lt;code&gt;INVENTORY_BY_VALUE&lt;/code&gt;, you must specify either &lt;b&gt;inventoryItems&lt;/b&gt; or &lt;b&gt;listingIds&lt;/b&gt;. | [optional] 
**listing_ids** | **List[str]** | An array of eBay listing IDs to be added to the promotion.  &lt;p class&#x3D;\&quot;tablenote\&quot;&gt;&lt;b&gt;Note:&lt;/b&gt; The request can have either &lt;b&gt;inventoryItems&lt;/b&gt; or &lt;b&gt;listingIds&lt;/b&gt;, but not both.&lt;/p&gt;  &lt;br&gt;&lt;br&gt;&lt;b&gt;Required:&lt;/b&gt; All listings in a promotion must offer an electronic payment method.  &lt;br&gt;&lt;b&gt;Maximum:&lt;/b&gt; 500 parent items  &lt;br&gt;&lt;b&gt;Maximum SKU or custom label length:&lt;/b&gt; 50 characters &lt;br&gt;&lt;br&gt;&lt;i&gt;Required if &lt;/i&gt; &lt;b&gt;InventoryCriterionType&lt;/b&gt; is set to &lt;code&gt;INVENTORY_BY_VALUE&lt;/code&gt;, you must specify either &lt;b&gt;inventoryItems&lt;/b&gt; or &lt;b&gt;listingIds&lt;/b&gt;. | [optional] 
**rule_criteria** | [**RuleCriteria**](RuleCriteria.md) |  | [optional] 

## Example

```python
from openapi_client.models.inventory_criterion import InventoryCriterion

# TODO update the JSON string below
json = "{}"
# create an instance of InventoryCriterion from a JSON string
inventory_criterion_instance = InventoryCriterion.from_json(json)
# print the JSON string representation of the object
print(InventoryCriterion.to_json())

# convert the object into a dict
inventory_criterion_dict = inventory_criterion_instance.to_dict()
# create an instance of InventoryCriterion from a dict
inventory_criterion_from_dict = InventoryCriterion.from_dict(inventory_criterion_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


