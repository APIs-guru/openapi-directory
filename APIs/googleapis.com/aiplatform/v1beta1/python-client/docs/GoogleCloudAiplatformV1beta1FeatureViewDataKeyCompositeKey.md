# GoogleCloudAiplatformV1beta1FeatureViewDataKeyCompositeKey

ID that is comprised from several parts (columns).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parts** | **List[str]** | Parts to construct Entity ID. Should match with the same ID columns as defined in FeatureView in the same order. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_feature_view_data_key_composite_key import GoogleCloudAiplatformV1beta1FeatureViewDataKeyCompositeKey

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1FeatureViewDataKeyCompositeKey from a JSON string
google_cloud_aiplatform_v1beta1_feature_view_data_key_composite_key_instance = GoogleCloudAiplatformV1beta1FeatureViewDataKeyCompositeKey.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1FeatureViewDataKeyCompositeKey.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_feature_view_data_key_composite_key_dict = google_cloud_aiplatform_v1beta1_feature_view_data_key_composite_key_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1FeatureViewDataKeyCompositeKey from a dict
google_cloud_aiplatform_v1beta1_feature_view_data_key_composite_key_from_dict = GoogleCloudAiplatformV1beta1FeatureViewDataKeyCompositeKey.from_dict(google_cloud_aiplatform_v1beta1_feature_view_data_key_composite_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


