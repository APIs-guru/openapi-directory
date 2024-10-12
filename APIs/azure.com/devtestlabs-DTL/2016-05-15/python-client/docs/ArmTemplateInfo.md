# ArmTemplateInfo

Information about a generated ARM template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | **object** | The parameters of the ARM template. | [optional] 
**template** | **object** | The template&#39;s contents. | [optional] 

## Example

```python
from openapi_client.models.arm_template_info import ArmTemplateInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ArmTemplateInfo from a JSON string
arm_template_info_instance = ArmTemplateInfo.from_json(json)
# print the JSON string representation of the object
print(ArmTemplateInfo.to_json())

# convert the object into a dict
arm_template_info_dict = arm_template_info_instance.to_dict()
# create an instance of ArmTemplateInfo from a dict
arm_template_info_from_dict = ArmTemplateInfo.from_dict(arm_template_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


