# GoogleCloudDialogflowCxV3beta1ExportAgentRequest

The request message for Agents.ExportAgent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_uri** | **str** | Optional. The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to export the agent to. The format of this URI must be &#x60;gs:///&#x60;. If left unspecified, the serialized agent is returned inline. Dialogflow performs a write operation for the Cloud Storage object on the caller&#39;s behalf, so your request authentication must have write permissions for the object. For more information, see [Dialogflow access control](https://cloud.google.com/dialogflow/cx/docs/concept/access-control#storage). | [optional] 
**data_format** | **str** | Optional. The data format of the exported agent. If not specified, &#x60;BLOB&#x60; is assumed. | [optional] 
**environment** | **str** | Optional. Environment name. If not set, draft environment is assumed. Format: &#x60;projects//locations//agents//environments/&#x60;. | [optional] 
**git_destination** | [**GoogleCloudDialogflowCxV3beta1ExportAgentRequestGitDestination**](GoogleCloudDialogflowCxV3beta1ExportAgentRequestGitDestination.md) |  | [optional] 
**include_bigquery_export_settings** | **bool** | Optional. Whether to include BigQuery Export setting. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_export_agent_request import GoogleCloudDialogflowCxV3beta1ExportAgentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1ExportAgentRequest from a JSON string
google_cloud_dialogflow_cx_v3beta1_export_agent_request_instance = GoogleCloudDialogflowCxV3beta1ExportAgentRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1ExportAgentRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_export_agent_request_dict = google_cloud_dialogflow_cx_v3beta1_export_agent_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1ExportAgentRequest from a dict
google_cloud_dialogflow_cx_v3beta1_export_agent_request_from_dict = GoogleCloudDialogflowCxV3beta1ExportAgentRequest.from_dict(google_cloud_dialogflow_cx_v3beta1_export_agent_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


