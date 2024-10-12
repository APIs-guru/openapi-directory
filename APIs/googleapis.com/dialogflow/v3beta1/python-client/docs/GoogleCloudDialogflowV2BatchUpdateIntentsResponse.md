# GoogleCloudDialogflowV2BatchUpdateIntentsResponse

The response message for Intents.BatchUpdateIntents.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**intents** | [**List[GoogleCloudDialogflowV2Intent]**](GoogleCloudDialogflowV2Intent.md) | The collection of updated or created intents. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_batch_update_intents_response import GoogleCloudDialogflowV2BatchUpdateIntentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2BatchUpdateIntentsResponse from a JSON string
google_cloud_dialogflow_v2_batch_update_intents_response_instance = GoogleCloudDialogflowV2BatchUpdateIntentsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2BatchUpdateIntentsResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_batch_update_intents_response_dict = google_cloud_dialogflow_v2_batch_update_intents_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2BatchUpdateIntentsResponse from a dict
google_cloud_dialogflow_v2_batch_update_intents_response_from_dict = GoogleCloudDialogflowV2BatchUpdateIntentsResponse.from_dict(google_cloud_dialogflow_v2_batch_update_intents_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


