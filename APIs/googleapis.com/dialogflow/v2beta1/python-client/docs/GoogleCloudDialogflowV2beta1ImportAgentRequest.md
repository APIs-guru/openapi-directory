# GoogleCloudDialogflowV2beta1ImportAgentRequest

The request message for Agents.ImportAgent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_content** | **bytearray** | Zip compressed raw byte content for agent. | [optional] 
**agent_uri** | **str** | The URI to a Google Cloud Storage file containing the agent to import. Note: The URI must start with \&quot;gs://\&quot;. Dialogflow performs a read operation for the Cloud Storage object on the caller&#39;s behalf, so your request authentication must have read permissions for the object. For more information, see [Dialogflow access control](https://cloud.google.com/dialogflow/cx/docs/concept/access-control#storage). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_import_agent_request import GoogleCloudDialogflowV2beta1ImportAgentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1ImportAgentRequest from a JSON string
google_cloud_dialogflow_v2beta1_import_agent_request_instance = GoogleCloudDialogflowV2beta1ImportAgentRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1ImportAgentRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_import_agent_request_dict = google_cloud_dialogflow_v2beta1_import_agent_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1ImportAgentRequest from a dict
google_cloud_dialogflow_v2beta1_import_agent_request_from_dict = GoogleCloudDialogflowV2beta1ImportAgentRequest.from_dict(google_cloud_dialogflow_v2beta1_import_agent_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


