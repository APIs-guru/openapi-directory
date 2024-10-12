# GoogleCloudAssetV1QueryAssetsOutputConfigBigQueryDestination

BigQuery destination.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset** | **str** | Required. The BigQuery dataset where the query results will be saved. It has the format of \&quot;projects/{projectId}/datasets/{datasetId}\&quot;. | [optional] 
**table** | **str** | Required. The BigQuery table where the query results will be saved. If this table does not exist, a new table with the given name will be created. | [optional] 
**write_disposition** | **str** | Specifies the action that occurs if the destination table or partition already exists. The following values are supported: * WRITE_TRUNCATE: If the table or partition already exists, BigQuery overwrites the entire table or all the partitions data. * WRITE_APPEND: If the table or partition already exists, BigQuery appends the data to the table or the latest partition. * WRITE_EMPTY: If the table already exists and contains data, a &#39;duplicate&#39; error is returned in the job result. The default value is WRITE_EMPTY. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_asset_v1_query_assets_output_config_big_query_destination import GoogleCloudAssetV1QueryAssetsOutputConfigBigQueryDestination

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssetV1QueryAssetsOutputConfigBigQueryDestination from a JSON string
google_cloud_asset_v1_query_assets_output_config_big_query_destination_instance = GoogleCloudAssetV1QueryAssetsOutputConfigBigQueryDestination.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssetV1QueryAssetsOutputConfigBigQueryDestination.to_json())

# convert the object into a dict
google_cloud_asset_v1_query_assets_output_config_big_query_destination_dict = google_cloud_asset_v1_query_assets_output_config_big_query_destination_instance.to_dict()
# create an instance of GoogleCloudAssetV1QueryAssetsOutputConfigBigQueryDestination from a dict
google_cloud_asset_v1_query_assets_output_config_big_query_destination_from_dict = GoogleCloudAssetV1QueryAssetsOutputConfigBigQueryDestination.from_dict(google_cloud_asset_v1_query_assets_output_config_big_query_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


