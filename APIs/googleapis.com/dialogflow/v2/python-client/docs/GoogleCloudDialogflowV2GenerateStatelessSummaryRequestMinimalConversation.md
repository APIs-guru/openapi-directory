# GoogleCloudDialogflowV2GenerateStatelessSummaryRequestMinimalConversation

The minimum amount of information required to generate a Summary without having a Conversation resource created.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**messages** | [**List[GoogleCloudDialogflowV2Message]**](GoogleCloudDialogflowV2Message.md) | Required. The messages that the Summary will be generated from. It is expected that this message content is already redacted and does not contain any PII. Required fields: {content, language_code, participant, participant_role} Optional fields: {send_time} If send_time is not provided, then the messages must be provided in chronological order. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_generate_stateless_summary_request_minimal_conversation import GoogleCloudDialogflowV2GenerateStatelessSummaryRequestMinimalConversation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2GenerateStatelessSummaryRequestMinimalConversation from a JSON string
google_cloud_dialogflow_v2_generate_stateless_summary_request_minimal_conversation_instance = GoogleCloudDialogflowV2GenerateStatelessSummaryRequestMinimalConversation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2GenerateStatelessSummaryRequestMinimalConversation.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_generate_stateless_summary_request_minimal_conversation_dict = google_cloud_dialogflow_v2_generate_stateless_summary_request_minimal_conversation_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2GenerateStatelessSummaryRequestMinimalConversation from a dict
google_cloud_dialogflow_v2_generate_stateless_summary_request_minimal_conversation_from_dict = GoogleCloudDialogflowV2GenerateStatelessSummaryRequestMinimalConversation.from_dict(google_cloud_dialogflow_v2_generate_stateless_summary_request_minimal_conversation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


