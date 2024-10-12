# FeatureDiscoveryModeSection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_mentions** | **bool** | Represents whether mentions of entities supported for certain language or not | 
**facet_attributes** | **bool** | Represents whether attributes of facets supported for certain language or not | 
**facet_mentioins** | **bool** | Represents whether mentions of facets supported for certain language or not | 
**facets** | **bool** | Represents whether facets detection supported for certain language or not | 
**named_entities** | **bool** | Represents whether named entities extraction supported for certain language or not | 
**queries** | **bool** | Represents whether queries extraction supported for certain language or not | 
**taxonomy** | **bool** | Represents whether taxonomy feature supported for certain language or not | 
**theme_mentions** | **bool** | Represents whether mentions of themes supported for certain language or not | 
**themes** | **bool** | Represents whether themes extraction supported for certain language or not | 
**user_categories** | **bool** | Represents whether user categories extraction supported for certain language or not | 
**user_entities** | **bool** | Represents whether user entities extraction supported for certain language or not | 

## Example

```python
from openapi_client.models.feature_discovery_mode_section import FeatureDiscoveryModeSection

# TODO update the JSON string below
json = "{}"
# create an instance of FeatureDiscoveryModeSection from a JSON string
feature_discovery_mode_section_instance = FeatureDiscoveryModeSection.from_json(json)
# print the JSON string representation of the object
print(FeatureDiscoveryModeSection.to_json())

# convert the object into a dict
feature_discovery_mode_section_dict = feature_discovery_mode_section_instance.to_dict()
# create an instance of FeatureDiscoveryModeSection from a dict
feature_discovery_mode_section_from_dict = FeatureDiscoveryModeSection.from_dict(feature_discovery_mode_section_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


