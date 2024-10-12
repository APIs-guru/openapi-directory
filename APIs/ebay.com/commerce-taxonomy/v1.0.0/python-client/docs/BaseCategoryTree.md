# BaseCategoryTree

This type contains identifying information for the category tree associated with a particular eBay marketplace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category_tree_id** | **str** | The unique identifier of the eBay category tree for the specified marketplace. | [optional] 
**category_tree_version** | **str** | The version of the category tree identified by categoryTreeId. It&#39;s a good idea to cache this value for comparison so you can determine if this category tree has been modified in subsequent calls. | [optional] 

## Example

```python
from openapi_client.models.base_category_tree import BaseCategoryTree

# TODO update the JSON string below
json = "{}"
# create an instance of BaseCategoryTree from a JSON string
base_category_tree_instance = BaseCategoryTree.from_json(json)
# print the JSON string representation of the object
print(BaseCategoryTree.to_json())

# convert the object into a dict
base_category_tree_dict = base_category_tree_instance.to_dict()
# create an instance of BaseCategoryTree from a dict
base_category_tree_from_dict = BaseCategoryTree.from_dict(base_category_tree_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


