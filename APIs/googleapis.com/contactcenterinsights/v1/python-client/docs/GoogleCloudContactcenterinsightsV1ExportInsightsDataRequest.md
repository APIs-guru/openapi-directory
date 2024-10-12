# GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest

The request to export insights.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**big_query_destination** | [**GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination**](GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination.md) |  | [optional] 
**filter** | **str** | A filter to reduce results to a specific subset. Useful for exporting conversations with specific properties. | [optional] 
**kms_key** | **str** | A fully qualified KMS key name for BigQuery tables protected by CMEK. Format: projects/{project}/locations/{location}/keyRings/{keyring}/cryptoKeys/{key}/cryptoKeyVersions/{version} | [optional] 
**parent** | **str** | Required. The parent resource to export data from. | [optional] 
**write_disposition** | **str** | Options for what to do if the destination table already exists. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_export_insights_data_request import GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest from a JSON string
google_cloud_contactcenterinsights_v1_export_insights_data_request_instance = GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_export_insights_data_request_dict = google_cloud_contactcenterinsights_v1_export_insights_data_request_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest from a dict
google_cloud_contactcenterinsights_v1_export_insights_data_request_from_dict = GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest.from_dict(google_cloud_contactcenterinsights_v1_export_insights_data_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


