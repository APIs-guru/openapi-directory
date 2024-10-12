# FeatureInfoObject

The base class Features-related response objects inherit from.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled_for_all_models** | **bool** | Indicates if the feature is enabled for all models in the application. | [optional] 
**id** | **int** | A six-digit ID used for Features. | [optional] 
**is_active** | **bool** | Indicates if the feature is enabled. | [optional] 
**name** | **str** | The name of the Feature. | [optional] 

## Example

```python
from openapi_client.models.feature_info_object import FeatureInfoObject

# TODO update the JSON string below
json = "{}"
# create an instance of FeatureInfoObject from a JSON string
feature_info_object_instance = FeatureInfoObject.from_json(json)
# print the JSON string representation of the object
print(FeatureInfoObject.to_json())

# convert the object into a dict
feature_info_object_dict = feature_info_object_instance.to_dict()
# create an instance of FeatureInfoObject from a dict
feature_info_object_from_dict = FeatureInfoObject.from_dict(feature_info_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


