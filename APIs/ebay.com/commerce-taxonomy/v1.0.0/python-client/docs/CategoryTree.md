# CategoryTree

This type contains information about all nodes of a specified eBay category tree.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicable_marketplace_ids** | **List[str]** | A list of one or more identifiers of the eBay marketplaces that use this category tree. | [optional] 
**category_tree_id** | **str** | The unique identifier of this eBay category tree. | [optional] 
**category_tree_version** | **str** | The version of this category tree. It&#39;s a good idea to cache this value for comparison so you can determine if this category tree has been modified in subsequent calls. | [optional] 
**root_category_node** | [**CategoryTreeNode**](CategoryTreeNode.md) |  | [optional] 

## Example

```python
from openapi_client.models.category_tree import CategoryTree

# TODO update the JSON string below
json = "{}"
# create an instance of CategoryTree from a JSON string
category_tree_instance = CategoryTree.from_json(json)
# print the JSON string representation of the object
print(CategoryTree.to_json())

# convert the object into a dict
category_tree_dict = category_tree_instance.to_dict()
# create an instance of CategoryTree from a dict
category_tree_from_dict = CategoryTree.from_dict(category_tree_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


