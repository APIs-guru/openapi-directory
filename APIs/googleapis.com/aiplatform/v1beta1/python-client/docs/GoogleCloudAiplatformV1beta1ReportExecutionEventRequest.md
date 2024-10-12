# GoogleCloudAiplatformV1beta1ReportExecutionEventRequest

Request message for NotebookInternalService.ReportExecutionEvent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_type** | **str** | Required. The type of the event. | [optional] 
**status** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 
**vm_token** | **str** | Required. The VM identity token (a JWT) for authenticating the VM. https://cloud.google.com/compute/docs/instances/verifying-instance-identity | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_report_execution_event_request import GoogleCloudAiplatformV1beta1ReportExecutionEventRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ReportExecutionEventRequest from a JSON string
google_cloud_aiplatform_v1beta1_report_execution_event_request_instance = GoogleCloudAiplatformV1beta1ReportExecutionEventRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ReportExecutionEventRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_report_execution_event_request_dict = google_cloud_aiplatform_v1beta1_report_execution_event_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ReportExecutionEventRequest from a dict
google_cloud_aiplatform_v1beta1_report_execution_event_request_from_dict = GoogleCloudAiplatformV1beta1ReportExecutionEventRequest.from_dict(google_cloud_aiplatform_v1beta1_report_execution_event_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


