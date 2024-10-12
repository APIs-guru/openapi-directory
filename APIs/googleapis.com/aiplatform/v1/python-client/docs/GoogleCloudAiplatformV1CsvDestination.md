# GoogleCloudAiplatformV1CsvDestination

The storage details for CSV output content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_destination** | [**GoogleCloudAiplatformV1GcsDestination**](GoogleCloudAiplatformV1GcsDestination.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_csv_destination import GoogleCloudAiplatformV1CsvDestination

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1CsvDestination from a JSON string
google_cloud_aiplatform_v1_csv_destination_instance = GoogleCloudAiplatformV1CsvDestination.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1CsvDestination.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_csv_destination_dict = google_cloud_aiplatform_v1_csv_destination_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1CsvDestination from a dict
google_cloud_aiplatform_v1_csv_destination_from_dict = GoogleCloudAiplatformV1CsvDestination.from_dict(google_cloud_aiplatform_v1_csv_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


