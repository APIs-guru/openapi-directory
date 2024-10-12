# GoogleCloudAiplatformV1BatchCreateFeaturesRequest

Request message for FeaturestoreService.BatchCreateFeatures.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | [**List[GoogleCloudAiplatformV1CreateFeatureRequest]**](GoogleCloudAiplatformV1CreateFeatureRequest.md) | Required. The request message specifying the Features to create. All Features must be created under the same parent EntityType. The &#x60;parent&#x60; field in each child request message can be omitted. If &#x60;parent&#x60; is set in a child request, then the value must match the &#x60;parent&#x60; value in this request message. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_batch_create_features_request import GoogleCloudAiplatformV1BatchCreateFeaturesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1BatchCreateFeaturesRequest from a JSON string
google_cloud_aiplatform_v1_batch_create_features_request_instance = GoogleCloudAiplatformV1BatchCreateFeaturesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1BatchCreateFeaturesRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_batch_create_features_request_dict = google_cloud_aiplatform_v1_batch_create_features_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1BatchCreateFeaturesRequest from a dict
google_cloud_aiplatform_v1_batch_create_features_request_from_dict = GoogleCloudAiplatformV1BatchCreateFeaturesRequest.from_dict(google_cloud_aiplatform_v1_batch_create_features_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


