# Component


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | **object** | JSON-LD context for the entity. | [optional] 
**id** | **str** | Unique ID of the entity. | [optional] 
**type** | **List[str]** | Type of the entity. | 
**comment** | **str** | Developer comment about the entity. | [optional] 
**description** | **str** | Detailed description of the entity. | [optional] 
**display_name** | **str** | Display name of the entity. | [optional] 
**name** | **str** | The programmatic name of the named entity. | 
**var_schema** | [**Interface**](Interface.md) |  | [optional] 

## Example

```python
from openapi_client.models.component import Component

# TODO update the JSON string below
json = "{}"
# create an instance of Component from a JSON string
component_instance = Component.from_json(json)
# print the JSON string representation of the object
print(Component.to_json())

# convert the object into a dict
component_dict = component_instance.to_dict()
# create an instance of Component from a dict
component_from_dict = Component.from_dict(component_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


