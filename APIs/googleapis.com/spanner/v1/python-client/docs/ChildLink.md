# ChildLink

Metadata associated with a parent-child relationship appearing in a PlanNode.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**child_index** | **int** | The node to which the link points. | [optional] 
**type** | **str** | The type of the link. For example, in Hash Joins this could be used to distinguish between the build child and the probe child, or in the case of the child being an output variable, to represent the tag associated with the output variable. | [optional] 
**variable** | **str** | Only present if the child node is SCALAR and corresponds to an output variable of the parent node. The field carries the name of the output variable. For example, a &#x60;TableScan&#x60; operator that reads rows from a table will have child links to the &#x60;SCALAR&#x60; nodes representing the output variables created for each column that is read by the operator. The corresponding &#x60;variable&#x60; fields will be set to the variable names assigned to the columns. | [optional] 

## Example

```python
from openapi_client.models.child_link import ChildLink

# TODO update the JSON string below
json = "{}"
# create an instance of ChildLink from a JSON string
child_link_instance = ChildLink.from_json(json)
# print the JSON string representation of the object
print(ChildLink.to_json())

# convert the object into a dict
child_link_dict = child_link_instance.to_dict()
# create an instance of ChildLink from a dict
child_link_from_dict = ChildLink.from_dict(child_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


