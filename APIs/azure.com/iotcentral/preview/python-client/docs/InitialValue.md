# InitialValue


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
**value** | **object** | The initial value of the capability. | [optional] 

## Example

```python
from openapi_client.models.initial_value import InitialValue

# TODO update the JSON string below
json = "{}"
# create an instance of InitialValue from a JSON string
initial_value_instance = InitialValue.from_json(json)
# print the JSON string representation of the object
print(InitialValue.to_json())

# convert the object into a dict
initial_value_dict = initial_value_instance.to_dict()
# create an instance of InitialValue from a dict
initial_value_from_dict = InitialValue.from_dict(initial_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


