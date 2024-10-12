# GoogleCloudAiplatformV1beta1ReportRuntimeEventResponse

Response message for NotebookInternalService.ReportRuntimeEvent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**idle_shutdown_message** | **str** | If the idle shutdown is blocked by CP, CP will send the block message. Otherwise, this field is not set. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_report_runtime_event_response import GoogleCloudAiplatformV1beta1ReportRuntimeEventResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ReportRuntimeEventResponse from a JSON string
google_cloud_aiplatform_v1beta1_report_runtime_event_response_instance = GoogleCloudAiplatformV1beta1ReportRuntimeEventResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ReportRuntimeEventResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_report_runtime_event_response_dict = google_cloud_aiplatform_v1beta1_report_runtime_event_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ReportRuntimeEventResponse from a dict
google_cloud_aiplatform_v1beta1_report_runtime_event_response_from_dict = GoogleCloudAiplatformV1beta1ReportRuntimeEventResponse.from_dict(google_cloud_aiplatform_v1beta1_report_runtime_event_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


