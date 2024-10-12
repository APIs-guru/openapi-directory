# GoogleCloudContactcenterinsightsV1UndeployIssueModelRequest

The request to undeploy an issue model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Required. The issue model to undeploy. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_undeploy_issue_model_request import GoogleCloudContactcenterinsightsV1UndeployIssueModelRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1UndeployIssueModelRequest from a JSON string
google_cloud_contactcenterinsights_v1_undeploy_issue_model_request_instance = GoogleCloudContactcenterinsightsV1UndeployIssueModelRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1UndeployIssueModelRequest.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_undeploy_issue_model_request_dict = google_cloud_contactcenterinsights_v1_undeploy_issue_model_request_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1UndeployIssueModelRequest from a dict
google_cloud_contactcenterinsights_v1_undeploy_issue_model_request_from_dict = GoogleCloudContactcenterinsightsV1UndeployIssueModelRequest.from_dict(google_cloud_contactcenterinsights_v1_undeploy_issue_model_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


