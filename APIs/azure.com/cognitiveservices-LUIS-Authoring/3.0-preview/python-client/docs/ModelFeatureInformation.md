# ModelFeatureInformation

An object containing the model feature information either the model name or feature name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feature_name** | **str** | The name of the feature used. | [optional] 
**model_name** | **str** | The name of the model used. | [optional] 

## Example

```python
from openapi_client.models.model_feature_information import ModelFeatureInformation

# TODO update the JSON string below
json = "{}"
# create an instance of ModelFeatureInformation from a JSON string
model_feature_information_instance = ModelFeatureInformation.from_json(json)
# print the JSON string representation of the object
print(ModelFeatureInformation.to_json())

# convert the object into a dict
model_feature_information_dict = model_feature_information_instance.to_dict()
# create an instance of ModelFeatureInformation from a dict
model_feature_information_from_dict = ModelFeatureInformation.from_dict(model_feature_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


