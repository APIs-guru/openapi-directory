# GoogleCloudContactcenterinsightsV1alpha1IssueModelLabelStats

Aggregated statistics about an issue model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analyzed_conversations_count** | **str** | Number of conversations the issue model has analyzed at this point in time. | [optional] 
**issue_stats** | [**Dict[str, GoogleCloudContactcenterinsightsV1alpha1IssueModelLabelStatsIssueStats]**](GoogleCloudContactcenterinsightsV1alpha1IssueModelLabelStatsIssueStats.md) | Statistics on each issue. Key is the issue&#39;s resource name. | [optional] 
**unclassified_conversations_count** | **str** | Number of analyzed conversations for which no issue was applicable at this point in time. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1alpha1_issue_model_label_stats import GoogleCloudContactcenterinsightsV1alpha1IssueModelLabelStats

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1alpha1IssueModelLabelStats from a JSON string
google_cloud_contactcenterinsights_v1alpha1_issue_model_label_stats_instance = GoogleCloudContactcenterinsightsV1alpha1IssueModelLabelStats.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1alpha1IssueModelLabelStats.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1alpha1_issue_model_label_stats_dict = google_cloud_contactcenterinsights_v1alpha1_issue_model_label_stats_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1alpha1IssueModelLabelStats from a dict
google_cloud_contactcenterinsights_v1alpha1_issue_model_label_stats_from_dict = GoogleCloudContactcenterinsightsV1alpha1IssueModelLabelStats.from_dict(google_cloud_contactcenterinsights_v1alpha1_issue_model_label_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


