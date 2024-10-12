# GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse

Response of querying an issue model's statistics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_stats** | [**GoogleCloudContactcenterinsightsV1IssueModelLabelStats**](GoogleCloudContactcenterinsightsV1IssueModelLabelStats.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_calculate_issue_model_stats_response import GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse from a JSON string
google_cloud_contactcenterinsights_v1_calculate_issue_model_stats_response_instance = GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_calculate_issue_model_stats_response_dict = google_cloud_contactcenterinsights_v1_calculate_issue_model_stats_response_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse from a dict
google_cloud_contactcenterinsights_v1_calculate_issue_model_stats_response_from_dict = GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse.from_dict(google_cloud_contactcenterinsights_v1_calculate_issue_model_stats_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


