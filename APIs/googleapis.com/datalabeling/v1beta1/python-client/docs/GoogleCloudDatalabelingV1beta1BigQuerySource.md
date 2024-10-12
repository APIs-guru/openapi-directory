# GoogleCloudDatalabelingV1beta1BigQuerySource

The BigQuery location for input data. If used in an EvaluationJob, this is where the service saves the prediction input and output sampled from the model version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input_uri** | **str** | Required. BigQuery URI to a table, up to 2,000 characters long. If you specify the URI of a table that does not exist, Data Labeling Service creates a table at the URI with the correct schema when you create your EvaluationJob. If you specify the URI of a table that already exists, it must have the [correct schema](/ml-engine/docs/continuous-evaluation/create-job#table-schema). Provide the table URI in the following format: \&quot;bq://{your_project_id}/ {your_dataset_name}/{your_table_name}\&quot; [Learn more](/ml-engine/docs/continuous-evaluation/create-job#table-schema). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_big_query_source import GoogleCloudDatalabelingV1beta1BigQuerySource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1BigQuerySource from a JSON string
google_cloud_datalabeling_v1beta1_big_query_source_instance = GoogleCloudDatalabelingV1beta1BigQuerySource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1BigQuerySource.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_big_query_source_dict = google_cloud_datalabeling_v1beta1_big_query_source_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1BigQuerySource from a dict
google_cloud_datalabeling_v1beta1_big_query_source_from_dict = GoogleCloudDatalabelingV1beta1BigQuerySource.from_dict(google_cloud_datalabeling_v1beta1_big_query_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


