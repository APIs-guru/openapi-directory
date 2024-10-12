# GoogleCloudDialogflowV2AutomatedAgentConfig

Defines the Automated Agent to connect to a conversation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent** | **str** | Required. ID of the Dialogflow agent environment to use. This project needs to either be the same project as the conversation or you need to grant &#x60;service-@gcp-sa-dialogflow.iam.gserviceaccount.com&#x60; the &#x60;Dialogflow API Service Agent&#x60; role in this project. - For ES agents, use format: &#x60;projects//locations//agent/environments/&#x60;. If environment is not specified, the default &#x60;draft&#x60; environment is used. Refer to [DetectIntentRequest](/dialogflow/docs/reference/rpc/google.cloud.dialogflow.v2#google.cloud.dialogflow.v2.DetectIntentRequest) for more details. - For CX agents, use format &#x60;projects//locations//agents//environments/&#x60;. If environment is not specified, the default &#x60;draft&#x60; environment is used. | [optional] 
**session_ttl** | **str** | Optional. Configure lifetime of the Dialogflow session. By default, a Dialogflow CX session remains active and its data is stored for 30 minutes after the last request is sent for the session. This value should be no longer than 1 day. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_automated_agent_config import GoogleCloudDialogflowV2AutomatedAgentConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2AutomatedAgentConfig from a JSON string
google_cloud_dialogflow_v2_automated_agent_config_instance = GoogleCloudDialogflowV2AutomatedAgentConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2AutomatedAgentConfig.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_automated_agent_config_dict = google_cloud_dialogflow_v2_automated_agent_config_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2AutomatedAgentConfig from a dict
google_cloud_dialogflow_v2_automated_agent_config_from_dict = GoogleCloudDialogflowV2AutomatedAgentConfig.from_dict(google_cloud_dialogflow_v2_automated_agent_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


