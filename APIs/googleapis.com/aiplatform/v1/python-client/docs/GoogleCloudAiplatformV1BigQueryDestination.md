# GoogleCloudAiplatformV1BigQueryDestination

The BigQuery location for the output content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**output_uri** | **str** | Required. BigQuery URI to a project or table, up to 2000 characters long. When only the project is specified, the Dataset and Table is created. When the full table reference is specified, the Dataset must exist and table must not exist. Accepted forms: * BigQuery path. For example: &#x60;bq://projectId&#x60; or &#x60;bq://projectId.bqDatasetId&#x60; or &#x60;bq://projectId.bqDatasetId.bqTableId&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_big_query_destination import GoogleCloudAiplatformV1BigQueryDestination

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1BigQueryDestination from a JSON string
google_cloud_aiplatform_v1_big_query_destination_instance = GoogleCloudAiplatformV1BigQueryDestination.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1BigQueryDestination.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_big_query_destination_dict = google_cloud_aiplatform_v1_big_query_destination_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1BigQueryDestination from a dict
google_cloud_aiplatform_v1_big_query_destination_from_dict = GoogleCloudAiplatformV1BigQueryDestination.from_dict(google_cloud_aiplatform_v1_big_query_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


