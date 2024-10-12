# GoogleCloudAiplatformV1CsvSource

The storage details for CSV input content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_source** | [**GoogleCloudAiplatformV1GcsSource**](GoogleCloudAiplatformV1GcsSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_csv_source import GoogleCloudAiplatformV1CsvSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1CsvSource from a JSON string
google_cloud_aiplatform_v1_csv_source_instance = GoogleCloudAiplatformV1CsvSource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1CsvSource.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_csv_source_dict = google_cloud_aiplatform_v1_csv_source_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1CsvSource from a dict
google_cloud_aiplatform_v1_csv_source_from_dict = GoogleCloudAiplatformV1CsvSource.from_dict(google_cloud_aiplatform_v1_csv_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


