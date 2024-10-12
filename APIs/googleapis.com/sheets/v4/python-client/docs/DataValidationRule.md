# DataValidationRule

A data validation rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**condition** | [**BooleanCondition**](BooleanCondition.md) |  | [optional] 
**input_message** | **str** | A message to show the user when adding data to the cell. | [optional] 
**show_custom_ui** | **bool** | True if the UI should be customized based on the kind of condition. If true, \&quot;List\&quot; conditions will show a dropdown. | [optional] 
**strict** | **bool** | True if invalid data should be rejected. | [optional] 

## Example

```python
from openapi_client.models.data_validation_rule import DataValidationRule

# TODO update the JSON string below
json = "{}"
# create an instance of DataValidationRule from a JSON string
data_validation_rule_instance = DataValidationRule.from_json(json)
# print the JSON string representation of the object
print(DataValidationRule.to_json())

# convert the object into a dict
data_validation_rule_dict = data_validation_rule_instance.to_dict()
# create an instance of DataValidationRule from a dict
data_validation_rule_from_dict = DataValidationRule.from_dict(data_validation_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


