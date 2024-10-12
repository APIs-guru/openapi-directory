# Entity

A workspace entity that may represent a tag, trigger, variable, or folder in addition to its status in the workspace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**built_in_variable** | [**BuiltInVariable**](BuiltInVariable.md) |  | [optional] 
**change_status** | **str** | Represents how the entity has been changed in the workspace. | [optional] 
**client** | [**Client**](Client.md) |  | [optional] 
**custom_template** | [**CustomTemplate**](CustomTemplate.md) |  | [optional] 
**folder** | [**Folder**](Folder.md) |  | [optional] 
**gtag_config** | [**GtagConfig**](GtagConfig.md) |  | [optional] 
**tag** | [**Tag**](Tag.md) |  | [optional] 
**transformation** | [**Transformation**](Transformation.md) |  | [optional] 
**trigger** | [**Trigger**](Trigger.md) |  | [optional] 
**variable** | [**Variable**](Variable.md) |  | [optional] 
**zone** | [**Zone**](Zone.md) |  | [optional] 

## Example

```python
from openapi_client.models.entity import Entity

# TODO update the JSON string below
json = "{}"
# create an instance of Entity from a JSON string
entity_instance = Entity.from_json(json)
# print the JSON string representation of the object
print(Entity.to_json())

# convert the object into a dict
entity_dict = entity_instance.to_dict()
# create an instance of Entity from a dict
entity_from_dict = Entity.from_dict(entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


