# GoogleCloudContactcenterinsightsV1ImportIssueModelMetadata

Metadata used for import issue model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | The time the operation was created. | [optional] 
**end_time** | **str** | The time the operation finished running. | [optional] 
**request** | [**GoogleCloudContactcenterinsightsV1ImportIssueModelRequest**](GoogleCloudContactcenterinsightsV1ImportIssueModelRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_import_issue_model_metadata import GoogleCloudContactcenterinsightsV1ImportIssueModelMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1ImportIssueModelMetadata from a JSON string
google_cloud_contactcenterinsights_v1_import_issue_model_metadata_instance = GoogleCloudContactcenterinsightsV1ImportIssueModelMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1ImportIssueModelMetadata.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_import_issue_model_metadata_dict = google_cloud_contactcenterinsights_v1_import_issue_model_metadata_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1ImportIssueModelMetadata from a dict
google_cloud_contactcenterinsights_v1_import_issue_model_metadata_from_dict = GoogleCloudContactcenterinsightsV1ImportIssueModelMetadata.from_dict(google_cloud_contactcenterinsights_v1_import_issue_model_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


