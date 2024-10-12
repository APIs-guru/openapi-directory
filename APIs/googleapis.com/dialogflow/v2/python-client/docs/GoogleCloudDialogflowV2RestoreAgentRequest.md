# GoogleCloudDialogflowV2RestoreAgentRequest

The request message for Agents.RestoreAgent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_content** | **bytearray** | Zip compressed raw byte content for agent. | [optional] 
**agent_uri** | **str** | The URI to a Google Cloud Storage file containing the agent to restore. Note: The URI must start with \&quot;gs://\&quot;. Dialogflow performs a read operation for the Cloud Storage object on the caller&#39;s behalf, so your request authentication must have read permissions for the object. For more information, see [Dialogflow access control](https://cloud.google.com/dialogflow/cx/docs/concept/access-control#storage). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_restore_agent_request import GoogleCloudDialogflowV2RestoreAgentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2RestoreAgentRequest from a JSON string
google_cloud_dialogflow_v2_restore_agent_request_instance = GoogleCloudDialogflowV2RestoreAgentRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2RestoreAgentRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_restore_agent_request_dict = google_cloud_dialogflow_v2_restore_agent_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2RestoreAgentRequest from a dict
google_cloud_dialogflow_v2_restore_agent_request_from_dict = GoogleCloudDialogflowV2RestoreAgentRequest.from_dict(google_cloud_dialogflow_v2_restore_agent_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


