# ActivityParameterValidationSet

Definition of the activity parameter validation set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**member_value** | **str** | Gets or sets the name of the activity parameter validation set member. | [optional] 

## Example

```python
from openapi_client.models.activity_parameter_validation_set import ActivityParameterValidationSet

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityParameterValidationSet from a JSON string
activity_parameter_validation_set_instance = ActivityParameterValidationSet.from_json(json)
# print the JSON string representation of the object
print(ActivityParameterValidationSet.to_json())

# convert the object into a dict
activity_parameter_validation_set_dict = activity_parameter_validation_set_instance.to_dict()
# create an instance of ActivityParameterValidationSet from a dict
activity_parameter_validation_set_from_dict = ActivityParameterValidationSet.from_dict(activity_parameter_validation_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


