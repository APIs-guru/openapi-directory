# GoogleCloudAiplatformV1DeployIndexRequest

Request message for IndexEndpointService.DeployIndex.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployed_index** | [**GoogleCloudAiplatformV1DeployedIndex**](GoogleCloudAiplatformV1DeployedIndex.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_deploy_index_request import GoogleCloudAiplatformV1DeployIndexRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1DeployIndexRequest from a JSON string
google_cloud_aiplatform_v1_deploy_index_request_instance = GoogleCloudAiplatformV1DeployIndexRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1DeployIndexRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_deploy_index_request_dict = google_cloud_aiplatform_v1_deploy_index_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1DeployIndexRequest from a dict
google_cloud_aiplatform_v1_deploy_index_request_from_dict = GoogleCloudAiplatformV1DeployIndexRequest.from_dict(google_cloud_aiplatform_v1_deploy_index_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


