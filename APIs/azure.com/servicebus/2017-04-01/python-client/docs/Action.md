# Action

Represents the filter actions which are allowed for the transformation of a message that have been matched by a filter expression.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compatibility_level** | **int** | This property is reserved for future use. An integer value showing the compatibility level, currently hard-coded to 20. | [optional] 
**requires_preprocessing** | **bool** | Value that indicates whether the rule action requires preprocessing. | [optional] [default to True]
**sql_expression** | **str** | SQL expression. e.g. MyProperty&#x3D;&#39;ABC&#39; | [optional] 

## Example

```python
from openapi_client.models.action import Action

# TODO update the JSON string below
json = "{}"
# create an instance of Action from a JSON string
action_instance = Action.from_json(json)
# print the JSON string representation of the object
print(Action.to_json())

# convert the object into a dict
action_dict = action_instance.to_dict()
# create an instance of Action from a dict
action_from_dict = Action.from_dict(action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


