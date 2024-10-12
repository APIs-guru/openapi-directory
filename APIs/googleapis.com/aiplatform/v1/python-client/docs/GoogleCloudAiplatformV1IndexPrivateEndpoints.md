# GoogleCloudAiplatformV1IndexPrivateEndpoints

IndexPrivateEndpoints proto is used to provide paths for users to send requests via private endpoints (e.g. private service access, private service connect). To send request via private service access, use match_grpc_address. To send request via private service connect, use service_attachment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**match_grpc_address** | **str** | Output only. The ip address used to send match gRPC requests. | [optional] [readonly] 
**psc_automated_endpoints** | [**List[GoogleCloudAiplatformV1PscAutomatedEndpoints]**](GoogleCloudAiplatformV1PscAutomatedEndpoints.md) | Output only. PscAutomatedEndpoints is populated if private service connect is enabled if PscAutomatedConfig is set. | [optional] [readonly] 
**service_attachment** | **str** | Output only. The name of the service attachment resource. Populated if private service connect is enabled. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_index_private_endpoints import GoogleCloudAiplatformV1IndexPrivateEndpoints

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1IndexPrivateEndpoints from a JSON string
google_cloud_aiplatform_v1_index_private_endpoints_instance = GoogleCloudAiplatformV1IndexPrivateEndpoints.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1IndexPrivateEndpoints.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_index_private_endpoints_dict = google_cloud_aiplatform_v1_index_private_endpoints_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1IndexPrivateEndpoints from a dict
google_cloud_aiplatform_v1_index_private_endpoints_from_dict = GoogleCloudAiplatformV1IndexPrivateEndpoints.from_dict(google_cloud_aiplatform_v1_index_private_endpoints_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


