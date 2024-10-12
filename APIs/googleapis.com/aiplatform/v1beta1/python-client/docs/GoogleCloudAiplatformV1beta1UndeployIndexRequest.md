# GoogleCloudAiplatformV1beta1UndeployIndexRequest

Request message for IndexEndpointService.UndeployIndex.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployed_index_id** | **str** | Required. The ID of the DeployedIndex to be undeployed from the IndexEndpoint. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_undeploy_index_request import GoogleCloudAiplatformV1beta1UndeployIndexRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1UndeployIndexRequest from a JSON string
google_cloud_aiplatform_v1beta1_undeploy_index_request_instance = GoogleCloudAiplatformV1beta1UndeployIndexRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1UndeployIndexRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_undeploy_index_request_dict = google_cloud_aiplatform_v1beta1_undeploy_index_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1UndeployIndexRequest from a dict
google_cloud_aiplatform_v1beta1_undeploy_index_request_from_dict = GoogleCloudAiplatformV1beta1UndeployIndexRequest.from_dict(google_cloud_aiplatform_v1beta1_undeploy_index_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


