# GoogleCloudAiplatformV1WriteFeatureValuesPayload

Contains Feature values to be written for a specific entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_id** | **str** | Required. The ID of the entity. | [optional] 
**feature_values** | [**Dict[str, GoogleCloudAiplatformV1FeatureValue]**](GoogleCloudAiplatformV1FeatureValue.md) | Required. Feature values to be written, mapping from Feature ID to value. Up to 100,000 &#x60;feature_values&#x60; entries may be written across all payloads. The feature generation time, aligned by days, must be no older than five years (1825 days) and no later than one year (366 days) in the future. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_write_feature_values_payload import GoogleCloudAiplatformV1WriteFeatureValuesPayload

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1WriteFeatureValuesPayload from a JSON string
google_cloud_aiplatform_v1_write_feature_values_payload_instance = GoogleCloudAiplatformV1WriteFeatureValuesPayload.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1WriteFeatureValuesPayload.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_write_feature_values_payload_dict = google_cloud_aiplatform_v1_write_feature_values_payload_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1WriteFeatureValuesPayload from a dict
google_cloud_aiplatform_v1_write_feature_values_payload_from_dict = GoogleCloudAiplatformV1WriteFeatureValuesPayload.from_dict(google_cloud_aiplatform_v1_write_feature_values_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


