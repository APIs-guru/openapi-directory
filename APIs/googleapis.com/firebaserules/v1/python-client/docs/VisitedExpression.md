# VisitedExpression

Store the position and access outcome for an expression visited in rules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_position** | [**SourcePosition**](SourcePosition.md) |  | [optional] 
**value** | **object** | The evaluated value for the visited expression, e.g. true/false | [optional] 

## Example

```python
from openapi_client.models.visited_expression import VisitedExpression

# TODO update the JSON string below
json = "{}"
# create an instance of VisitedExpression from a JSON string
visited_expression_instance = VisitedExpression.from_json(json)
# print the JSON string representation of the object
print(VisitedExpression.to_json())

# convert the object into a dict
visited_expression_dict = visited_expression_instance.to_dict()
# create an instance of VisitedExpression from a dict
visited_expression_from_dict = VisitedExpression.from_dict(visited_expression_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


