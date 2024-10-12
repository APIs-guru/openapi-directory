# GoogleCloudAiplatformV1RemoveDatapointsRequest

Request message for IndexService.RemoveDatapoints

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datapoint_ids** | **List[str]** | A list of datapoint ids to be deleted. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_remove_datapoints_request import GoogleCloudAiplatformV1RemoveDatapointsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1RemoveDatapointsRequest from a JSON string
google_cloud_aiplatform_v1_remove_datapoints_request_instance = GoogleCloudAiplatformV1RemoveDatapointsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1RemoveDatapointsRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_remove_datapoints_request_dict = google_cloud_aiplatform_v1_remove_datapoints_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1RemoveDatapointsRequest from a dict
google_cloud_aiplatform_v1_remove_datapoints_request_from_dict = GoogleCloudAiplatformV1RemoveDatapointsRequest.from_dict(google_cloud_aiplatform_v1_remove_datapoints_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


