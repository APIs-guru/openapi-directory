# GoogleCloudDialogflowV2ImportConversationDataOperationResponse

Response used for ConversationDatasets.ImportConversationData long running operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversation_dataset** | **str** | The resource name of the imported conversation dataset. Format: &#x60;projects//locations//conversationDatasets/&#x60; | [optional] 
**import_count** | **int** | Number of conversations imported successfully. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_import_conversation_data_operation_response import GoogleCloudDialogflowV2ImportConversationDataOperationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2ImportConversationDataOperationResponse from a JSON string
google_cloud_dialogflow_v2_import_conversation_data_operation_response_instance = GoogleCloudDialogflowV2ImportConversationDataOperationResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2ImportConversationDataOperationResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_import_conversation_data_operation_response_dict = google_cloud_dialogflow_v2_import_conversation_data_operation_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2ImportConversationDataOperationResponse from a dict
google_cloud_dialogflow_v2_import_conversation_data_operation_response_from_dict = GoogleCloudDialogflowV2ImportConversationDataOperationResponse.from_dict(google_cloud_dialogflow_v2_import_conversation_data_operation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


