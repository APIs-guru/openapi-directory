# GoogleCloudContactcenterinsightsV1alpha1CreateIssueModelRequest

The request to create an issue model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issue_model** | [**GoogleCloudContactcenterinsightsV1alpha1IssueModel**](GoogleCloudContactcenterinsightsV1alpha1IssueModel.md) |  | [optional] 
**parent** | **str** | Required. The parent resource of the issue model. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1alpha1_create_issue_model_request import GoogleCloudContactcenterinsightsV1alpha1CreateIssueModelRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1alpha1CreateIssueModelRequest from a JSON string
google_cloud_contactcenterinsights_v1alpha1_create_issue_model_request_instance = GoogleCloudContactcenterinsightsV1alpha1CreateIssueModelRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1alpha1CreateIssueModelRequest.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1alpha1_create_issue_model_request_dict = google_cloud_contactcenterinsights_v1alpha1_create_issue_model_request_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1alpha1CreateIssueModelRequest from a dict
google_cloud_contactcenterinsights_v1alpha1_create_issue_model_request_from_dict = GoogleCloudContactcenterinsightsV1alpha1CreateIssueModelRequest.from_dict(google_cloud_contactcenterinsights_v1alpha1_create_issue_model_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


