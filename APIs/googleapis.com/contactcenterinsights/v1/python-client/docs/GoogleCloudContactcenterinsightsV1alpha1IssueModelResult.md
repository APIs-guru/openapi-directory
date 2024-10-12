# GoogleCloudContactcenterinsightsV1alpha1IssueModelResult

Issue Modeling result on a conversation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issue_model** | **str** | Issue model that generates the result. Format: projects/{project}/locations/{location}/issueModels/{issue_model} | [optional] 
**issues** | [**List[GoogleCloudContactcenterinsightsV1alpha1IssueAssignment]**](GoogleCloudContactcenterinsightsV1alpha1IssueAssignment.md) | All the matched issues. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1alpha1_issue_model_result import GoogleCloudContactcenterinsightsV1alpha1IssueModelResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1alpha1IssueModelResult from a JSON string
google_cloud_contactcenterinsights_v1alpha1_issue_model_result_instance = GoogleCloudContactcenterinsightsV1alpha1IssueModelResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1alpha1IssueModelResult.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1alpha1_issue_model_result_dict = google_cloud_contactcenterinsights_v1alpha1_issue_model_result_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1alpha1IssueModelResult from a dict
google_cloud_contactcenterinsights_v1alpha1_issue_model_result_from_dict = GoogleCloudContactcenterinsightsV1alpha1IssueModelResult.from_dict(google_cloud_contactcenterinsights_v1alpha1_issue_model_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


