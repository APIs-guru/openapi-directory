# PatternFeatureInfo

Pattern feature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pattern** | **str** | The Regular Expression to match. | [optional] 
**enabled_for_all_models** | **bool** | Indicates if the feature is enabled for all models in the application. | [optional] 
**id** | **int** | A six-digit ID used for Features. | [optional] 
**is_active** | **bool** | Indicates if the feature is enabled. | [optional] 
**name** | **str** | The name of the Feature. | [optional] 

## Example

```python
from openapi_client.models.pattern_feature_info import PatternFeatureInfo

# TODO update the JSON string below
json = "{}"
# create an instance of PatternFeatureInfo from a JSON string
pattern_feature_info_instance = PatternFeatureInfo.from_json(json)
# print the JSON string representation of the object
print(PatternFeatureInfo.to_json())

# convert the object into a dict
pattern_feature_info_dict = pattern_feature_info_instance.to_dict()
# create an instance of PatternFeatureInfo from a dict
pattern_feature_info_from_dict = PatternFeatureInfo.from_dict(pattern_feature_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


