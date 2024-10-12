# RuleCriteria

This type defines the fields for a set of inventory selection rules.  <br><br><b>Required:</b> When <b>inventoryCriterionType</b> is set to <code>INVENTORY_BY_RULE</code> or <code>INVENTORY_ANY</code>.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exclude_inventory_items** | [**List[InventoryItem]**](InventoryItem.md) | A list of seller inventory reference IDs to exclude from the promotion.  &lt;br&gt;&lt;br&gt;&lt;p class&#x3D;\&quot;tablenote\&quot;&gt;&lt;b&gt;Note:&lt;/b&gt; The request can have either &lt;b&gt;excludeInventoryItems&lt;/b&gt; or &lt;b&gt;excludeListingIds&lt;/b&gt; but not both.&lt;/p&gt; &lt;b&gt;Maximum:&lt;/b&gt; 100 parent items &lt;br&gt;&lt;b&gt;Maximum SKU or custom label length:&lt;/b&gt; 50 characters | [optional] 
**exclude_listing_ids** | **List[str]** | A list of eBay listing IDs to exclude from the promotion.  &lt;br&gt;&lt;br&gt;&lt;p class&#x3D;\&quot;tablenote\&quot;&gt;&lt;b&gt;Note:&lt;/b&gt; The request can have either &lt;b&gt;excludeInventoryItems&lt;/b&gt; or &lt;b&gt;excludeListingIds&lt;/b&gt; but not both.&lt;/p&gt; &lt;b&gt;Maximum:&lt;/b&gt; 100 parent items &lt;br&gt;&lt;b&gt;Maximum SKU or custom label length:&lt;/b&gt; 50 characters | [optional] 
**markup_inventory_items** | [**List[InventoryItem]**](InventoryItem.md) | A list of SKUs to remove from a markdown promotion. The listed SKUs are &#39;marked up&#39; to their standard price after being part of the markdown promotion. | [optional] 
**markup_listing_ids** | **List[str]** | A list of listing IDs to remove from a markdown promotion. The listed items are &#39;marked up&#39; to their standard price after being part of the markdown promotion. | [optional] 
**selection_rules** | [**List[SelectionRule]**](SelectionRule.md) | The container for the rules that select the items to include in a promotion.  &lt;br&gt;&lt;br&gt;&lt;i&gt;Required if &lt;/i&gt; &lt;b&gt;inventoryCriterionType&lt;/b&gt; is set to &lt;code&gt;INVENTORY_BY_RULE&lt;/code&gt;. &lt;br&gt;&lt;br&gt;For information on using the contained fields, see &lt;a href&#x3D; \&quot;/api-docs/sell/static/marketing/using-the-selectionrules-container.html#Promotio \&quot;&gt;Item promotions&lt;/a&gt;. | [optional] 

## Example

```python
from openapi_client.models.rule_criteria import RuleCriteria

# TODO update the JSON string below
json = "{}"
# create an instance of RuleCriteria from a JSON string
rule_criteria_instance = RuleCriteria.from_json(json)
# print the JSON string representation of the object
print(RuleCriteria.to_json())

# convert the object into a dict
rule_criteria_dict = rule_criteria_instance.to_dict()
# create an instance of RuleCriteria from a dict
rule_criteria_from_dict = RuleCriteria.from_dict(rule_criteria_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


