# GoogleCloudContactcenterinsightsV1CreateIssueModelMetadata

Metadata for creating an issue model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time the operation was created. | [optional] [readonly] 
**end_time** | **str** | Output only. The time the operation finished running. | [optional] [readonly] 
**request** | [**GoogleCloudContactcenterinsightsV1CreateIssueModelRequest**](GoogleCloudContactcenterinsightsV1CreateIssueModelRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_create_issue_model_metadata import GoogleCloudContactcenterinsightsV1CreateIssueModelMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1CreateIssueModelMetadata from a JSON string
google_cloud_contactcenterinsights_v1_create_issue_model_metadata_instance = GoogleCloudContactcenterinsightsV1CreateIssueModelMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1CreateIssueModelMetadata.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_create_issue_model_metadata_dict = google_cloud_contactcenterinsights_v1_create_issue_model_metadata_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1CreateIssueModelMetadata from a dict
google_cloud_contactcenterinsights_v1_create_issue_model_metadata_from_dict = GoogleCloudContactcenterinsightsV1CreateIssueModelMetadata.from_dict(google_cloud_contactcenterinsights_v1_create_issue_model_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


