# CategorySubtree

This type contains information about a particular subtree of a specified eBay category tree. A category subtree consists of a non-root node of the category tree, and all of its descendants down to the leaf nodes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category_subtree_node** | [**CategoryTreeNode**](CategoryTreeNode.md) |  | [optional] 
**category_tree_id** | **str** | The unique identifier of the eBay category tree to which this subtree belongs. | [optional] 
**category_tree_version** | **str** | The version of the category tree identified by categoryTreeId. It&#39;s a good idea to cache this value for comparison so you can determine if this category tree has been modified in subsequent calls. | [optional] 

## Example

```python
from openapi_client.models.category_subtree import CategorySubtree

# TODO update the JSON string below
json = "{}"
# create an instance of CategorySubtree from a JSON string
category_subtree_instance = CategorySubtree.from_json(json)
# print the JSON string representation of the object
print(CategorySubtree.to_json())

# convert the object into a dict
category_subtree_dict = category_subtree_instance.to_dict()
# create an instance of CategorySubtree from a dict
category_subtree_from_dict = CategorySubtree.from_dict(category_subtree_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


