# Override


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | **object** | JSON-LD context for the entity. | [optional] 
**id** | **str** | Unique ID of the entity. | [optional] 
**type** | **List[str]** | Type of the entity. | 
**comment** | **str** | Developer comment about the entity. | [optional] 
**description** | **str** | Detailed description of the entity. | [optional] 
**display_name** | **str** | Display name of the entity. | [optional] 
**capability** | [**CapabilityReference**](CapabilityReference.md) |  | [optional] 
**display_unit** | **str** | The overridden display unit. | [optional] 
**semantic_type** | **str** | The overridden semantic type. | [optional] 
**unit** | **str** | The overridden unit. | [optional] 
**value_detail** | [**ValueDetail**](ValueDetail.md) |  | [optional] 

## Example

```python
from openapi_client.models.override import Override

# TODO update the JSON string below
json = "{}"
# create an instance of Override from a JSON string
override_instance = Override.from_json(json)
# print the JSON string representation of the object
print(Override.to_json())

# convert the object into a dict
override_dict = override_instance.to_dict()
# create an instance of Override from a dict
override_from_dict = Override.from_dict(override_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


