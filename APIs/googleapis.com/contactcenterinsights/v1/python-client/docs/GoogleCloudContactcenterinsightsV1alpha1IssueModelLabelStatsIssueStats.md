# GoogleCloudContactcenterinsightsV1alpha1IssueModelLabelStatsIssueStats

Aggregated statistics about an issue.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Display name of the issue. | [optional] 
**issue** | **str** | Issue resource. Format: projects/{project}/locations/{location}/issueModels/{issue_model}/issues/{issue} | [optional] 
**labeled_conversations_count** | **str** | Number of conversations attached to the issue at this point in time. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1alpha1_issue_model_label_stats_issue_stats import GoogleCloudContactcenterinsightsV1alpha1IssueModelLabelStatsIssueStats

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1alpha1IssueModelLabelStatsIssueStats from a JSON string
google_cloud_contactcenterinsights_v1alpha1_issue_model_label_stats_issue_stats_instance = GoogleCloudContactcenterinsightsV1alpha1IssueModelLabelStatsIssueStats.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1alpha1IssueModelLabelStatsIssueStats.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1alpha1_issue_model_label_stats_issue_stats_dict = google_cloud_contactcenterinsights_v1alpha1_issue_model_label_stats_issue_stats_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1alpha1IssueModelLabelStatsIssueStats from a dict
google_cloud_contactcenterinsights_v1alpha1_issue_model_label_stats_issue_stats_from_dict = GoogleCloudContactcenterinsightsV1alpha1IssueModelLabelStatsIssueStats.from_dict(google_cloud_contactcenterinsights_v1alpha1_issue_model_label_stats_issue_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


