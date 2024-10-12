# GoogleCloudAiplatformV1PrivateEndpoints

PrivateEndpoints proto is used to provide paths for users to send requests privately. To send request via private service access, use predict_http_uri, explain_http_uri or health_http_uri. To send request via private service connect, use service_attachment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**explain_http_uri** | **str** | Output only. Http(s) path to send explain requests. | [optional] [readonly] 
**health_http_uri** | **str** | Output only. Http(s) path to send health check requests. | [optional] [readonly] 
**predict_http_uri** | **str** | Output only. Http(s) path to send prediction requests. | [optional] [readonly] 
**service_attachment** | **str** | Output only. The name of the service attachment resource. Populated if private service connect is enabled. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_private_endpoints import GoogleCloudAiplatformV1PrivateEndpoints

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1PrivateEndpoints from a JSON string
google_cloud_aiplatform_v1_private_endpoints_instance = GoogleCloudAiplatformV1PrivateEndpoints.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1PrivateEndpoints.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_private_endpoints_dict = google_cloud_aiplatform_v1_private_endpoints_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1PrivateEndpoints from a dict
google_cloud_aiplatform_v1_private_endpoints_from_dict = GoogleCloudAiplatformV1PrivateEndpoints.from_dict(google_cloud_aiplatform_v1_private_endpoints_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


