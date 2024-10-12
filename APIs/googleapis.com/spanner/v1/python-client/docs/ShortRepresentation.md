# ShortRepresentation

Condensed representation of a node and its subtree. Only present for `SCALAR` PlanNode(s).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | A string representation of the expression subtree rooted at this node. | [optional] 
**subqueries** | **Dict[str, int]** | A mapping of (subquery variable name) -&gt; (subquery node id) for cases where the &#x60;description&#x60; string of this node references a &#x60;SCALAR&#x60; subquery contained in the expression subtree rooted at this node. The referenced &#x60;SCALAR&#x60; subquery may not necessarily be a direct child of this node. | [optional] 

## Example

```python
from openapi_client.models.short_representation import ShortRepresentation

# TODO update the JSON string below
json = "{}"
# create an instance of ShortRepresentation from a JSON string
short_representation_instance = ShortRepresentation.from_json(json)
# print the JSON string representation of the object
print(ShortRepresentation.to_json())

# convert the object into a dict
short_representation_dict = short_representation_instance.to_dict()
# create an instance of ShortRepresentation from a dict
short_representation_from_dict = ShortRepresentation.from_dict(short_representation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


