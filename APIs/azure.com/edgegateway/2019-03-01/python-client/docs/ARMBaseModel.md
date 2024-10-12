# ARMBaseModel

Represents the base class for all object models.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The path ID that uniquely identifies the object. | [optional] [readonly] 
**name** | **str** | The object name. | [optional] [readonly] 
**type** | **str** | The hierarchical type of the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.arm_base_model import ARMBaseModel

# TODO update the JSON string below
json = "{}"
# create an instance of ARMBaseModel from a JSON string
arm_base_model_instance = ARMBaseModel.from_json(json)
# print the JSON string representation of the object
print(ARMBaseModel.to_json())

# convert the object into a dict
arm_base_model_dict = arm_base_model_instance.to_dict()
# create an instance of ARMBaseModel from a dict
arm_base_model_from_dict = ARMBaseModel.from_dict(arm_base_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


