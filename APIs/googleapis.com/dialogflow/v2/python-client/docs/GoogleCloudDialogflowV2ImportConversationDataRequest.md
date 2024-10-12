# GoogleCloudDialogflowV2ImportConversationDataRequest

The request message for ConversationDatasets.ImportConversationData.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input_config** | [**GoogleCloudDialogflowV2InputConfig**](GoogleCloudDialogflowV2InputConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_import_conversation_data_request import GoogleCloudDialogflowV2ImportConversationDataRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2ImportConversationDataRequest from a JSON string
google_cloud_dialogflow_v2_import_conversation_data_request_instance = GoogleCloudDialogflowV2ImportConversationDataRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2ImportConversationDataRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_import_conversation_data_request_dict = google_cloud_dialogflow_v2_import_conversation_data_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2ImportConversationDataRequest from a dict
google_cloud_dialogflow_v2_import_conversation_data_request_from_dict = GoogleCloudDialogflowV2ImportConversationDataRequest.from_dict(google_cloud_dialogflow_v2_import_conversation_data_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


