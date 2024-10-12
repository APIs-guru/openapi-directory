# GoogleCloudIntegrationsV1alphaSwitchEncryptionRequest

Request for the SwitchEncryption rpc

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_kms_config** | [**GoogleCloudIntegrationsV1alphaCloudKmsConfig**](GoogleCloudIntegrationsV1alphaCloudKmsConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_switch_encryption_request import GoogleCloudIntegrationsV1alphaSwitchEncryptionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaSwitchEncryptionRequest from a JSON string
google_cloud_integrations_v1alpha_switch_encryption_request_instance = GoogleCloudIntegrationsV1alphaSwitchEncryptionRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaSwitchEncryptionRequest.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_switch_encryption_request_dict = google_cloud_integrations_v1alpha_switch_encryption_request_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaSwitchEncryptionRequest from a dict
google_cloud_integrations_v1alpha_switch_encryption_request_from_dict = GoogleCloudIntegrationsV1alphaSwitchEncryptionRequest.from_dict(google_cloud_integrations_v1alpha_switch_encryption_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


