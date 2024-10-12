# TypePropertiesMapping

Metadata for a Link's property mapping.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**interaction_type_property_name** | **str** |  Property name on the source Interaction Type. | 
**is_profile_type_id** | **bool** | Flag to indicate whether the Profile Type property is an id on the Profile Type. | [optional] 
**link_type** | **str** | Link type. | [optional] 
**profile_type_property_name** | **str** | Property name on the target Profile Type. | 

## Example

```python
from openapi_client.models.type_properties_mapping import TypePropertiesMapping

# TODO update the JSON string below
json = "{}"
# create an instance of TypePropertiesMapping from a JSON string
type_properties_mapping_instance = TypePropertiesMapping.from_json(json)
# print the JSON string representation of the object
print(TypePropertiesMapping.to_json())

# convert the object into a dict
type_properties_mapping_dict = type_properties_mapping_instance.to_dict()
# create an instance of TypePropertiesMapping from a dict
type_properties_mapping_from_dict = TypePropertiesMapping.from_dict(type_properties_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


