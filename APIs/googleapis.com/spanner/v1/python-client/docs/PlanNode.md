# PlanNode

Node information for nodes appearing in a QueryPlan.plan_nodes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**child_links** | [**List[ChildLink]**](ChildLink.md) | List of child node &#x60;index&#x60;es and their relationship to this parent. | [optional] 
**display_name** | **str** | The display name for the node. | [optional] 
**execution_stats** | **Dict[str, object]** | The execution statistics associated with the node, contained in a group of key-value pairs. Only present if the plan was returned as a result of a profile query. For example, number of executions, number of rows/time per execution etc. | [optional] 
**index** | **int** | The &#x60;PlanNode&#x60;&#39;s index in node list. | [optional] 
**kind** | **str** | Used to determine the type of node. May be needed for visualizing different kinds of nodes differently. For example, If the node is a SCALAR node, it will have a condensed representation which can be used to directly embed a description of the node in its parent. | [optional] 
**metadata** | **Dict[str, object]** | Attributes relevant to the node contained in a group of key-value pairs. For example, a Parameter Reference node could have the following information in its metadata: { \&quot;parameter_reference\&quot;: \&quot;param1\&quot;, \&quot;parameter_type\&quot;: \&quot;array\&quot; } | [optional] 
**short_representation** | [**ShortRepresentation**](ShortRepresentation.md) |  | [optional] 

## Example

```python
from openapi_client.models.plan_node import PlanNode

# TODO update the JSON string below
json = "{}"
# create an instance of PlanNode from a JSON string
plan_node_instance = PlanNode.from_json(json)
# print the JSON string representation of the object
print(PlanNode.to_json())

# convert the object into a dict
plan_node_dict = plan_node_instance.to_dict()
# create an instance of PlanNode from a dict
plan_node_from_dict = PlanNode.from_dict(plan_node_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


