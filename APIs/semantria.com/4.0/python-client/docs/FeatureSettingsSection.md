# FeatureSettingsSection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blacklist** | **bool** | Represents whether blacklist feature supported for certain language or not | 
**queries** | **bool** | Represents whether queries definition supported for certain language or not | 
**sentiment_phrases** | **bool** | Represents whether sentiment-bearing phrases adjustmment supported for certain language or not | 
**taxonomy** | **bool** | Represents whether taxonomy feature supported for certain language or not | 
**user_categories** | **bool** | Represents whether user categories definition supported for certain language or not | 
**user_entities** | **bool** | Represents whether user entities definition supported for certain language or not | 

## Example

```python
from openapi_client.models.feature_settings_section import FeatureSettingsSection

# TODO update the JSON string below
json = "{}"
# create an instance of FeatureSettingsSection from a JSON string
feature_settings_section_instance = FeatureSettingsSection.from_json(json)
# print the JSON string representation of the object
print(FeatureSettingsSection.to_json())

# convert the object into a dict
feature_settings_section_dict = feature_settings_section_instance.to_dict()
# create an instance of FeatureSettingsSection from a dict
feature_settings_section_from_dict = FeatureSettingsSection.from_dict(feature_settings_section_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


