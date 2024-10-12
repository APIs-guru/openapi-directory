# CanonicalProfileDefinitionPropertiesInner

The definition of a canonical profile property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**profile_name** | **str** | Profile name. | [optional] 
**profile_property_name** | **str** | Property name of profile. | [optional] 
**rank** | **int** | The rank. | [optional] 
**type** | **str** | Type of canonical property value. | [optional] 
**value** | **str** | Value of the canonical property. | [optional] 

## Example

```python
from openapi_client.models.canonical_profile_definition_properties_inner import CanonicalProfileDefinitionPropertiesInner

# TODO update the JSON string below
json = "{}"
# create an instance of CanonicalProfileDefinitionPropertiesInner from a JSON string
canonical_profile_definition_properties_inner_instance = CanonicalProfileDefinitionPropertiesInner.from_json(json)
# print the JSON string representation of the object
print(CanonicalProfileDefinitionPropertiesInner.to_json())

# convert the object into a dict
canonical_profile_definition_properties_inner_dict = canonical_profile_definition_properties_inner_instance.to_dict()
# create an instance of CanonicalProfileDefinitionPropertiesInner from a dict
canonical_profile_definition_properties_inner_from_dict = CanonicalProfileDefinitionPropertiesInner.from_dict(canonical_profile_definition_properties_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


