# GoogleCloudAssetV1p7beta1BigQueryDestination

A BigQuery destination for exporting assets to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset** | **str** | Required. The BigQuery dataset in format \&quot;projects/projectId/datasets/datasetId\&quot;, to which the snapshot result should be exported. If this dataset does not exist, the export call returns an INVALID_ARGUMENT error. | [optional] 
**force** | **bool** | If the destination table already exists and this flag is &#x60;TRUE&#x60;, the table will be overwritten by the contents of assets snapshot. If the flag is &#x60;FALSE&#x60; or unset and the destination table already exists, the export call returns an INVALID_ARGUMEMT error. | [optional] 
**partition_spec** | [**GoogleCloudAssetV1p7beta1PartitionSpec**](GoogleCloudAssetV1p7beta1PartitionSpec.md) |  | [optional] 
**separate_tables_per_asset_type** | **bool** | If this flag is &#x60;TRUE&#x60;, the snapshot results will be written to one or multiple tables, each of which contains results of one asset type. The [force] and [partition_spec] fields will apply to each of them. Field [table] will be concatenated with \&quot;_\&quot; and the asset type names (see https://cloud.google.com/asset-inventory/docs/supported-asset-types for supported asset types) to construct per-asset-type table names, in which all non-alphanumeric characters like \&quot;.\&quot; and \&quot;/\&quot; will be substituted by \&quot;_\&quot;. Example: if field [table] is \&quot;mytable\&quot; and snapshot results contain \&quot;storage.googleapis.com/Bucket\&quot; assets, the corresponding table name will be \&quot;mytable_storage_googleapis_com_Bucket\&quot;. If any of these tables does not exist, a new table with the concatenated name will be created. When [content_type] in the ExportAssetsRequest is &#x60;RESOURCE&#x60;, the schema of each table will include RECORD-type columns mapped to the nested fields in the Asset.resource.data field of that asset type (up to the 15 nested level BigQuery supports (https://cloud.google.com/bigquery/docs/nested-repeated#limitations)). The fields in &gt;15 nested levels will be stored in JSON format string as a child column of its parent RECORD column. If error occurs when exporting to any table, the whole export call will return an error but the export results that already succeed will persist. Example: if exporting to table_type_A succeeds when exporting to table_type_B fails during one export call, the results in table_type_A will persist and there will not be partial results persisting in a table. | [optional] 
**table** | **str** | Required. The BigQuery table to which the snapshot result should be written. If this table does not exist, a new table with the given name will be created. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_asset_v1p7beta1_big_query_destination import GoogleCloudAssetV1p7beta1BigQueryDestination

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssetV1p7beta1BigQueryDestination from a JSON string
google_cloud_asset_v1p7beta1_big_query_destination_instance = GoogleCloudAssetV1p7beta1BigQueryDestination.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssetV1p7beta1BigQueryDestination.to_json())

# convert the object into a dict
google_cloud_asset_v1p7beta1_big_query_destination_dict = google_cloud_asset_v1p7beta1_big_query_destination_instance.to_dict()
# create an instance of GoogleCloudAssetV1p7beta1BigQueryDestination from a dict
google_cloud_asset_v1p7beta1_big_query_destination_from_dict = GoogleCloudAssetV1p7beta1BigQueryDestination.from_dict(google_cloud_asset_v1p7beta1_big_query_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


