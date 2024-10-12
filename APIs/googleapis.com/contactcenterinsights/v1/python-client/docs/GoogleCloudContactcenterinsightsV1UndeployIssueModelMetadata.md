# GoogleCloudContactcenterinsightsV1UndeployIssueModelMetadata

Metadata for undeploying an issue model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time the operation was created. | [optional] [readonly] 
**end_time** | **str** | Output only. The time the operation finished running. | [optional] [readonly] 
**request** | [**GoogleCloudContactcenterinsightsV1UndeployIssueModelRequest**](GoogleCloudContactcenterinsightsV1UndeployIssueModelRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_undeploy_issue_model_metadata import GoogleCloudContactcenterinsightsV1UndeployIssueModelMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1UndeployIssueModelMetadata from a JSON string
google_cloud_contactcenterinsights_v1_undeploy_issue_model_metadata_instance = GoogleCloudContactcenterinsightsV1UndeployIssueModelMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1UndeployIssueModelMetadata.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_undeploy_issue_model_metadata_dict = google_cloud_contactcenterinsights_v1_undeploy_issue_model_metadata_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1UndeployIssueModelMetadata from a dict
google_cloud_contactcenterinsights_v1_undeploy_issue_model_metadata_from_dict = GoogleCloudContactcenterinsightsV1UndeployIssueModelMetadata.from_dict(google_cloud_contactcenterinsights_v1_undeploy_issue_model_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


