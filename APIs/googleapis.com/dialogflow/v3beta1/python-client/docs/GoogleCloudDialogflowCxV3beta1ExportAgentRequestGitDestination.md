# GoogleCloudDialogflowCxV3beta1ExportAgentRequestGitDestination

Settings for exporting to a git branch.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commit_message** | **str** | Commit message for the git push. | [optional] 
**tracking_branch** | **str** | Tracking branch for the git push. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_export_agent_request_git_destination import GoogleCloudDialogflowCxV3beta1ExportAgentRequestGitDestination

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1ExportAgentRequestGitDestination from a JSON string
google_cloud_dialogflow_cx_v3beta1_export_agent_request_git_destination_instance = GoogleCloudDialogflowCxV3beta1ExportAgentRequestGitDestination.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1ExportAgentRequestGitDestination.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_export_agent_request_git_destination_dict = google_cloud_dialogflow_cx_v3beta1_export_agent_request_git_destination_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1ExportAgentRequestGitDestination from a dict
google_cloud_dialogflow_cx_v3beta1_export_agent_request_git_destination_from_dict = GoogleCloudDialogflowCxV3beta1ExportAgentRequestGitDestination.from_dict(google_cloud_dialogflow_cx_v3beta1_export_agent_request_git_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


