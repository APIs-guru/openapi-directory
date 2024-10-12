# GoogleCloudContactcenterinsightsV1alpha1DeleteIssueModelRequest

The request to delete an issue model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Required. The name of the issue model to delete. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1alpha1_delete_issue_model_request import GoogleCloudContactcenterinsightsV1alpha1DeleteIssueModelRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1alpha1DeleteIssueModelRequest from a JSON string
google_cloud_contactcenterinsights_v1alpha1_delete_issue_model_request_instance = GoogleCloudContactcenterinsightsV1alpha1DeleteIssueModelRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1alpha1DeleteIssueModelRequest.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1alpha1_delete_issue_model_request_dict = google_cloud_contactcenterinsights_v1alpha1_delete_issue_model_request_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1alpha1DeleteIssueModelRequest from a dict
google_cloud_contactcenterinsights_v1alpha1_delete_issue_model_request_from_dict = GoogleCloudContactcenterinsightsV1alpha1DeleteIssueModelRequest.from_dict(google_cloud_contactcenterinsights_v1alpha1_delete_issue_model_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


