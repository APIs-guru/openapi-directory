# GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination

A BigQuery Table Reference.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset** | **str** | Required. The name of the BigQuery dataset that the snapshot result should be exported to. If this dataset does not exist, the export call returns an INVALID_ARGUMENT error. | [optional] 
**project_id** | **str** | A project ID or number. If specified, then export will attempt to write data to this project instead of the resource project. Otherwise, the resource project will be used. | [optional] 
**table** | **str** | The BigQuery table name to which the insights data should be written. If this table does not exist, the export call returns an INVALID_ARGUMENT error. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_export_insights_data_request_big_query_destination import GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination from a JSON string
google_cloud_contactcenterinsights_v1_export_insights_data_request_big_query_destination_instance = GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_export_insights_data_request_big_query_destination_dict = google_cloud_contactcenterinsights_v1_export_insights_data_request_big_query_destination_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination from a dict
google_cloud_contactcenterinsights_v1_export_insights_data_request_big_query_destination_from_dict = GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination.from_dict(google_cloud_contactcenterinsights_v1_export_insights_data_request_big_query_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


