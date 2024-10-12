# AboutFeaturesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feature_name** | **str** | The name of the feature. | [optional] 
**feature_rate** | **float** | The request limit rate for this feature, in queries per second. | [optional] 

## Example

```python
from openapi_client.models.about_features_inner import AboutFeaturesInner

# TODO update the JSON string below
json = "{}"
# create an instance of AboutFeaturesInner from a JSON string
about_features_inner_instance = AboutFeaturesInner.from_json(json)
# print the JSON string representation of the object
print(AboutFeaturesInner.to_json())

# convert the object into a dict
about_features_inner_dict = about_features_inner_instance.to_dict()
# create an instance of AboutFeaturesInner from a dict
about_features_inner_from_dict = AboutFeaturesInner.from_dict(about_features_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


