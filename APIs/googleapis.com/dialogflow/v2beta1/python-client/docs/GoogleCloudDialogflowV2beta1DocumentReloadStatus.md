# GoogleCloudDialogflowV2beta1DocumentReloadStatus

The status of a reload attempt.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 
**time** | **str** | Output only. The time of a reload attempt. This reload may have been triggered automatically or manually and may not have succeeded. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_document_reload_status import GoogleCloudDialogflowV2beta1DocumentReloadStatus

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1DocumentReloadStatus from a JSON string
google_cloud_dialogflow_v2beta1_document_reload_status_instance = GoogleCloudDialogflowV2beta1DocumentReloadStatus.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1DocumentReloadStatus.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_document_reload_status_dict = google_cloud_dialogflow_v2beta1_document_reload_status_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1DocumentReloadStatus from a dict
google_cloud_dialogflow_v2beta1_document_reload_status_from_dict = GoogleCloudDialogflowV2beta1DocumentReloadStatus.from_dict(google_cloud_dialogflow_v2beta1_document_reload_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


