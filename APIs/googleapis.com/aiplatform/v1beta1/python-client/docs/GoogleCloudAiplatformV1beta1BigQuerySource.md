# GoogleCloudAiplatformV1beta1BigQuerySource

The BigQuery location for the input content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input_uri** | **str** | Required. BigQuery URI to a table, up to 2000 characters long. Accepted forms: * BigQuery path. For example: &#x60;bq://projectId.bqDatasetId.bqTableId&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_big_query_source import GoogleCloudAiplatformV1beta1BigQuerySource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1BigQuerySource from a JSON string
google_cloud_aiplatform_v1beta1_big_query_source_instance = GoogleCloudAiplatformV1beta1BigQuerySource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1BigQuerySource.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_big_query_source_dict = google_cloud_aiplatform_v1beta1_big_query_source_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1BigQuerySource from a dict
google_cloud_aiplatform_v1beta1_big_query_source_from_dict = GoogleCloudAiplatformV1beta1BigQuerySource.from_dict(google_cloud_aiplatform_v1beta1_big_query_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


