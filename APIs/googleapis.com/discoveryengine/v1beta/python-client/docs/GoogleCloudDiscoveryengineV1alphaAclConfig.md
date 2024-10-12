# GoogleCloudDiscoveryengineV1alphaAclConfig

Access Control Configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**idp_config** | [**GoogleCloudDiscoveryengineV1alphaIdpConfig**](GoogleCloudDiscoveryengineV1alphaIdpConfig.md) |  | [optional] 
**name** | **str** | Immutable. The full resource name of the acl configuration. Format: &#x60;projects/{project}/locations/{location}/aclConfig&#x60;. This field must be a UTF-8 encoded string with a length limit of 1024 characters. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_acl_config import GoogleCloudDiscoveryengineV1alphaAclConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaAclConfig from a JSON string
google_cloud_discoveryengine_v1alpha_acl_config_instance = GoogleCloudDiscoveryengineV1alphaAclConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaAclConfig.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_acl_config_dict = google_cloud_discoveryengine_v1alpha_acl_config_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaAclConfig from a dict
google_cloud_discoveryengine_v1alpha_acl_config_from_dict = GoogleCloudDiscoveryengineV1alphaAclConfig.from_dict(google_cloud_discoveryengine_v1alpha_acl_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


