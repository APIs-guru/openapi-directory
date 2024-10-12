# GoogleCloudAiplatformV1BatchCreateFeaturesResponse

Response message for FeaturestoreService.BatchCreateFeatures.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**features** | [**List[GoogleCloudAiplatformV1Feature]**](GoogleCloudAiplatformV1Feature.md) | The Features created. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_batch_create_features_response import GoogleCloudAiplatformV1BatchCreateFeaturesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1BatchCreateFeaturesResponse from a JSON string
google_cloud_aiplatform_v1_batch_create_features_response_instance = GoogleCloudAiplatformV1BatchCreateFeaturesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1BatchCreateFeaturesResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_batch_create_features_response_dict = google_cloud_aiplatform_v1_batch_create_features_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1BatchCreateFeaturesResponse from a dict
google_cloud_aiplatform_v1_batch_create_features_response_from_dict = GoogleCloudAiplatformV1BatchCreateFeaturesResponse.from_dict(google_cloud_aiplatform_v1_batch_create_features_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


