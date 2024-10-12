# GoogleCloudContactcenterinsightsV1CreateIssueModelRequest

The request to create an issue model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issue_model** | [**GoogleCloudContactcenterinsightsV1IssueModel**](GoogleCloudContactcenterinsightsV1IssueModel.md) |  | [optional] 
**parent** | **str** | Required. The parent resource of the issue model. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_create_issue_model_request import GoogleCloudContactcenterinsightsV1CreateIssueModelRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1CreateIssueModelRequest from a JSON string
google_cloud_contactcenterinsights_v1_create_issue_model_request_instance = GoogleCloudContactcenterinsightsV1CreateIssueModelRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1CreateIssueModelRequest.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_create_issue_model_request_dict = google_cloud_contactcenterinsights_v1_create_issue_model_request_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1CreateIssueModelRequest from a dict
google_cloud_contactcenterinsights_v1_create_issue_model_request_from_dict = GoogleCloudContactcenterinsightsV1CreateIssueModelRequest.from_dict(google_cloud_contactcenterinsights_v1_create_issue_model_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


