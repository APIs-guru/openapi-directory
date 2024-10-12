# CapabilityModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | **object** | JSON-LD context for the entity. | [optional] 
**id** | **str** | Unique ID of the entity. | [optional] 
**type** | **List[str]** | Type of the entity. | 
**comment** | **str** | Developer comment about the entity. | [optional] 
**description** | **str** | Detailed description of the entity. | [optional] 
**display_name** | **str** | Display name of the entity. | [optional] 
**contents** | [**List[NamedEntity]**](NamedEntity.md) | The relationships contained by the capability model. | [optional] 
**implements** | [**List[Component]**](Component.md) | The component implemented by the capability model. | [optional] 

## Example

```python
from openapi_client.models.capability_model import CapabilityModel

# TODO update the JSON string below
json = "{}"
# create an instance of CapabilityModel from a JSON string
capability_model_instance = CapabilityModel.from_json(json)
# print the JSON string representation of the object
print(CapabilityModel.to_json())

# convert the object into a dict
capability_model_dict = capability_model_instance.to_dict()
# create an instance of CapabilityModel from a dict
capability_model_from_dict = CapabilityModel.from_dict(capability_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


