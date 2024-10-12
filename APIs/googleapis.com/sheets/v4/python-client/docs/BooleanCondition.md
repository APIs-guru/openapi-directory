# BooleanCondition

A condition that can evaluate to true or false. BooleanConditions are used by conditional formatting, data validation, and the criteria in filters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The type of condition. | [optional] 
**values** | [**List[ConditionValue]**](ConditionValue.md) | The values of the condition. The number of supported values depends on the condition type. Some support zero values, others one or two values, and ConditionType.ONE_OF_LIST supports an arbitrary number of values. | [optional] 

## Example

```python
from openapi_client.models.boolean_condition import BooleanCondition

# TODO update the JSON string below
json = "{}"
# create an instance of BooleanCondition from a JSON string
boolean_condition_instance = BooleanCondition.from_json(json)
# print the JSON string representation of the object
print(BooleanCondition.to_json())

# convert the object into a dict
boolean_condition_dict = boolean_condition_instance.to_dict()
# create an instance of BooleanCondition from a dict
boolean_condition_from_dict = BooleanCondition.from_dict(boolean_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


