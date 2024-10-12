# ConditionValue

The value of the condition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**relative_date** | **str** | A relative date (based on the current date). Valid only if the type is DATE_BEFORE, DATE_AFTER, DATE_ON_OR_BEFORE or DATE_ON_OR_AFTER. Relative dates are not supported in data validation. They are supported only in conditional formatting and conditional filters. | [optional] 
**user_entered_value** | **str** | A value the condition is based on. The value is parsed as if the user typed into a cell. Formulas are supported (and must begin with an &#x60;&#x3D;&#x60; or a &#39;+&#39;). | [optional] 

## Example

```python
from openapi_client.models.condition_value import ConditionValue

# TODO update the JSON string below
json = "{}"
# create an instance of ConditionValue from a JSON string
condition_value_instance = ConditionValue.from_json(json)
# print the JSON string representation of the object
print(ConditionValue.to_json())

# convert the object into a dict
condition_value_dict = condition_value_instance.to_dict()
# create an instance of ConditionValue from a dict
condition_value_from_dict = ConditionValue.from_dict(condition_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


