# CanonicalProfileDefinition

Definition of canonical profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**canonical_profile_id** | **int** | Canonical profile ID. | [optional] 
**properties** | [**List[CanonicalProfileDefinitionPropertiesInner]**](CanonicalProfileDefinitionPropertiesInner.md) | Properties of the canonical profile. | [optional] 

## Example

```python
from openapi_client.models.canonical_profile_definition import CanonicalProfileDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of CanonicalProfileDefinition from a JSON string
canonical_profile_definition_instance = CanonicalProfileDefinition.from_json(json)
# print the JSON string representation of the object
print(CanonicalProfileDefinition.to_json())

# convert the object into a dict
canonical_profile_definition_dict = canonical_profile_definition_instance.to_dict()
# create an instance of CanonicalProfileDefinition from a dict
canonical_profile_definition_from_dict = CanonicalProfileDefinition.from_dict(canonical_profile_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


