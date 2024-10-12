# FeatureDescription

A feature description of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#featuredesc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**headline** | **str** | A short description of the feature. | [optional] 
**image** | [**Image**](Image.md) |  | [optional] 
**text** | **str** | A detailed description of the feature. | [optional] 

## Example

```python
from openapi_client.models.feature_description import FeatureDescription

# TODO update the JSON string below
json = "{}"
# create an instance of FeatureDescription from a JSON string
feature_description_instance = FeatureDescription.from_json(json)
# print the JSON string representation of the object
print(FeatureDescription.to_json())

# convert the object into a dict
feature_description_dict = feature_description_instance.to_dict()
# create an instance of FeatureDescription from a dict
feature_description_from_dict = FeatureDescription.from_dict(feature_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


