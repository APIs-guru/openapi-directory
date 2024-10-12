# GoogleCloudContactcenterinsightsV1DeleteIssueModelMetadata

Metadata for deleting an issue model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time the operation was created. | [optional] [readonly] 
**end_time** | **str** | Output only. The time the operation finished running. | [optional] [readonly] 
**request** | [**GoogleCloudContactcenterinsightsV1DeleteIssueModelRequest**](GoogleCloudContactcenterinsightsV1DeleteIssueModelRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_delete_issue_model_metadata import GoogleCloudContactcenterinsightsV1DeleteIssueModelMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1DeleteIssueModelMetadata from a JSON string
google_cloud_contactcenterinsights_v1_delete_issue_model_metadata_instance = GoogleCloudContactcenterinsightsV1DeleteIssueModelMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1DeleteIssueModelMetadata.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_delete_issue_model_metadata_dict = google_cloud_contactcenterinsights_v1_delete_issue_model_metadata_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1DeleteIssueModelMetadata from a dict
google_cloud_contactcenterinsights_v1_delete_issue_model_metadata_from_dict = GoogleCloudContactcenterinsightsV1DeleteIssueModelMetadata.from_dict(google_cloud_contactcenterinsights_v1_delete_issue_model_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


