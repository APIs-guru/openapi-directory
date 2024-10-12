# ListTargetingExpression

Remarketing List Targeting Expression.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expression** | **str** | Expression describing which lists are being targeted by the ad. | [optional] 

## Example

```python
from openapi_client.models.list_targeting_expression import ListTargetingExpression

# TODO update the JSON string below
json = "{}"
# create an instance of ListTargetingExpression from a JSON string
list_targeting_expression_instance = ListTargetingExpression.from_json(json)
# print the JSON string representation of the object
print(ListTargetingExpression.to_json())

# convert the object into a dict
list_targeting_expression_dict = list_targeting_expression_instance.to_dict()
# create an instance of ListTargetingExpression from a dict
list_targeting_expression_from_dict = ListTargetingExpression.from_dict(list_targeting_expression_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


