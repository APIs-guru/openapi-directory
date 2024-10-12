# HierarchiesExpandParameter

Definition of whether to expand hierarchy nodes in the same search instances call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Kind of the expansion of hierarchy nodes. When it is set to &#39;UntilChildren&#39;, the hierarchy nodes are expanded recursively until there is more than one child. When it is set to &#39;OneLevel&#39;, the hierarchies are expanded only at the single level matching path search instances parameter. Optional, default is &#39;UntilChildren&#39;. | [optional] 

## Example

```python
from openapi_client.models.hierarchies_expand_parameter import HierarchiesExpandParameter

# TODO update the JSON string below
json = "{}"
# create an instance of HierarchiesExpandParameter from a JSON string
hierarchies_expand_parameter_instance = HierarchiesExpandParameter.from_json(json)
# print the JSON string representation of the object
print(HierarchiesExpandParameter.to_json())

# convert the object into a dict
hierarchies_expand_parameter_dict = hierarchies_expand_parameter_instance.to_dict()
# create an instance of HierarchiesExpandParameter from a dict
hierarchies_expand_parameter_from_dict = HierarchiesExpandParameter.from_dict(hierarchies_expand_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


