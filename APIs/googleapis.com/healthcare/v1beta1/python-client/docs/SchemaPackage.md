# SchemaPackage

A schema package contains a set of schemas and type definitions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ignore_min_occurs** | **bool** | Flag to ignore all min_occurs restrictions in the schema. This means that incoming messages can omit any group, segment, field, component, or subcomponent. | [optional] 
**schemas** | [**List[Hl7SchemaConfig]**](Hl7SchemaConfig.md) | Schema configs that are layered based on their VersionSources that match the incoming message. Schema configs present in higher indices override those in lower indices with the same message type and trigger event if their VersionSources all match an incoming message. | [optional] 
**schematized_parsing_type** | **str** | Determines how messages that fail to parse are handled. | [optional] 
**types** | [**List[Hl7TypesConfig]**](Hl7TypesConfig.md) | Schema type definitions that are layered based on their VersionSources that match the incoming message. Type definitions present in higher indices override those in lower indices with the same type name if their VersionSources all match an incoming message. | [optional] 
**unexpected_segment_handling** | **str** | Determines how unexpected segments (segments not matched to the schema) are handled. | [optional] 

## Example

```python
from openapi_client.models.schema_package import SchemaPackage

# TODO update the JSON string below
json = "{}"
# create an instance of SchemaPackage from a JSON string
schema_package_instance = SchemaPackage.from_json(json)
# print the JSON string representation of the object
print(SchemaPackage.to_json())

# convert the object into a dict
schema_package_dict = schema_package_instance.to_dict()
# create an instance of SchemaPackage from a dict
schema_package_from_dict = SchemaPackage.from_dict(schema_package_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


