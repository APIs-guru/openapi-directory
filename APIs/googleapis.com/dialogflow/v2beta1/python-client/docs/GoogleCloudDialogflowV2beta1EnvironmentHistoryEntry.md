# GoogleCloudDialogflowV2beta1EnvironmentHistoryEntry

Represents an environment history entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_version** | **str** | The agent version loaded into this environment history entry. | [optional] 
**create_time** | **str** | The creation time of this environment history entry. | [optional] 
**description** | **str** | The developer-provided description for this environment history entry. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_environment_history_entry import GoogleCloudDialogflowV2beta1EnvironmentHistoryEntry

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1EnvironmentHistoryEntry from a JSON string
google_cloud_dialogflow_v2beta1_environment_history_entry_instance = GoogleCloudDialogflowV2beta1EnvironmentHistoryEntry.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1EnvironmentHistoryEntry.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_environment_history_entry_dict = google_cloud_dialogflow_v2beta1_environment_history_entry_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1EnvironmentHistoryEntry from a dict
google_cloud_dialogflow_v2beta1_environment_history_entry_from_dict = GoogleCloudDialogflowV2beta1EnvironmentHistoryEntry.from_dict(google_cloud_dialogflow_v2beta1_environment_history_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


