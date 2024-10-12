# KeyValueTargetingExpression

Key Value Targeting Expression.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expression** | **str** | Keyword expression being targeted by the ad. | [optional] 

## Example

```python
from openapi_client.models.key_value_targeting_expression import KeyValueTargetingExpression

# TODO update the JSON string below
json = "{}"
# create an instance of KeyValueTargetingExpression from a JSON string
key_value_targeting_expression_instance = KeyValueTargetingExpression.from_json(json)
# print the JSON string representation of the object
print(KeyValueTargetingExpression.to_json())

# convert the object into a dict
key_value_targeting_expression_dict = key_value_targeting_expression_instance.to_dict()
# create an instance of KeyValueTargetingExpression from a dict
key_value_targeting_expression_from_dict = KeyValueTargetingExpression.from_dict(key_value_targeting_expression_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


