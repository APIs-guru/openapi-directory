# ActivityParameter

Definition of the activity parameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Gets or sets the description of the activity parameter. | [optional] 
**is_dynamic** | **bool** | Gets or sets a Boolean value that indicates true if the parameter is dynamic. | [optional] 
**is_mandatory** | **bool** | Gets or sets a Boolean value that indicates true if the parameter is required. If the value is false, the parameter is optional. | [optional] 
**name** | **str** | Gets or sets the name of the activity parameter. | [optional] 
**position** | **int** | Gets or sets the position of the activity parameter. | [optional] 
**type** | **str** | Gets or sets the type of the activity parameter. | [optional] 
**validation_set** | [**List[ActivityParameterValidationSet]**](ActivityParameterValidationSet.md) | Gets or sets the validation set of activity parameter. | [optional] 
**value_from_pipeline** | **bool** | Gets or sets a Boolean value that indicates true if the parameter can take values from the incoming pipeline objects. This setting is used if the cmdlet must access the complete input object. false indicates that the parameter cannot take values from the complete input object. | [optional] 
**value_from_pipeline_by_property_name** | **bool** | Gets or sets a Boolean value that indicates true if the parameter can be filled from a property of the incoming pipeline object that has the same name as this parameter. false indicates that the parameter cannot be filled from the incoming pipeline object property with the same name.  | [optional] 
**value_from_remaining_arguments** | **bool** | Gets or sets a Boolean value that indicates true if the cmdlet parameter accepts all the remaining command-line arguments that are associated with this parameter in the form of an array. false if the cmdlet parameter does not accept all the remaining argument values. | [optional] 

## Example

```python
from openapi_client.models.activity_parameter import ActivityParameter

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityParameter from a JSON string
activity_parameter_instance = ActivityParameter.from_json(json)
# print the JSON string representation of the object
print(ActivityParameter.to_json())

# convert the object into a dict
activity_parameter_dict = activity_parameter_instance.to_dict()
# create an instance of ActivityParameter from a dict
activity_parameter_from_dict = ActivityParameter.from_dict(activity_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


