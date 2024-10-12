# GoogleCloudAiplatformV1beta1PurgeExecutionsRequest

Request message for MetadataService.PurgeExecutions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | **str** | Required. A required filter matching the Executions to be purged. E.g., &#x60;update_time &lt;&#x3D; 2020-11-19T11:30:00-04:00&#x60;. | [optional] 
**force** | **bool** | Optional. Flag to indicate to actually perform the purge. If &#x60;force&#x60; is set to false, the method will return a sample of Execution names that would be deleted. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_purge_executions_request import GoogleCloudAiplatformV1beta1PurgeExecutionsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1PurgeExecutionsRequest from a JSON string
google_cloud_aiplatform_v1beta1_purge_executions_request_instance = GoogleCloudAiplatformV1beta1PurgeExecutionsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1PurgeExecutionsRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_purge_executions_request_dict = google_cloud_aiplatform_v1beta1_purge_executions_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1PurgeExecutionsRequest from a dict
google_cloud_aiplatform_v1beta1_purge_executions_request_from_dict = GoogleCloudAiplatformV1beta1PurgeExecutionsRequest.from_dict(google_cloud_aiplatform_v1beta1_purge_executions_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


