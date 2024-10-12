# GoogleCloudDialogflowCxV3FlowValidationResult

The response message for Flows.GetFlowValidationResult.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The unique identifier of the flow validation result. Format: &#x60;projects//locations//agents//flows//validationResult&#x60;. | [optional] 
**update_time** | **str** | Last time the flow was validated. | [optional] 
**validation_messages** | [**List[GoogleCloudDialogflowCxV3ValidationMessage]**](GoogleCloudDialogflowCxV3ValidationMessage.md) | Contains all validation messages. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_flow_validation_result import GoogleCloudDialogflowCxV3FlowValidationResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3FlowValidationResult from a JSON string
google_cloud_dialogflow_cx_v3_flow_validation_result_instance = GoogleCloudDialogflowCxV3FlowValidationResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3FlowValidationResult.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_flow_validation_result_dict = google_cloud_dialogflow_cx_v3_flow_validation_result_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3FlowValidationResult from a dict
google_cloud_dialogflow_cx_v3_flow_validation_result_from_dict = GoogleCloudDialogflowCxV3FlowValidationResult.from_dict(google_cloud_dialogflow_cx_v3_flow_validation_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


