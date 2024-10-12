# GoogleCloudContactcenterinsightsV1DeployIssueModelRequest

The request to deploy an issue model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Required. The issue model to deploy. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_deploy_issue_model_request import GoogleCloudContactcenterinsightsV1DeployIssueModelRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1DeployIssueModelRequest from a JSON string
google_cloud_contactcenterinsights_v1_deploy_issue_model_request_instance = GoogleCloudContactcenterinsightsV1DeployIssueModelRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1DeployIssueModelRequest.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_deploy_issue_model_request_dict = google_cloud_contactcenterinsights_v1_deploy_issue_model_request_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1DeployIssueModelRequest from a dict
google_cloud_contactcenterinsights_v1_deploy_issue_model_request_from_dict = GoogleCloudContactcenterinsightsV1DeployIssueModelRequest.from_dict(google_cloud_contactcenterinsights_v1_deploy_issue_model_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


