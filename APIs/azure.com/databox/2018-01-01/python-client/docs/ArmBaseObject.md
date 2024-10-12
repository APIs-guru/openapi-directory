# ArmBaseObject

Base class for all objects under resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Id of the object. | [optional] [readonly] 
**name** | **str** | Name of the object. | [optional] [readonly] 
**type** | **str** | Type of the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.arm_base_object import ArmBaseObject

# TODO update the JSON string below
json = "{}"
# create an instance of ArmBaseObject from a JSON string
arm_base_object_instance = ArmBaseObject.from_json(json)
# print the JSON string representation of the object
print(ArmBaseObject.to_json())

# convert the object into a dict
arm_base_object_dict = arm_base_object_instance.to_dict()
# create an instance of ArmBaseObject from a dict
arm_base_object_from_dict = ArmBaseObject.from_dict(arm_base_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


