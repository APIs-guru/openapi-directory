# ItemConditionPolicy


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category_id** | **str** | The category ID to which the item-condition policy applies. | [optional] 
**category_tree_id** | **str** | A value that indicates the root node of the category tree used for the response set. Each marketplace is based on a category tree whose root node is indicated by this unique category ID value. All category policy information returned by this call pertains to the categories included below this root node of the tree.    &lt;br&gt;&lt;br&gt;A &lt;i&gt;category tree&lt;/i&gt; is a hierarchical framework of eBay categories that begins at the root node of the tree and extends to include all the child nodes in the tree. Each child node in the tree is an eBay category that is represented by a unique &lt;b&gt;categoryId&lt;/b&gt; value. Within a category tree, the root node has no parent node and &lt;i&gt;leaf nodes&lt;/i&gt; are nodes that have no child nodes. | [optional] 
**item_condition_required** | **bool** | This flag denotes whether or not you must list the item condition in a listing for the specified category. If set to &lt;code&gt;true&lt;/code&gt;, you must specify an item condition for the associated category. | [optional] 
**item_conditions** | [**List[ItemCondition]**](ItemCondition.md) | The item-condition values allowed in the category.&lt;br /&gt;&lt;br /&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;b&gt;Note:&lt;/b&gt; The ‘Seller Refurbished’ item condition (condition ID 2500) has been replaced by the &#39;Excellent - Refurbished&#39;, &#39;Very Good - Refurbished&#39;, and &#39;Good - Refurbished&#39; item conditions in a select number of eBay marketplaces and categories. See the &lt;a href&#x3D;\&quot;/api-docs/sell/static/metadata/condition-id-values.html#Category \&quot; target&#x3D;\&quot;_blank \&quot;&gt; eBay Refurbished Program - Category and marketplace support&lt;/a&gt; topic for more details.&lt;br/&gt;&lt;br/&gt;Similar to the ‘Certified Refurbished’ item condition (condition ID 2000), a seller’s OAuth user token will have to be used instead of an OAuth application token, since each seller must  go through an application and qualification process before using any of these new refurbished item conditions in supported categories. If a seller is not qualified to use the new refurbished item conditions, these item condition values will not be returned by &lt;b&gt;getItemConditionPolicies&lt;/b&gt;.&lt;/span&gt; | [optional] 

## Example

```python
from openapi_client.models.item_condition_policy import ItemConditionPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ItemConditionPolicy from a JSON string
item_condition_policy_instance = ItemConditionPolicy.from_json(json)
# print the JSON string representation of the object
print(ItemConditionPolicy.to_json())

# convert the object into a dict
item_condition_policy_dict = item_condition_policy_instance.to_dict()
# create an instance of ItemConditionPolicy from a dict
item_condition_policy_from_dict = ItemConditionPolicy.from_dict(item_condition_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


