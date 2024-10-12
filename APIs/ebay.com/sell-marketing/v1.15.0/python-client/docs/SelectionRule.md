# SelectionRule

This type defines all rules/inclusion filters used to add listings to campaigns or promotions. Use of the specific fields is different for campaigns or promotions. See <a href= \"/api-docs/sell/static/marketing/using-the-selectionrules-container.html \">Using the selectionRules container</a>.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brands** | **List[str]** | An array of product brands. For more details, see &lt;a href&#x3D;\&quot;/api-docs/sell/static/marketing/using-the-selectionrules-container.html \&quot;&gt;Using the selectionRules container&lt;/a&gt;. | [optional] 
**category_ids** | **List[str]** | This field contains an array of the associated category ID(s).&lt;br&gt;&lt;br&gt;For &lt;a href&#x3D; \&quot;/api-docs/sell/static/marketing/using-the-selectionrules-container.html#Promotio \&quot;&gt;Item promotions&lt;/a&gt;, a single-item array containing the category ID associated with the promotion. Required when used in an Item promotion and either specifying a &lt;b&gt;selectionRules&lt;/b&gt; container or when &lt;b&gt;inventoryCriterionType&lt;/b&gt; is set to &lt;code&gt;INVENTORY_BY_RULE&lt;/code&gt;.&lt;br&gt;&lt;br&gt;For &lt;a href&#x3D; \&quot;/api-docs/sell/static/marketing/using-the-selectionrules-container.html#Campaign \&quot;&gt;Promoted Listing campaigns&lt;/a&gt;, an array of category ID(s) associated with the campaign. &lt;br&gt;&lt;br&gt;For information on how to get category IDs, see &lt;a href&#x3D; \&quot;/api-docs/sell/static/marketing/using-the-selectionrules-container.html#eBay \&quot;&gt;eBay Marketplace category IDs&lt;/a&gt; and &lt;a href&#x3D; \&quot;/api-docs/sell/static/marketing/using-the-selectionrules-container.html#Seller \&quot;&gt;Seller store category IDs&lt;/a&gt; | [optional] 
**category_scope** | **str** | This enumerated value indicates if the category ID for the item is an identifier for eBay categories or for a seller&#39;s eBay store categories. &lt;br&gt;&lt;br&gt;For &lt;a href&#x3D; \&quot;/api-docs/sell/static/marketing/using-the-selectionrules-container.html#Campaign \&quot;&gt;Promoted Listing campaigns&lt;/a&gt;, this field includes the type of the category ID for the item(s) to be included in the campaign.&lt;br&gt;&lt;br&gt;For &lt;a href&#x3D; \&quot;/api-docs/sell/static/marketing/using-the-selectionrules-container.html#Promotio \&quot;&gt;Item promotions&lt;/a&gt;, this field identifies the scope for the corresponding array as eBay categories or for a seller&#39;s eBay store categories. Required when used in an Item promotion and &lt;b&gt;inventoryCriterionType&lt;/b&gt; is set to &lt;code&gt;INVENTORY_BY_RULE&lt;/code&gt;.  For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/marketing/types/pls:CategoryScopeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**listing_condition_ids** | **List[str]** | A comma-separated list of unique identifiers for the conditions of listings to be included&lt;br&gt;&lt;br&gt;For &lt;a href&#x3D; \&quot;/api-docs/sell/static/marketing/using-the-selectionrules-container.html#Campaign \&quot;&gt;Promoted Listing campaigns&lt;/a&gt;, refer to &lt;a href&#x3D; \&quot;/api-docs/sell/static/marketing/pl-campaign-flow-pls.html#add-by-rule \&quot;&gt;Add items to the PLS campaign&lt;/a&gt;. Up to four IDs can be specified.&lt;br&gt;&lt;br&gt;For &lt;a href&#x3D; \&quot;/api-docs/sell/static/marketing/using-the-selectionrules-container.html#Promotio \&quot;&gt;Item promotions&lt;/a&gt;, refer to &lt;a href&#x3D; \&quot;/api-docs/sell/static/metadata/condition-id-values.html \&quot;&gt;Item condition ID and name values&lt;/a&gt;. | [optional] 
**max_price** | [**Amount**](Amount.md) |  | [optional] 
**min_price** | [**Amount**](Amount.md) |  | [optional] 

## Example

```python
from openapi_client.models.selection_rule import SelectionRule

# TODO update the JSON string below
json = "{}"
# create an instance of SelectionRule from a JSON string
selection_rule_instance = SelectionRule.from_json(json)
# print the JSON string representation of the object
print(SelectionRule.to_json())

# convert the object into a dict
selection_rule_dict = selection_rule_instance.to_dict()
# create an instance of SelectionRule from a dict
selection_rule_from_dict = SelectionRule.from_dict(selection_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


