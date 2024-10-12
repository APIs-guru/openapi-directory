# GoogleCloudAiplatformV1beta1PrivateServiceConnectConfig

Represents configuration for private service connect.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_private_service_connect** | **bool** | Required. If true, expose the IndexEndpoint via private service connect. | [optional] 
**project_allowlist** | **List[str]** | A list of Projects from which the forwarding rule will target the service attachment. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_private_service_connect_config import GoogleCloudAiplatformV1beta1PrivateServiceConnectConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1PrivateServiceConnectConfig from a JSON string
google_cloud_aiplatform_v1beta1_private_service_connect_config_instance = GoogleCloudAiplatformV1beta1PrivateServiceConnectConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1PrivateServiceConnectConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_private_service_connect_config_dict = google_cloud_aiplatform_v1beta1_private_service_connect_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1PrivateServiceConnectConfig from a dict
google_cloud_aiplatform_v1beta1_private_service_connect_config_from_dict = GoogleCloudAiplatformV1beta1PrivateServiceConnectConfig.from_dict(google_cloud_aiplatform_v1beta1_private_service_connect_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


