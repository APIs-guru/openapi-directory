# GoogleCloudContactcenterinsightsV1CalculateStatsResponse

The response for calculating conversation statistics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average_duration** | **str** | The average duration of all conversations. The average is calculated using only conversations that have a time duration. | [optional] 
**average_turn_count** | **int** | The average number of turns per conversation. | [optional] 
**conversation_count** | **int** | The total number of conversations. | [optional] 
**conversation_count_time_series** | [**GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries**](GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries.md) |  | [optional] 
**custom_highlighter_matches** | **Dict[str, int]** | A map associating each custom highlighter resource name with its respective number of matches in the set of conversations. | [optional] 
**issue_matches** | **Dict[str, int]** | A map associating each issue resource name with its respective number of matches in the set of conversations. Key has the format: &#x60;projects//locations//issueModels//issues/&#x60; Deprecated, use &#x60;issue_matches_stats&#x60; field instead. | [optional] 
**issue_matches_stats** | [**Dict[str, GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats]**](GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats.md) | A map associating each issue resource name with its respective number of matches in the set of conversations. Key has the format: &#x60;projects//locations//issueModels//issues/&#x60; | [optional] 
**smart_highlighter_matches** | **Dict[str, int]** | A map associating each smart highlighter display name with its respective number of matches in the set of conversations. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_calculate_stats_response import GoogleCloudContactcenterinsightsV1CalculateStatsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1CalculateStatsResponse from a JSON string
google_cloud_contactcenterinsights_v1_calculate_stats_response_instance = GoogleCloudContactcenterinsightsV1CalculateStatsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1CalculateStatsResponse.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_calculate_stats_response_dict = google_cloud_contactcenterinsights_v1_calculate_stats_response_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1CalculateStatsResponse from a dict
google_cloud_contactcenterinsights_v1_calculate_stats_response_from_dict = GoogleCloudContactcenterinsightsV1CalculateStatsResponse.from_dict(google_cloud_contactcenterinsights_v1_calculate_stats_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


