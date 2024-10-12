# GoogleCloudDialogflowCxV3beta1ExportFlowResponse

The response message for Flows.ExportFlow.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flow_content** | **bytearray** | Uncompressed raw byte content for flow. | [optional] 
**flow_uri** | **str** | The URI to a file containing the exported flow. This field is populated only if &#x60;flow_uri&#x60; is specified in ExportFlowRequest. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_export_flow_response import GoogleCloudDialogflowCxV3beta1ExportFlowResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1ExportFlowResponse from a JSON string
google_cloud_dialogflow_cx_v3beta1_export_flow_response_instance = GoogleCloudDialogflowCxV3beta1ExportFlowResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1ExportFlowResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_export_flow_response_dict = google_cloud_dialogflow_cx_v3beta1_export_flow_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1ExportFlowResponse from a dict
google_cloud_dialogflow_cx_v3beta1_export_flow_response_from_dict = GoogleCloudDialogflowCxV3beta1ExportFlowResponse.from_dict(google_cloud_dialogflow_cx_v3beta1_export_flow_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


