# GoogleCloudDialogflowCxV3beta1ExportFlowRequest

The request message for Flows.ExportFlow.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flow_uri** | **str** | Optional. The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to export the flow to. The format of this URI must be &#x60;gs:///&#x60;. If left unspecified, the serialized flow is returned inline. Dialogflow performs a write operation for the Cloud Storage object on the caller&#39;s behalf, so your request authentication must have write permissions for the object. For more information, see [Dialogflow access control](https://cloud.google.com/dialogflow/cx/docs/concept/access-control#storage). | [optional] 
**include_referenced_flows** | **bool** | Optional. Whether to export flows referenced by the specified flow. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_export_flow_request import GoogleCloudDialogflowCxV3beta1ExportFlowRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1ExportFlowRequest from a JSON string
google_cloud_dialogflow_cx_v3beta1_export_flow_request_instance = GoogleCloudDialogflowCxV3beta1ExportFlowRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1ExportFlowRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_export_flow_request_dict = google_cloud_dialogflow_cx_v3beta1_export_flow_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1ExportFlowRequest from a dict
google_cloud_dialogflow_cx_v3beta1_export_flow_request_from_dict = GoogleCloudDialogflowCxV3beta1ExportFlowRequest.from_dict(google_cloud_dialogflow_cx_v3beta1_export_flow_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


