# GoogleCloudAiplatformV1beta1TFRecordDestination

The storage details for TFRecord output content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_destination** | [**GoogleCloudAiplatformV1beta1GcsDestination**](GoogleCloudAiplatformV1beta1GcsDestination.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_tf_record_destination import GoogleCloudAiplatformV1beta1TFRecordDestination

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1TFRecordDestination from a JSON string
google_cloud_aiplatform_v1beta1_tf_record_destination_instance = GoogleCloudAiplatformV1beta1TFRecordDestination.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1TFRecordDestination.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_tf_record_destination_dict = google_cloud_aiplatform_v1beta1_tf_record_destination_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1TFRecordDestination from a dict
google_cloud_aiplatform_v1beta1_tf_record_destination_from_dict = GoogleCloudAiplatformV1beta1TFRecordDestination.from_dict(google_cloud_aiplatform_v1beta1_tf_record_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


