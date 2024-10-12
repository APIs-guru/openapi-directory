# GoogleCloudDialogflowV2beta1ExportAgentResponse

The response message for Agents.ExportAgent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_content** | **bytearray** | Zip compressed raw byte content for agent. | [optional] 
**agent_uri** | **str** | The URI to a file containing the exported agent. This field is populated only if &#x60;agent_uri&#x60; is specified in &#x60;ExportAgentRequest&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_export_agent_response import GoogleCloudDialogflowV2beta1ExportAgentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1ExportAgentResponse from a JSON string
google_cloud_dialogflow_v2beta1_export_agent_response_instance = GoogleCloudDialogflowV2beta1ExportAgentResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1ExportAgentResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_export_agent_response_dict = google_cloud_dialogflow_v2beta1_export_agent_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1ExportAgentResponse from a dict
google_cloud_dialogflow_v2beta1_export_agent_response_from_dict = GoogleCloudDialogflowV2beta1ExportAgentResponse.from_dict(google_cloud_dialogflow_v2beta1_export_agent_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


