# GoogleCloudDialogflowCxV3AgentGitIntegrationSettings

Settings for connecting to Git repository for an agent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**github_settings** | [**GoogleCloudDialogflowCxV3AgentGitIntegrationSettingsGithubSettings**](GoogleCloudDialogflowCxV3AgentGitIntegrationSettingsGithubSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_agent_git_integration_settings import GoogleCloudDialogflowCxV3AgentGitIntegrationSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3AgentGitIntegrationSettings from a JSON string
google_cloud_dialogflow_cx_v3_agent_git_integration_settings_instance = GoogleCloudDialogflowCxV3AgentGitIntegrationSettings.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3AgentGitIntegrationSettings.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_agent_git_integration_settings_dict = google_cloud_dialogflow_cx_v3_agent_git_integration_settings_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3AgentGitIntegrationSettings from a dict
google_cloud_dialogflow_cx_v3_agent_git_integration_settings_from_dict = GoogleCloudDialogflowCxV3AgentGitIntegrationSettings.from_dict(google_cloud_dialogflow_cx_v3_agent_git_integration_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


