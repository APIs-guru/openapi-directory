# ArmTemplateProperties

Properties of an Azure Resource Manager template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contents** | **object** | The contents of the ARM template. | [optional] [readonly] 
**created_date** | **datetime** | The creation date of the armTemplate. | [optional] [readonly] 
**description** | **str** | The description of the ARM template. | [optional] [readonly] 
**display_name** | **str** | The display name of the ARM template. | [optional] [readonly] 
**icon** | **str** | The URI to the icon of the ARM template. | [optional] [readonly] 
**parameters_value_files_info** | [**List[ParametersValueFileInfo]**](ParametersValueFileInfo.md) | File name and parameter values information from all azuredeploy.*.parameters.json for the ARM template. | [optional] [readonly] 
**publisher** | **str** | The publisher of the ARM template. | [optional] [readonly] 

## Example

```python
from openapi_client.models.arm_template_properties import ArmTemplateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ArmTemplateProperties from a JSON string
arm_template_properties_instance = ArmTemplateProperties.from_json(json)
# print the JSON string representation of the object
print(ArmTemplateProperties.to_json())

# convert the object into a dict
arm_template_properties_dict = arm_template_properties_instance.to_dict()
# create an instance of ArmTemplateProperties from a dict
arm_template_properties_from_dict = ArmTemplateProperties.from_dict(arm_template_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


