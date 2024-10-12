# GoogleCloudContactcenterinsightsV1alpha1ImportIssueModelRequest

Request to import an issue model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_new_model** | **bool** | Optional. If set to true, will create a new issue model from the imported file with randomly generated IDs for the issue model and corresponding issues. Otherwise, replaces an existing model with the same ID as the file. | [optional] 
**gcs_source** | [**GoogleCloudContactcenterinsightsV1alpha1ImportIssueModelRequestGcsSource**](GoogleCloudContactcenterinsightsV1alpha1ImportIssueModelRequestGcsSource.md) |  | [optional] 
**parent** | **str** | Required. The parent resource of the issue model. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1alpha1_import_issue_model_request import GoogleCloudContactcenterinsightsV1alpha1ImportIssueModelRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1alpha1ImportIssueModelRequest from a JSON string
google_cloud_contactcenterinsights_v1alpha1_import_issue_model_request_instance = GoogleCloudContactcenterinsightsV1alpha1ImportIssueModelRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1alpha1ImportIssueModelRequest.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1alpha1_import_issue_model_request_dict = google_cloud_contactcenterinsights_v1alpha1_import_issue_model_request_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1alpha1ImportIssueModelRequest from a dict
google_cloud_contactcenterinsights_v1alpha1_import_issue_model_request_from_dict = GoogleCloudContactcenterinsightsV1alpha1ImportIssueModelRequest.from_dict(google_cloud_contactcenterinsights_v1alpha1_import_issue_model_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


