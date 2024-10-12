# GoogleCloudAiplatformV1ReadIndexDatapointsRequest

The request message for MatchService.ReadIndexDatapoints.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployed_index_id** | **str** | The ID of the DeployedIndex that will serve the request. | [optional] 
**ids** | **List[str]** | IDs of the datapoints to be searched for. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_read_index_datapoints_request import GoogleCloudAiplatformV1ReadIndexDatapointsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ReadIndexDatapointsRequest from a JSON string
google_cloud_aiplatform_v1_read_index_datapoints_request_instance = GoogleCloudAiplatformV1ReadIndexDatapointsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ReadIndexDatapointsRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_read_index_datapoints_request_dict = google_cloud_aiplatform_v1_read_index_datapoints_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ReadIndexDatapointsRequest from a dict
google_cloud_aiplatform_v1_read_index_datapoints_request_from_dict = GoogleCloudAiplatformV1ReadIndexDatapointsRequest.from_dict(google_cloud_aiplatform_v1_read_index_datapoints_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


