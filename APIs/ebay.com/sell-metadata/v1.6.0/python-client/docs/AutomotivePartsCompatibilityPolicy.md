# AutomotivePartsCompatibilityPolicy


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category_id** | **str** | The category ID to which the automotive-parts-compatibility policies apply. | [optional] 
**category_tree_id** | **str** | A value that indicates the root node of the category tree used for the response set. Each marketplace is based on a category tree whose root node is indicated by this unique category ID value. All category policy information returned by this call pertains to the categories included below this root node of the tree.    &lt;br&gt;&lt;br&gt;A &lt;i&gt;category tree&lt;/i&gt; is a hierarchical framework of eBay categories that begins at the root node of the tree and extends to include all the child nodes in the tree. Each child node in the tree is an eBay category that is represented by a unique &lt;b&gt;categoryId&lt;/b&gt; value. Within a category tree, the root node has no parent node and &lt;i&gt;leaf nodes&lt;/i&gt; are nodes that have no child nodes. | [optional] 
**compatibility_based_on** | **str** | Indicates whether the category supports parts compatibility by either &lt;code&gt;ASSEMBLY&lt;/code&gt; or by &lt;code&gt;SPECIFICATION&lt;/code&gt;. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/metadata/types/sel:CompatibilityTypeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**compatible_vehicle_types** | **List[str]** | Indicates the compatibility classification of the part based on high-level vehicle types. | [optional] 
**max_number_of_compatible_vehicles** | **int** | Specifies the maximum number of compatible vehicle-applications allowed per item. | [optional] 

## Example

```python
from openapi_client.models.automotive_parts_compatibility_policy import AutomotivePartsCompatibilityPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of AutomotivePartsCompatibilityPolicy from a JSON string
automotive_parts_compatibility_policy_instance = AutomotivePartsCompatibilityPolicy.from_json(json)
# print the JSON string representation of the object
print(AutomotivePartsCompatibilityPolicy.to_json())

# convert the object into a dict
automotive_parts_compatibility_policy_dict = automotive_parts_compatibility_policy_instance.to_dict()
# create an instance of AutomotivePartsCompatibilityPolicy from a dict
automotive_parts_compatibility_policy_from_dict = AutomotivePartsCompatibilityPolicy.from_dict(automotive_parts_compatibility_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


