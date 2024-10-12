# GoogleCloudAiplatformV1WriteFeatureValuesRequest

Request message for FeaturestoreOnlineServingService.WriteFeatureValues.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payloads** | [**List[GoogleCloudAiplatformV1WriteFeatureValuesPayload]**](GoogleCloudAiplatformV1WriteFeatureValuesPayload.md) | Required. The entities to be written. Up to 100,000 feature values can be written across all &#x60;payloads&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_write_feature_values_request import GoogleCloudAiplatformV1WriteFeatureValuesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1WriteFeatureValuesRequest from a JSON string
google_cloud_aiplatform_v1_write_feature_values_request_instance = GoogleCloudAiplatformV1WriteFeatureValuesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1WriteFeatureValuesRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_write_feature_values_request_dict = google_cloud_aiplatform_v1_write_feature_values_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1WriteFeatureValuesRequest from a dict
google_cloud_aiplatform_v1_write_feature_values_request_from_dict = GoogleCloudAiplatformV1WriteFeatureValuesRequest.from_dict(google_cloud_aiplatform_v1_write_feature_values_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


