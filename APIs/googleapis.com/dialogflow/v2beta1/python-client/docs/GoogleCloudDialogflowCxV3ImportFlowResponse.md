# GoogleCloudDialogflowCxV3ImportFlowResponse

The response message for Flows.ImportFlow.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flow** | **str** | The unique identifier of the new flow. Format: &#x60;projects//locations//agents//flows/&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_import_flow_response import GoogleCloudDialogflowCxV3ImportFlowResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3ImportFlowResponse from a JSON string
google_cloud_dialogflow_cx_v3_import_flow_response_instance = GoogleCloudDialogflowCxV3ImportFlowResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3ImportFlowResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_import_flow_response_dict = google_cloud_dialogflow_cx_v3_import_flow_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3ImportFlowResponse from a dict
google_cloud_dialogflow_cx_v3_import_flow_response_from_dict = GoogleCloudDialogflowCxV3ImportFlowResponse.from_dict(google_cloud_dialogflow_cx_v3_import_flow_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


