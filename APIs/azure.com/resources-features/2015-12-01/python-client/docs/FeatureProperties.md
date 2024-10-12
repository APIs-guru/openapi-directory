# FeatureProperties

Information about feature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | **str** | The registration state of the feature for the subscription. | [optional] 

## Example

```python
from openapi_client.models.feature_properties import FeatureProperties

# TODO update the JSON string below
json = "{}"
# create an instance of FeatureProperties from a JSON string
feature_properties_instance = FeatureProperties.from_json(json)
# print the JSON string representation of the object
print(FeatureProperties.to_json())

# convert the object into a dict
feature_properties_dict = feature_properties_instance.to_dict()
# create an instance of FeatureProperties from a dict
feature_properties_from_dict = FeatureProperties.from_dict(feature_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


