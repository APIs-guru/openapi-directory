# GoogleCloudAiplatformV1FeatureViewDataKey

Lookup key for a feature view.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**composite_key** | [**GoogleCloudAiplatformV1FeatureViewDataKeyCompositeKey**](GoogleCloudAiplatformV1FeatureViewDataKeyCompositeKey.md) |  | [optional] 
**key** | **str** | String key to use for lookup. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_feature_view_data_key import GoogleCloudAiplatformV1FeatureViewDataKey

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1FeatureViewDataKey from a JSON string
google_cloud_aiplatform_v1_feature_view_data_key_instance = GoogleCloudAiplatformV1FeatureViewDataKey.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1FeatureViewDataKey.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_feature_view_data_key_dict = google_cloud_aiplatform_v1_feature_view_data_key_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1FeatureViewDataKey from a dict
google_cloud_aiplatform_v1_feature_view_data_key_from_dict = GoogleCloudAiplatformV1FeatureViewDataKey.from_dict(google_cloud_aiplatform_v1_feature_view_data_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


