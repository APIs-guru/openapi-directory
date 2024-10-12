# GoogleCloudAiplatformV1beta1ReportRuntimeEventRequest

Request message for NotebookInternalService.ReportRuntimeEvent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_details** | **Dict[str, str]** | Optional. The details of the request for debug. | [optional] 
**event_type** | **str** | Required. The type of the event. | [optional] 
**internal_os_service_state_instance** | [**List[GoogleCloudAiplatformV1beta1InternalOsServiceStateInstance]**](GoogleCloudAiplatformV1beta1InternalOsServiceStateInstance.md) | The details of the internal os service states. | [optional] 
**internal_os_service_state_instances** | [**List[GoogleCloudAiplatformV1beta1InternalOsServiceStateInstance]**](GoogleCloudAiplatformV1beta1InternalOsServiceStateInstance.md) | Optional. The details of the internal os service states. | [optional] 
**vm_token** | **str** | Required. The VM identity token (a JWT) for authenticating the VM. https://cloud.google.com/compute/docs/instances/verifying-instance-identity | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_report_runtime_event_request import GoogleCloudAiplatformV1beta1ReportRuntimeEventRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ReportRuntimeEventRequest from a JSON string
google_cloud_aiplatform_v1beta1_report_runtime_event_request_instance = GoogleCloudAiplatformV1beta1ReportRuntimeEventRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ReportRuntimeEventRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_report_runtime_event_request_dict = google_cloud_aiplatform_v1beta1_report_runtime_event_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ReportRuntimeEventRequest from a dict
google_cloud_aiplatform_v1beta1_report_runtime_event_request_from_dict = GoogleCloudAiplatformV1beta1ReportRuntimeEventRequest.from_dict(google_cloud_aiplatform_v1beta1_report_runtime_event_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


