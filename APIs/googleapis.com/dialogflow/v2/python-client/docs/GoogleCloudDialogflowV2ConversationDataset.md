# GoogleCloudDialogflowV2ConversationDataset

Represents a conversation dataset that a user imports raw data into. The data inside ConversationDataset can not be changed after ImportConversationData finishes (and calling ImportConversationData on a dataset that already has data is not allowed).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversation_count** | **str** | Output only. The number of conversations this conversation dataset contains. | [optional] [readonly] 
**conversation_info** | [**GoogleCloudDialogflowV2ConversationInfo**](GoogleCloudDialogflowV2ConversationInfo.md) |  | [optional] 
**create_time** | **str** | Output only. Creation time of this dataset. | [optional] [readonly] 
**description** | **str** | Optional. The description of the dataset. Maximum of 10000 bytes. | [optional] 
**display_name** | **str** | Required. The display name of the dataset. Maximum of 64 bytes. | [optional] 
**input_config** | [**GoogleCloudDialogflowV2InputConfig**](GoogleCloudDialogflowV2InputConfig.md) |  | [optional] 
**name** | **str** | Output only. ConversationDataset resource name. Format: &#x60;projects//locations//conversationDatasets/&#x60; | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_conversation_dataset import GoogleCloudDialogflowV2ConversationDataset

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2ConversationDataset from a JSON string
google_cloud_dialogflow_v2_conversation_dataset_instance = GoogleCloudDialogflowV2ConversationDataset.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2ConversationDataset.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_conversation_dataset_dict = google_cloud_dialogflow_v2_conversation_dataset_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2ConversationDataset from a dict
google_cloud_dialogflow_v2_conversation_dataset_from_dict = GoogleCloudDialogflowV2ConversationDataset.from_dict(google_cloud_dialogflow_v2_conversation_dataset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


