# GoogleCloudAiplatformV1AvroSource

The storage details for Avro input content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_source** | [**GoogleCloudAiplatformV1GcsSource**](GoogleCloudAiplatformV1GcsSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_avro_source import GoogleCloudAiplatformV1AvroSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1AvroSource from a JSON string
google_cloud_aiplatform_v1_avro_source_instance = GoogleCloudAiplatformV1AvroSource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1AvroSource.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_avro_source_dict = google_cloud_aiplatform_v1_avro_source_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1AvroSource from a dict
google_cloud_aiplatform_v1_avro_source_from_dict = GoogleCloudAiplatformV1AvroSource.from_dict(google_cloud_aiplatform_v1_avro_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


