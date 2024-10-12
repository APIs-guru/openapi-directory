# GoogleCloudDialogflowV2GenerateStatelessSummaryRequest

The request message for Conversations.GenerateStatelessSummary.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversation_profile** | [**GoogleCloudDialogflowV2ConversationProfile**](GoogleCloudDialogflowV2ConversationProfile.md) |  | [optional] 
**latest_message** | **str** | The name of the latest conversation message used as context for generating a Summary. If empty, the latest message of the conversation will be used. The format is specific to the user and the names of the messages provided. | [optional] 
**max_context_size** | **int** | Max number of messages prior to and including [latest_message] to use as context when compiling the suggestion. By default 500 and at most 1000. | [optional] 
**stateless_conversation** | [**GoogleCloudDialogflowV2GenerateStatelessSummaryRequestMinimalConversation**](GoogleCloudDialogflowV2GenerateStatelessSummaryRequestMinimalConversation.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_generate_stateless_summary_request import GoogleCloudDialogflowV2GenerateStatelessSummaryRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2GenerateStatelessSummaryRequest from a JSON string
google_cloud_dialogflow_v2_generate_stateless_summary_request_instance = GoogleCloudDialogflowV2GenerateStatelessSummaryRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2GenerateStatelessSummaryRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_generate_stateless_summary_request_dict = google_cloud_dialogflow_v2_generate_stateless_summary_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2GenerateStatelessSummaryRequest from a dict
google_cloud_dialogflow_v2_generate_stateless_summary_request_from_dict = GoogleCloudDialogflowV2GenerateStatelessSummaryRequest.from_dict(google_cloud_dialogflow_v2_generate_stateless_summary_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


