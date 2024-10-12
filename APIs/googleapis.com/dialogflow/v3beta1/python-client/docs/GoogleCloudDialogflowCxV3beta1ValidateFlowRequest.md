# GoogleCloudDialogflowCxV3beta1ValidateFlowRequest

The request message for Flows.ValidateFlow.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language_code** | **str** | If not specified, the agent&#39;s default language is used. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_validate_flow_request import GoogleCloudDialogflowCxV3beta1ValidateFlowRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1ValidateFlowRequest from a JSON string
google_cloud_dialogflow_cx_v3beta1_validate_flow_request_instance = GoogleCloudDialogflowCxV3beta1ValidateFlowRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1ValidateFlowRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_validate_flow_request_dict = google_cloud_dialogflow_cx_v3beta1_validate_flow_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1ValidateFlowRequest from a dict
google_cloud_dialogflow_cx_v3beta1_validate_flow_request_from_dict = GoogleCloudDialogflowCxV3beta1ValidateFlowRequest.from_dict(google_cloud_dialogflow_cx_v3beta1_validate_flow_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


