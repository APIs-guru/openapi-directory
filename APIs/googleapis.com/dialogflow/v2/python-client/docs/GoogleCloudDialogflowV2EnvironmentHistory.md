# GoogleCloudDialogflowV2EnvironmentHistory

The response message for Environments.GetEnvironmentHistory.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[GoogleCloudDialogflowV2EnvironmentHistoryEntry]**](GoogleCloudDialogflowV2EnvironmentHistoryEntry.md) | Output only. The list of agent environments. There will be a maximum number of items returned based on the page_size field in the request. | [optional] [readonly] 
**next_page_token** | **str** | Output only. Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] [readonly] 
**parent** | **str** | Output only. The name of the environment this history is for. Supported formats: - &#x60;projects//agent/environments/&#x60; - &#x60;projects//locations//agent/environments/&#x60; The environment ID for the default environment is &#x60;-&#x60;. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_environment_history import GoogleCloudDialogflowV2EnvironmentHistory

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2EnvironmentHistory from a JSON string
google_cloud_dialogflow_v2_environment_history_instance = GoogleCloudDialogflowV2EnvironmentHistory.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2EnvironmentHistory.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_environment_history_dict = google_cloud_dialogflow_v2_environment_history_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2EnvironmentHistory from a dict
google_cloud_dialogflow_v2_environment_history_from_dict = GoogleCloudDialogflowV2EnvironmentHistory.from_dict(google_cloud_dialogflow_v2_environment_history_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


