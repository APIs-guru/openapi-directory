# ArmTemplate

An Azure Resource Manager template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ArmTemplateProperties**](ArmTemplateProperties.md) |  | 
**id** | **str** | The identifier of the resource. | [optional] [readonly] 
**location** | **str** | The location of the resource. | [optional] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | The tags of the resource. | [optional] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.arm_template import ArmTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of ArmTemplate from a JSON string
arm_template_instance = ArmTemplate.from_json(json)
# print the JSON string representation of the object
print(ArmTemplate.to_json())

# convert the object into a dict
arm_template_dict = arm_template_instance.to_dict()
# create an instance of ArmTemplate from a dict
arm_template_from_dict = ArmTemplate.from_dict(arm_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


