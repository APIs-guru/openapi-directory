# GoogleCloudDialogflowCxV3beta1ImportFlowRequest

The request message for Flows.ImportFlow.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flow_content** | **bytearray** | Uncompressed raw byte content for flow. | [optional] 
**flow_import_strategy** | [**GoogleCloudDialogflowCxV3beta1FlowImportStrategy**](GoogleCloudDialogflowCxV3beta1FlowImportStrategy.md) |  | [optional] 
**flow_uri** | **str** | The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to import flow from. The format of this URI must be &#x60;gs:///&#x60;. Dialogflow performs a read operation for the Cloud Storage object on the caller&#39;s behalf, so your request authentication must have read permissions for the object. For more information, see [Dialogflow access control](https://cloud.google.com/dialogflow/cx/docs/concept/access-control#storage). | [optional] 
**import_option** | **str** | Flow import mode. If not specified, &#x60;KEEP&#x60; is assumed. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_import_flow_request import GoogleCloudDialogflowCxV3beta1ImportFlowRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1ImportFlowRequest from a JSON string
google_cloud_dialogflow_cx_v3beta1_import_flow_request_instance = GoogleCloudDialogflowCxV3beta1ImportFlowRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1ImportFlowRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_import_flow_request_dict = google_cloud_dialogflow_cx_v3beta1_import_flow_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1ImportFlowRequest from a dict
google_cloud_dialogflow_cx_v3beta1_import_flow_request_from_dict = GoogleCloudDialogflowCxV3beta1ImportFlowRequest.from_dict(google_cloud_dialogflow_cx_v3beta1_import_flow_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


