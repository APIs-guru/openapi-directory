# GoogleCloudDialogflowV2beta1IntentBatch

This message is a wrapper around a collection of intents.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**intents** | [**List[GoogleCloudDialogflowV2beta1Intent]**](GoogleCloudDialogflowV2beta1Intent.md) | A collection of intents. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_intent_batch import GoogleCloudDialogflowV2beta1IntentBatch

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1IntentBatch from a JSON string
google_cloud_dialogflow_v2beta1_intent_batch_instance = GoogleCloudDialogflowV2beta1IntentBatch.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1IntentBatch.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_intent_batch_dict = google_cloud_dialogflow_v2beta1_intent_batch_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1IntentBatch from a dict
google_cloud_dialogflow_v2beta1_intent_batch_from_dict = GoogleCloudDialogflowV2beta1IntentBatch.from_dict(google_cloud_dialogflow_v2beta1_intent_batch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


