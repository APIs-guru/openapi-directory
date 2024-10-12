# GoogleCloudAiplatformV1beta1FindNeighborsRequest

The request message for MatchService.FindNeighbors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployed_index_id** | **str** | The ID of the DeployedIndex that will serve the request. This request is sent to a specific IndexEndpoint, as per the IndexEndpoint.network. That IndexEndpoint also has IndexEndpoint.deployed_indexes, and each such index has a DeployedIndex.id field. The value of the field below must equal one of the DeployedIndex.id fields of the IndexEndpoint that is being called for this request. | [optional] 
**queries** | [**List[GoogleCloudAiplatformV1beta1FindNeighborsRequestQuery]**](GoogleCloudAiplatformV1beta1FindNeighborsRequestQuery.md) | The list of queries. | [optional] 
**return_full_datapoint** | **bool** | If set to true, the full datapoints (including all vector values and restricts) of the nearest neighbors are returned. Note that returning full datapoint will significantly increase the latency and cost of the query. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_find_neighbors_request import GoogleCloudAiplatformV1beta1FindNeighborsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1FindNeighborsRequest from a JSON string
google_cloud_aiplatform_v1beta1_find_neighbors_request_instance = GoogleCloudAiplatformV1beta1FindNeighborsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1FindNeighborsRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_find_neighbors_request_dict = google_cloud_aiplatform_v1beta1_find_neighbors_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1FindNeighborsRequest from a dict
google_cloud_aiplatform_v1beta1_find_neighbors_request_from_dict = GoogleCloudAiplatformV1beta1FindNeighborsRequest.from_dict(google_cloud_aiplatform_v1beta1_find_neighbors_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


