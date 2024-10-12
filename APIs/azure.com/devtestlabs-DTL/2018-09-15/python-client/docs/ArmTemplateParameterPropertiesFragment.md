# ArmTemplateParameterPropertiesFragment

Properties of an Azure Resource Manager template parameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the template parameter. | [optional] 
**value** | **str** | The value of the template parameter. | [optional] 

## Example

```python
from openapi_client.models.arm_template_parameter_properties_fragment import ArmTemplateParameterPropertiesFragment

# TODO update the JSON string below
json = "{}"
# create an instance of ArmTemplateParameterPropertiesFragment from a JSON string
arm_template_parameter_properties_fragment_instance = ArmTemplateParameterPropertiesFragment.from_json(json)
# print the JSON string representation of the object
print(ArmTemplateParameterPropertiesFragment.to_json())

# convert the object into a dict
arm_template_parameter_properties_fragment_dict = arm_template_parameter_properties_fragment_instance.to_dict()
# create an instance of ArmTemplateParameterPropertiesFragment from a dict
arm_template_parameter_properties_fragment_from_dict = ArmTemplateParameterPropertiesFragment.from_dict(arm_template_parameter_properties_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


