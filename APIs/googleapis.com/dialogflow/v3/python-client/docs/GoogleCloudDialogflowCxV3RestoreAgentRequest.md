# GoogleCloudDialogflowCxV3RestoreAgentRequest

The request message for Agents.RestoreAgent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_content** | **bytearray** | Uncompressed raw byte content for agent. | [optional] 
**agent_uri** | **str** | The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to restore agent from. The format of this URI must be &#x60;gs:///&#x60;. Dialogflow performs a read operation for the Cloud Storage object on the caller&#39;s behalf, so your request authentication must have read permissions for the object. For more information, see [Dialogflow access control](https://cloud.google.com/dialogflow/cx/docs/concept/access-control#storage). | [optional] 
**git_source** | [**GoogleCloudDialogflowCxV3RestoreAgentRequestGitSource**](GoogleCloudDialogflowCxV3RestoreAgentRequestGitSource.md) |  | [optional] 
**restore_option** | **str** | Agent restore mode. If not specified, &#x60;KEEP&#x60; is assumed. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_restore_agent_request import GoogleCloudDialogflowCxV3RestoreAgentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3RestoreAgentRequest from a JSON string
google_cloud_dialogflow_cx_v3_restore_agent_request_instance = GoogleCloudDialogflowCxV3RestoreAgentRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3RestoreAgentRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_restore_agent_request_dict = google_cloud_dialogflow_cx_v3_restore_agent_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3RestoreAgentRequest from a dict
google_cloud_dialogflow_cx_v3_restore_agent_request_from_dict = GoogleCloudDialogflowCxV3RestoreAgentRequest.from_dict(google_cloud_dialogflow_cx_v3_restore_agent_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


