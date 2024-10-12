# GoogleCloudDialogflowCxV3ExportIntentsRequest

The request message for Intents.ExportIntents.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_format** | **str** | Optional. The data format of the exported intents. If not specified, &#x60;BLOB&#x60; is assumed. | [optional] 
**intents** | **List[str]** | Required. The name of the intents to export. Format: &#x60;projects//locations//agents//intents/&#x60;. | [optional] 
**intents_content_inline** | **bool** | Optional. The option to return the serialized intents inline. | [optional] 
**intents_uri** | **str** | Optional. The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to export the intents to. The format of this URI must be &#x60;gs:///&#x60;. Dialogflow performs a write operation for the Cloud Storage object on the caller&#39;s behalf, so your request authentication must have write permissions for the object. For more information, see [Dialogflow access control](https://cloud.google.com/dialogflow/cx/docs/concept/access-control#storage). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_export_intents_request import GoogleCloudDialogflowCxV3ExportIntentsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3ExportIntentsRequest from a JSON string
google_cloud_dialogflow_cx_v3_export_intents_request_instance = GoogleCloudDialogflowCxV3ExportIntentsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3ExportIntentsRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_export_intents_request_dict = google_cloud_dialogflow_cx_v3_export_intents_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3ExportIntentsRequest from a dict
google_cloud_dialogflow_cx_v3_export_intents_request_from_dict = GoogleCloudDialogflowCxV3ExportIntentsRequest.from_dict(google_cloud_dialogflow_cx_v3_export_intents_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


