# UserDefinedVariableConfiguration

User Defined Variable configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_type** | **str** | Data type for the variable. This is a required field. | [optional] 
**report_name** | **str** | User-friendly name for the variable which will appear in reports. This is a required field, must be less than 64 characters long, and cannot contain the following characters: \&quot;\&quot;&lt;&gt;\&quot;. | [optional] 
**variable_type** | **str** | Variable name in the tag. This is a required field. | [optional] 

## Example

```python
from openapi_client.models.user_defined_variable_configuration import UserDefinedVariableConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of UserDefinedVariableConfiguration from a JSON string
user_defined_variable_configuration_instance = UserDefinedVariableConfiguration.from_json(json)
# print the JSON string representation of the object
print(UserDefinedVariableConfiguration.to_json())

# convert the object into a dict
user_defined_variable_configuration_dict = user_defined_variable_configuration_instance.to_dict()
# create an instance of UserDefinedVariableConfiguration from a dict
user_defined_variable_configuration_from_dict = UserDefinedVariableConfiguration.from_dict(user_defined_variable_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


