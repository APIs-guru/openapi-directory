# GoogleCloudAiplatformV1ReadIndexDatapointsResponse

The response message for MatchService.ReadIndexDatapoints.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datapoints** | [**List[GoogleCloudAiplatformV1IndexDatapoint]**](GoogleCloudAiplatformV1IndexDatapoint.md) | The result list of datapoints. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_read_index_datapoints_response import GoogleCloudAiplatformV1ReadIndexDatapointsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ReadIndexDatapointsResponse from a JSON string
google_cloud_aiplatform_v1_read_index_datapoints_response_instance = GoogleCloudAiplatformV1ReadIndexDatapointsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ReadIndexDatapointsResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_read_index_datapoints_response_dict = google_cloud_aiplatform_v1_read_index_datapoints_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ReadIndexDatapointsResponse from a dict
google_cloud_aiplatform_v1_read_index_datapoints_response_from_dict = GoogleCloudAiplatformV1ReadIndexDatapointsResponse.from_dict(google_cloud_aiplatform_v1_read_index_datapoints_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


