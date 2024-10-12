# ObjectDefinition

The definition for an object within a data source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name for the object, which then defines its type. Item indexing requests should set the objectType field equal to this value. For example, if *name* is *Document*, then indexing requests for items of type Document should set objectType equal to *Document*. Each object definition must be uniquely named within a schema. The name must start with a letter and can only contain letters (A-Z, a-z) or numbers (0-9). The maximum length is 256 characters. | [optional] 
**options** | [**ObjectOptions**](ObjectOptions.md) |  | [optional] 
**property_definitions** | [**List[PropertyDefinition]**](PropertyDefinition.md) | The property definitions for the object. The maximum number of elements is 1000. | [optional] 

## Example

```python
from openapi_client.models.object_definition import ObjectDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ObjectDefinition from a JSON string
object_definition_instance = ObjectDefinition.from_json(json)
# print the JSON string representation of the object
print(ObjectDefinition.to_json())

# convert the object into a dict
object_definition_dict = object_definition_instance.to_dict()
# create an instance of ObjectDefinition from a dict
object_definition_from_dict = ObjectDefinition.from_dict(object_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


