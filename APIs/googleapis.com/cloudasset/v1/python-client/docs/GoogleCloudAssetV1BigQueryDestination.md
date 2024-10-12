# GoogleCloudAssetV1BigQueryDestination

A BigQuery destination.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset** | **str** | Required. The BigQuery dataset in format \&quot;projects/projectId/datasets/datasetId\&quot;, to which the analysis results should be exported. If this dataset does not exist, the export call will return an INVALID_ARGUMENT error. | [optional] 
**partition_key** | **str** | The partition key for BigQuery partitioned table. | [optional] 
**table_prefix** | **str** | Required. The prefix of the BigQuery tables to which the analysis results will be written. Tables will be created based on this table_prefix if not exist: * _analysis table will contain export operation&#39;s metadata. * _analysis_result will contain all the IamPolicyAnalysisResult. When [partition_key] is specified, both tables will be partitioned based on the [partition_key]. | [optional] 
**write_disposition** | **str** | Optional. Specifies the action that occurs if the destination table or partition already exists. The following values are supported: * WRITE_TRUNCATE: If the table or partition already exists, BigQuery overwrites the entire table or all the partitions data. * WRITE_APPEND: If the table or partition already exists, BigQuery appends the data to the table or the latest partition. * WRITE_EMPTY: If the table already exists and contains data, an error is returned. The default value is WRITE_APPEND. Each action is atomic and only occurs if BigQuery is able to complete the job successfully. Details are at https://cloud.google.com/bigquery/docs/loading-data-local#appending_to_or_overwriting_a_table_using_a_local_file. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_asset_v1_big_query_destination import GoogleCloudAssetV1BigQueryDestination

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssetV1BigQueryDestination from a JSON string
google_cloud_asset_v1_big_query_destination_instance = GoogleCloudAssetV1BigQueryDestination.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssetV1BigQueryDestination.to_json())

# convert the object into a dict
google_cloud_asset_v1_big_query_destination_dict = google_cloud_asset_v1_big_query_destination_instance.to_dict()
# create an instance of GoogleCloudAssetV1BigQueryDestination from a dict
google_cloud_asset_v1_big_query_destination_from_dict = GoogleCloudAssetV1BigQueryDestination.from_dict(google_cloud_asset_v1_big_query_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


