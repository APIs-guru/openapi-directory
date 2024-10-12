# GoogleCloudAiplatformV1beta1FeatureValueMetadata

Metadata of feature value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**generate_time** | **str** | Feature generation timestamp. Typically, it is provided by user at feature ingestion time. If not, feature store will use the system timestamp when the data is ingested into feature store. For streaming ingestion, the time, aligned by days, must be no older than five years (1825 days) and no later than one year (366 days) in the future. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_feature_value_metadata import GoogleCloudAiplatformV1beta1FeatureValueMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1FeatureValueMetadata from a JSON string
google_cloud_aiplatform_v1beta1_feature_value_metadata_instance = GoogleCloudAiplatformV1beta1FeatureValueMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1FeatureValueMetadata.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_feature_value_metadata_dict = google_cloud_aiplatform_v1beta1_feature_value_metadata_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1FeatureValueMetadata from a dict
google_cloud_aiplatform_v1beta1_feature_value_metadata_from_dict = GoogleCloudAiplatformV1beta1FeatureValueMetadata.from_dict(google_cloud_aiplatform_v1beta1_feature_value_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


