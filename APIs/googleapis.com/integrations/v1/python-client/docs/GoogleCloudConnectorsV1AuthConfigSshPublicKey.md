# GoogleCloudConnectorsV1AuthConfigSshPublicKey

Parameters to support Ssh public key Authentication.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cert_type** | **str** | Format of SSH Client cert. | [optional] 
**ssh_client_cert** | [**GoogleCloudConnectorsV1Secret**](GoogleCloudConnectorsV1Secret.md) |  | [optional] 
**ssh_client_cert_pass** | [**GoogleCloudConnectorsV1Secret**](GoogleCloudConnectorsV1Secret.md) |  | [optional] 
**username** | **str** | The user account used to authenticate. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_connectors_v1_auth_config_ssh_public_key import GoogleCloudConnectorsV1AuthConfigSshPublicKey

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudConnectorsV1AuthConfigSshPublicKey from a JSON string
google_cloud_connectors_v1_auth_config_ssh_public_key_instance = GoogleCloudConnectorsV1AuthConfigSshPublicKey.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudConnectorsV1AuthConfigSshPublicKey.to_json())

# convert the object into a dict
google_cloud_connectors_v1_auth_config_ssh_public_key_dict = google_cloud_connectors_v1_auth_config_ssh_public_key_instance.to_dict()
# create an instance of GoogleCloudConnectorsV1AuthConfigSshPublicKey from a dict
google_cloud_connectors_v1_auth_config_ssh_public_key_from_dict = GoogleCloudConnectorsV1AuthConfigSshPublicKey.from_dict(google_cloud_connectors_v1_auth_config_ssh_public_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


