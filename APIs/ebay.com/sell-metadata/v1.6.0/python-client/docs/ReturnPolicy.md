# ReturnPolicy


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category_id** | **str** | The category ID to which the return policies apply. | [optional] 
**category_tree_id** | **str** | A value that indicates the root node of the category tree used for the response set. Each marketplace is based on a category tree whose root node is indicated by this unique category ID value. All category policy information returned by this call pertains to the categories included below this root node of the tree.    &lt;br&gt;&lt;br&gt;A &lt;i&gt;category tree&lt;/i&gt; is a hierarchical framework of eBay categories that begins at the root node of the tree and extends to include all the child nodes in the tree. Each child node in the tree is an eBay category that is represented by a unique &lt;b&gt;categoryId&lt;/b&gt; value. Within a category tree, the root node has no parent node and &lt;i&gt;leaf nodes&lt;/i&gt; are nodes that have no child nodes. | [optional] 
**domestic** | [**ReturnPolicyDetails**](ReturnPolicyDetails.md) |  | [optional] 
**international** | [**ReturnPolicyDetails**](ReturnPolicyDetails.md) |  | [optional] 
**required** | **bool** | If set to &lt;code&gt;true&lt;/code&gt;, this flag indicates that you must specify a return policy for items listed in the associated category.  &lt;br&gt;&lt;br&gt;Note that not accepting returns (setting &lt;b&gt;returnsAcceptedEnabled&lt;/b&gt; to &lt;code&gt;false&lt;/code&gt;) is a valid return policy. | [optional] 

## Example

```python
from openapi_client.models.return_policy import ReturnPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ReturnPolicy from a JSON string
return_policy_instance = ReturnPolicy.from_json(json)
# print the JSON string representation of the object
print(ReturnPolicy.to_json())

# convert the object into a dict
return_policy_dict = return_policy_instance.to_dict()
# create an instance of ReturnPolicy from a dict
return_policy_from_dict = ReturnPolicy.from_dict(return_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


