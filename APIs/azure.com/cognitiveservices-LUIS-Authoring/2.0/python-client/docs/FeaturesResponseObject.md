# FeaturesResponseObject

Model Features, including Patterns and Phraselists.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pattern_features** | [**List[PatternFeatureInfo]**](PatternFeatureInfo.md) | List of Pattern features. | [optional] 
**phraselist_features** | [**List[PhraseListFeatureInfo]**](PhraseListFeatureInfo.md) | List of Phraselist Features. | [optional] 

## Example

```python
from openapi_client.models.features_response_object import FeaturesResponseObject

# TODO update the JSON string below
json = "{}"
# create an instance of FeaturesResponseObject from a JSON string
features_response_object_instance = FeaturesResponseObject.from_json(json)
# print the JSON string representation of the object
print(FeaturesResponseObject.to_json())

# convert the object into a dict
features_response_object_dict = features_response_object_instance.to_dict()
# create an instance of FeaturesResponseObject from a dict
features_response_object_from_dict = FeaturesResponseObject.from_dict(features_response_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


