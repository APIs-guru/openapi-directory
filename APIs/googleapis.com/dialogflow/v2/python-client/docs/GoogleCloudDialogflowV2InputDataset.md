# GoogleCloudDialogflowV2InputDataset

InputDataset used to create model or do evaluation. NextID:5

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset** | **str** | Required. ConversationDataset resource name. Format: &#x60;projects//locations//conversationDatasets/&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_input_dataset import GoogleCloudDialogflowV2InputDataset

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2InputDataset from a JSON string
google_cloud_dialogflow_v2_input_dataset_instance = GoogleCloudDialogflowV2InputDataset.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2InputDataset.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_input_dataset_dict = google_cloud_dialogflow_v2_input_dataset_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2InputDataset from a dict
google_cloud_dialogflow_v2_input_dataset_from_dict = GoogleCloudDialogflowV2InputDataset.from_dict(google_cloud_dialogflow_v2_input_dataset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


