# GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettings

Settings for connecting to Git repository for an agent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**github_settings** | [**GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettingsGithubSettings**](GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettingsGithubSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_agent_git_integration_settings import GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettings from a JSON string
google_cloud_dialogflow_cx_v3beta1_agent_git_integration_settings_instance = GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettings.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettings.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_agent_git_integration_settings_dict = google_cloud_dialogflow_cx_v3beta1_agent_git_integration_settings_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettings from a dict
google_cloud_dialogflow_cx_v3beta1_agent_git_integration_settings_from_dict = GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettings.from_dict(google_cloud_dialogflow_cx_v3beta1_agent_git_integration_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


