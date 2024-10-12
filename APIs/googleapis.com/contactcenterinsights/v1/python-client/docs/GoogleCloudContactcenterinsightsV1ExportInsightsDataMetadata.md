# GoogleCloudContactcenterinsightsV1ExportInsightsDataMetadata

Metadata for an export insights operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time the operation was created. | [optional] [readonly] 
**end_time** | **str** | Output only. The time the operation finished running. | [optional] [readonly] 
**partial_errors** | [**List[GoogleRpcStatus]**](GoogleRpcStatus.md) | Partial errors during export operation that might cause the operation output to be incomplete. | [optional] 
**request** | [**GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest**](GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_export_insights_data_metadata import GoogleCloudContactcenterinsightsV1ExportInsightsDataMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1ExportInsightsDataMetadata from a JSON string
google_cloud_contactcenterinsights_v1_export_insights_data_metadata_instance = GoogleCloudContactcenterinsightsV1ExportInsightsDataMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1ExportInsightsDataMetadata.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_export_insights_data_metadata_dict = google_cloud_contactcenterinsights_v1_export_insights_data_metadata_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1ExportInsightsDataMetadata from a dict
google_cloud_contactcenterinsights_v1_export_insights_data_metadata_from_dict = GoogleCloudContactcenterinsightsV1ExportInsightsDataMetadata.from_dict(google_cloud_contactcenterinsights_v1_export_insights_data_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


