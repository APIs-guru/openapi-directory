# CapabilityReference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | **object** | JSON-LD context for the entity. | [optional] 
**id** | **str** | Unique ID of the entity. | [optional] 
**type** | **List[str]** | Type of the entity. | 
**comment** | **str** | Developer comment about the entity. | [optional] 
**description** | **str** | Detailed description of the entity. | [optional] 
**display_name** | **str** | Display name of the entity. | [optional] 
**component** | **str** | The name of the component being referenced. | [optional] 
**reference** | **str** | The name of the capability being referenced. | [optional] 

## Example

```python
from openapi_client.models.capability_reference import CapabilityReference

# TODO update the JSON string below
json = "{}"
# create an instance of CapabilityReference from a JSON string
capability_reference_instance = CapabilityReference.from_json(json)
# print the JSON string representation of the object
print(CapabilityReference.to_json())

# convert the object into a dict
capability_reference_dict = capability_reference_instance.to_dict()
# create an instance of CapabilityReference from a dict
capability_reference_from_dict = CapabilityReference.from_dict(capability_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


