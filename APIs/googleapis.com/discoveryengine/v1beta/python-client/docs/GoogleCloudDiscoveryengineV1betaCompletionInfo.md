# GoogleCloudDiscoveryengineV1betaCompletionInfo

Detailed completion information including completion attribution token and clicked completion info.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**selected_position** | **int** | End user selected CompleteQueryResponse.QuerySuggestion.suggestion position, starting from 0. | [optional] 
**selected_suggestion** | **str** | End user selected CompleteQueryResponse.QuerySuggestion.suggestion. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_completion_info import GoogleCloudDiscoveryengineV1betaCompletionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaCompletionInfo from a JSON string
google_cloud_discoveryengine_v1beta_completion_info_instance = GoogleCloudDiscoveryengineV1betaCompletionInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaCompletionInfo.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_completion_info_dict = google_cloud_discoveryengine_v1beta_completion_info_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaCompletionInfo from a dict
google_cloud_discoveryengine_v1beta_completion_info_from_dict = GoogleCloudDiscoveryengineV1betaCompletionInfo.from_dict(google_cloud_discoveryengine_v1beta_completion_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


