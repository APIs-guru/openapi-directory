# ArmTemplateParameter

Parameter to pass to ARM template

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | name of the parameter. | [optional] 
**value** | **str** | value for the parameter. In Jtoken  | [optional] 

## Example

```python
from openapi_client.models.arm_template_parameter import ArmTemplateParameter

# TODO update the JSON string below
json = "{}"
# create an instance of ArmTemplateParameter from a JSON string
arm_template_parameter_instance = ArmTemplateParameter.from_json(json)
# print the JSON string representation of the object
print(ArmTemplateParameter.to_json())

# convert the object into a dict
arm_template_parameter_dict = arm_template_parameter_instance.to_dict()
# create an instance of ArmTemplateParameter from a dict
arm_template_parameter_from_dict = ArmTemplateParameter.from_dict(arm_template_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


