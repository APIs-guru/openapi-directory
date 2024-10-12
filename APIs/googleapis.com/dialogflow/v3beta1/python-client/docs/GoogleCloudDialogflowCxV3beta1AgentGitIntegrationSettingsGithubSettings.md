# GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettingsGithubSettings

Settings of integration with GitHub.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **str** | The access token used to authenticate the access to the GitHub repository. | [optional] 
**branches** | **List[str]** | A list of branches configured to be used from Dialogflow. | [optional] 
**display_name** | **str** | The unique repository display name for the GitHub repository. | [optional] 
**repository_uri** | **str** | The GitHub repository URI related to the agent. | [optional] 
**tracking_branch** | **str** | The branch of the GitHub repository tracked for this agent. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_agent_git_integration_settings_github_settings import GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettingsGithubSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettingsGithubSettings from a JSON string
google_cloud_dialogflow_cx_v3beta1_agent_git_integration_settings_github_settings_instance = GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettingsGithubSettings.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettingsGithubSettings.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_agent_git_integration_settings_github_settings_dict = google_cloud_dialogflow_cx_v3beta1_agent_git_integration_settings_github_settings_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettingsGithubSettings from a dict
google_cloud_dialogflow_cx_v3beta1_agent_git_integration_settings_github_settings_from_dict = GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettingsGithubSettings.from_dict(google_cloud_dialogflow_cx_v3beta1_agent_git_integration_settings_github_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


