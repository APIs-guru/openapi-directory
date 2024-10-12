# Hl7SchemaConfig

Root config message for HL7v2 schema. This contains a schema structure of groups and segments, and filters that determine which messages to apply the schema structure to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_schema_configs** | [**Dict[str, SchemaGroup]**](SchemaGroup.md) | Map from each HL7v2 message type and trigger event pair, such as ADT_A04, to its schema configuration root group. | [optional] 
**version** | [**List[VersionSource]**](VersionSource.md) | Each VersionSource is tested and only if they all match is the schema used for the message. | [optional] 

## Example

```python
from openapi_client.models.hl7_schema_config import Hl7SchemaConfig

# TODO update the JSON string below
json = "{}"
# create an instance of Hl7SchemaConfig from a JSON string
hl7_schema_config_instance = Hl7SchemaConfig.from_json(json)
# print the JSON string representation of the object
print(Hl7SchemaConfig.to_json())

# convert the object into a dict
hl7_schema_config_dict = hl7_schema_config_instance.to_dict()
# create an instance of Hl7SchemaConfig from a dict
hl7_schema_config_from_dict = Hl7SchemaConfig.from_dict(hl7_schema_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


