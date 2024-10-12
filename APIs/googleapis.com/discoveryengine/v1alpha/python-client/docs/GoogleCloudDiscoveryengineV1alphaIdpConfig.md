# GoogleCloudDiscoveryengineV1alphaIdpConfig

Identity Provider Config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external_idp_config** | [**GoogleCloudDiscoveryengineV1alphaIdpConfigExternalIdpConfig**](GoogleCloudDiscoveryengineV1alphaIdpConfigExternalIdpConfig.md) |  | [optional] 
**idp_type** | **str** | Identity provider type configured. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_idp_config import GoogleCloudDiscoveryengineV1alphaIdpConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaIdpConfig from a JSON string
google_cloud_discoveryengine_v1alpha_idp_config_instance = GoogleCloudDiscoveryengineV1alphaIdpConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaIdpConfig.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_idp_config_dict = google_cloud_discoveryengine_v1alpha_idp_config_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaIdpConfig from a dict
google_cloud_discoveryengine_v1alpha_idp_config_from_dict = GoogleCloudDiscoveryengineV1alphaIdpConfig.from_dict(google_cloud_discoveryengine_v1alpha_idp_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


