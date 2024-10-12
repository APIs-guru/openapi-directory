# GoogleCloudDialogflowCxV3ImportIntentsRequest

The request message for Intents.ImportIntents.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**intents_content** | [**GoogleCloudDialogflowCxV3InlineSource**](GoogleCloudDialogflowCxV3InlineSource.md) |  | [optional] 
**intents_uri** | **str** | The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to import intents from. The format of this URI must be &#x60;gs:///&#x60;. Dialogflow performs a read operation for the Cloud Storage object on the caller&#39;s behalf, so your request authentication must have read permissions for the object. For more information, see [Dialogflow access control](https://cloud.google.com/dialogflow/cx/docs/concept/access-control#storage). | [optional] 
**merge_option** | **str** | Merge option for importing intents. If not specified, &#x60;REJECT&#x60; is assumed. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_import_intents_request import GoogleCloudDialogflowCxV3ImportIntentsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3ImportIntentsRequest from a JSON string
google_cloud_dialogflow_cx_v3_import_intents_request_instance = GoogleCloudDialogflowCxV3ImportIntentsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3ImportIntentsRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_import_intents_request_dict = google_cloud_dialogflow_cx_v3_import_intents_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3ImportIntentsRequest from a dict
google_cloud_dialogflow_cx_v3_import_intents_request_from_dict = GoogleCloudDialogflowCxV3ImportIntentsRequest.from_dict(google_cloud_dialogflow_cx_v3_import_intents_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


