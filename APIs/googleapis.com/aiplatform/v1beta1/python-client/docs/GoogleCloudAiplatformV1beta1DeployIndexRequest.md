# GoogleCloudAiplatformV1beta1DeployIndexRequest

Request message for IndexEndpointService.DeployIndex.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployed_index** | [**GoogleCloudAiplatformV1beta1DeployedIndex**](GoogleCloudAiplatformV1beta1DeployedIndex.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_deploy_index_request import GoogleCloudAiplatformV1beta1DeployIndexRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1DeployIndexRequest from a JSON string
google_cloud_aiplatform_v1beta1_deploy_index_request_instance = GoogleCloudAiplatformV1beta1DeployIndexRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1DeployIndexRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_deploy_index_request_dict = google_cloud_aiplatform_v1beta1_deploy_index_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1DeployIndexRequest from a dict
google_cloud_aiplatform_v1beta1_deploy_index_request_from_dict = GoogleCloudAiplatformV1beta1DeployIndexRequest.from_dict(google_cloud_aiplatform_v1beta1_deploy_index_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


