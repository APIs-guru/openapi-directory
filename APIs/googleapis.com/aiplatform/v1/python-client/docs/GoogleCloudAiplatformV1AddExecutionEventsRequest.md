# GoogleCloudAiplatformV1AddExecutionEventsRequest

Request message for MetadataService.AddExecutionEvents.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**events** | [**List[GoogleCloudAiplatformV1Event]**](GoogleCloudAiplatformV1Event.md) | The Events to create and add. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_add_execution_events_request import GoogleCloudAiplatformV1AddExecutionEventsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1AddExecutionEventsRequest from a JSON string
google_cloud_aiplatform_v1_add_execution_events_request_instance = GoogleCloudAiplatformV1AddExecutionEventsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1AddExecutionEventsRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_add_execution_events_request_dict = google_cloud_aiplatform_v1_add_execution_events_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1AddExecutionEventsRequest from a dict
google_cloud_aiplatform_v1_add_execution_events_request_from_dict = GoogleCloudAiplatformV1AddExecutionEventsRequest.from_dict(google_cloud_aiplatform_v1_add_execution_events_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


