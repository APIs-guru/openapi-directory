# GoogleCloudContactcenterinsightsV1ExportIssueModelRequest

Request to export an issue model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_destination** | [**GoogleCloudContactcenterinsightsV1ExportIssueModelRequestGcsDestination**](GoogleCloudContactcenterinsightsV1ExportIssueModelRequestGcsDestination.md) |  | [optional] 
**name** | **str** | Required. The issue model to export | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_export_issue_model_request import GoogleCloudContactcenterinsightsV1ExportIssueModelRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1ExportIssueModelRequest from a JSON string
google_cloud_contactcenterinsights_v1_export_issue_model_request_instance = GoogleCloudContactcenterinsightsV1ExportIssueModelRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1ExportIssueModelRequest.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_export_issue_model_request_dict = google_cloud_contactcenterinsights_v1_export_issue_model_request_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1ExportIssueModelRequest from a dict
google_cloud_contactcenterinsights_v1_export_issue_model_request_from_dict = GoogleCloudContactcenterinsightsV1ExportIssueModelRequest.from_dict(google_cloud_contactcenterinsights_v1_export_issue_model_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


