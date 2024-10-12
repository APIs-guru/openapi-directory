# GoogleCloudDialogflowV2BatchDeleteIntentsRequest

The request message for Intents.BatchDeleteIntents.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**intents** | [**List[GoogleCloudDialogflowV2Intent]**](GoogleCloudDialogflowV2Intent.md) | Required. The collection of intents to delete. Only intent &#x60;name&#x60; must be filled in. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_batch_delete_intents_request import GoogleCloudDialogflowV2BatchDeleteIntentsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2BatchDeleteIntentsRequest from a JSON string
google_cloud_dialogflow_v2_batch_delete_intents_request_instance = GoogleCloudDialogflowV2BatchDeleteIntentsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2BatchDeleteIntentsRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_batch_delete_intents_request_dict = google_cloud_dialogflow_v2_batch_delete_intents_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2BatchDeleteIntentsRequest from a dict
google_cloud_dialogflow_v2_batch_delete_intents_request_from_dict = GoogleCloudDialogflowV2BatchDeleteIntentsRequest.from_dict(google_cloud_dialogflow_v2_batch_delete_intents_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


