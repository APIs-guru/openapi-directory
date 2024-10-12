# GoogleCloudContactcenterinsightsV1ExportIssueModelRequestGcsDestination

Google Cloud Storage Object URI to save the issue model to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_uri** | **str** | Required. Format: &#x60;gs:///&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_export_issue_model_request_gcs_destination import GoogleCloudContactcenterinsightsV1ExportIssueModelRequestGcsDestination

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1ExportIssueModelRequestGcsDestination from a JSON string
google_cloud_contactcenterinsights_v1_export_issue_model_request_gcs_destination_instance = GoogleCloudContactcenterinsightsV1ExportIssueModelRequestGcsDestination.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1ExportIssueModelRequestGcsDestination.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_export_issue_model_request_gcs_destination_dict = google_cloud_contactcenterinsights_v1_export_issue_model_request_gcs_destination_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1ExportIssueModelRequestGcsDestination from a dict
google_cloud_contactcenterinsights_v1_export_issue_model_request_gcs_destination_from_dict = GoogleCloudContactcenterinsightsV1ExportIssueModelRequestGcsDestination.from_dict(google_cloud_contactcenterinsights_v1_export_issue_model_request_gcs_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


