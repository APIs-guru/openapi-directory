# GoogleCloudDialogflowV2GenerateStatelessSummaryResponse

The response message for Conversations.GenerateStatelessSummary.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context_size** | **int** | Number of messages prior to and including last_conversation_message used to compile the suggestion. It may be smaller than the GenerateStatelessSummaryRequest.context_size field in the request if there weren&#39;t that many messages in the conversation. | [optional] 
**latest_message** | **str** | The name of the latest conversation message used as context for compiling suggestion. The format is specific to the user and the names of the messages provided. | [optional] 
**summary** | [**GoogleCloudDialogflowV2GenerateStatelessSummaryResponseSummary**](GoogleCloudDialogflowV2GenerateStatelessSummaryResponseSummary.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_generate_stateless_summary_response import GoogleCloudDialogflowV2GenerateStatelessSummaryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2GenerateStatelessSummaryResponse from a JSON string
google_cloud_dialogflow_v2_generate_stateless_summary_response_instance = GoogleCloudDialogflowV2GenerateStatelessSummaryResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2GenerateStatelessSummaryResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_generate_stateless_summary_response_dict = google_cloud_dialogflow_v2_generate_stateless_summary_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2GenerateStatelessSummaryResponse from a dict
google_cloud_dialogflow_v2_generate_stateless_summary_response_from_dict = GoogleCloudDialogflowV2GenerateStatelessSummaryResponse.from_dict(google_cloud_dialogflow_v2_generate_stateless_summary_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


