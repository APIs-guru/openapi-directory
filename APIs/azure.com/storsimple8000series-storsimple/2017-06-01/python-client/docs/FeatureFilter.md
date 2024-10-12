# FeatureFilter

The OData filter to be used for features.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_id** | **str** | Specifies the device ID for which the features are required. Only &#39;Equality&#39; operator is supported for this property. | [optional] 

## Example

```python
from openapi_client.models.feature_filter import FeatureFilter

# TODO update the JSON string below
json = "{}"
# create an instance of FeatureFilter from a JSON string
feature_filter_instance = FeatureFilter.from_json(json)
# print the JSON string representation of the object
print(FeatureFilter.to_json())

# convert the object into a dict
feature_filter_dict = feature_filter_instance.to_dict()
# create an instance of FeatureFilter from a dict
feature_filter_from_dict = FeatureFilter.from_dict(feature_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


