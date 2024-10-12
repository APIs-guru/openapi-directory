# GoogleCloudDialogflowCxV3ExportAgentResponse

The response message for Agents.ExportAgent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_content** | **bytearray** | Uncompressed raw byte content for agent. This field is populated if none of &#x60;agent_uri&#x60; and &#x60;git_destination&#x60; are specified in ExportAgentRequest. | [optional] 
**agent_uri** | **str** | The URI to a file containing the exported agent. This field is populated if &#x60;agent_uri&#x60; is specified in ExportAgentRequest. | [optional] 
**commit_sha** | **str** | Commit SHA of the git push. This field is populated if &#x60;git_destination&#x60; is specified in ExportAgentRequest. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_export_agent_response import GoogleCloudDialogflowCxV3ExportAgentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3ExportAgentResponse from a JSON string
google_cloud_dialogflow_cx_v3_export_agent_response_instance = GoogleCloudDialogflowCxV3ExportAgentResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3ExportAgentResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_export_agent_response_dict = google_cloud_dialogflow_cx_v3_export_agent_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3ExportAgentResponse from a dict
google_cloud_dialogflow_cx_v3_export_agent_response_from_dict = GoogleCloudDialogflowCxV3ExportAgentResponse.from_dict(google_cloud_dialogflow_cx_v3_export_agent_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


