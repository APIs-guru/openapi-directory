# AssemblyProperties

The assembly properties definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assembly_culture** | **str** | The assembly culture. | [optional] 
**assembly_name** | **str** | The assembly name. | 
**assembly_public_key_token** | **str** | The assembly public key token. | [optional] 
**assembly_version** | **str** | The assembly version. | [optional] 
**content** | **object** |  | [optional] 
**content_link** | [**ContentLink**](ContentLink.md) |  | [optional] 
**content_type** | **str** | The content type. | [optional] 
**changed_time** | **datetime** | The artifact changed time. | [optional] 
**created_time** | **datetime** | The artifact creation time. | [optional] 
**metadata** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.assembly_properties import AssemblyProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AssemblyProperties from a JSON string
assembly_properties_instance = AssemblyProperties.from_json(json)
# print the JSON string representation of the object
print(AssemblyProperties.to_json())

# convert the object into a dict
assembly_properties_dict = assembly_properties_instance.to_dict()
# create an instance of AssemblyProperties from a dict
assembly_properties_from_dict = AssemblyProperties.from_dict(assembly_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


