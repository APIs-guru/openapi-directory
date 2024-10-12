# ArmTemplateList

The response of a list operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next set of results. | [optional] 
**value** | [**List[ArmTemplate]**](ArmTemplate.md) | Results of the list operation. | [optional] 

## Example

```python
from openapi_client.models.arm_template_list import ArmTemplateList

# TODO update the JSON string below
json = "{}"
# create an instance of ArmTemplateList from a JSON string
arm_template_list_instance = ArmTemplateList.from_json(json)
# print the JSON string representation of the object
print(ArmTemplateList.to_json())

# convert the object into a dict
arm_template_list_dict = arm_template_list_instance.to_dict()
# create an instance of ArmTemplateList from a dict
arm_template_list_from_dict = ArmTemplateList.from_dict(arm_template_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


