# Hl7TypesConfig

Root config for HL7v2 datatype definitions for a specific HL7v2 version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**List[Type]**](Type.md) | The HL7v2 type definitions. | [optional] 
**version** | [**List[VersionSource]**](VersionSource.md) | The version selectors that this config applies to. A message must match ALL version sources to apply. | [optional] 

## Example

```python
from openapi_client.models.hl7_types_config import Hl7TypesConfig

# TODO update the JSON string below
json = "{}"
# create an instance of Hl7TypesConfig from a JSON string
hl7_types_config_instance = Hl7TypesConfig.from_json(json)
# print the JSON string representation of the object
print(Hl7TypesConfig.to_json())

# convert the object into a dict
hl7_types_config_dict = hl7_types_config_instance.to_dict()
# create an instance of Hl7TypesConfig from a dict
hl7_types_config_from_dict = Hl7TypesConfig.from_dict(hl7_types_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


