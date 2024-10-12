# ListingStructurePolicy


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category_id** | **str** | The category ID to which the listing-structure policy applies. | [optional] 
**category_tree_id** | **str** | A value that indicates the root node of the category tree used for the response set. Each marketplace is based on a category tree whose root node is indicated by this unique category ID value. All category policy information returned by this call pertains to the categories included below this root node of the tree.    &lt;br&gt;&lt;br&gt;A &lt;i&gt;category tree&lt;/i&gt; is a hierarchical framework of eBay categories that begins at the root node of the tree and extends to include all the child nodes in the tree. Each child node in the tree is an eBay category that is represented by a unique &lt;b&gt;categoryId&lt;/b&gt; value. Within a category tree, the root node has no parent node and &lt;i&gt;leaf nodes&lt;/i&gt; are nodes that have no child nodes. | [optional] 
**variations_supported** | **bool** | This flag denotes whether or not the associated category supports listings with item variations. If set to &lt;code&gt;true&lt;/code&gt;, the category does support item variations. | [optional] 

## Example

```python
from openapi_client.models.listing_structure_policy import ListingStructurePolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ListingStructurePolicy from a JSON string
listing_structure_policy_instance = ListingStructurePolicy.from_json(json)
# print the JSON string representation of the object
print(ListingStructurePolicy.to_json())

# convert the object into a dict
listing_structure_policy_dict = listing_structure_policy_instance.to_dict()
# create an instance of ListingStructurePolicy from a dict
listing_structure_policy_from_dict = ListingStructurePolicy.from_dict(listing_structure_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


