# Feature


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detailed_mode** | [**FeatureDetailedModeSection**](FeatureDetailedModeSection.md) |  | 
**discovery_mode** | [**FeatureDiscoveryModeSection**](FeatureDiscoveryModeSection.md) |  | 
**html_processing** | **bool** | Represents whether HTML processing supported for certain language or not | 
**id** | **str** | Unique language identifier | 
**language** | **str** | Represents language following options relevant to | 
**one_sentence_mode** | **bool** | Considers entire text as one sentence and uses optimized chunker for short content like tweets. | 
**settings** | [**FeatureSettingsSection**](FeatureSettingsSection.md) |  | 
**templates** | [**FeatureTemplateSection**](FeatureTemplateSection.md) |  | 

## Example

```python
from openapi_client.models.feature import Feature

# TODO update the JSON string below
json = "{}"
# create an instance of Feature from a JSON string
feature_instance = Feature.from_json(json)
# print the JSON string representation of the object
print(Feature.to_json())

# convert the object into a dict
feature_dict = feature_instance.to_dict()
# create an instance of Feature from a dict
feature_from_dict = Feature.from_dict(feature_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


