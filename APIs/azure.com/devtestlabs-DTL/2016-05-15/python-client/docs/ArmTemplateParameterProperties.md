# ArmTemplateParameterProperties

Properties of an Azure Resource Manager template parameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the template parameter. | [optional] 
**value** | **str** | The value of the template parameter. | [optional] 

## Example

```python
from openapi_client.models.arm_template_parameter_properties import ArmTemplateParameterProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ArmTemplateParameterProperties from a JSON string
arm_template_parameter_properties_instance = ArmTemplateParameterProperties.from_json(json)
# print the JSON string representation of the object
print(ArmTemplateParameterProperties.to_json())

# convert the object into a dict
arm_template_parameter_properties_dict = arm_template_parameter_properties_instance.to_dict()
# create an instance of ArmTemplateParameterProperties from a dict
arm_template_parameter_properties_from_dict = ArmTemplateParameterProperties.from_dict(arm_template_parameter_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


