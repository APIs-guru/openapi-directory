# GoogleCloudIntegrationsV1alphaCloudKmsConfig

Configuration information for Client's Cloud KMS information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Required. A Cloud KMS key is a named object containing one or more key versions, along with metadata for the key. A key exists on exactly one key ring tied to a specific location. | [optional] 
**key_version** | **str** | Optional. Each version of a key contains key material used for encryption or signing. A key&#39;s version is represented by an integer, starting at 1. To decrypt data or verify a signature, you must use the same key version that was used to encrypt or sign the data. | [optional] 
**kms_location** | **str** | Required. Location name of the key ring, e.g. \&quot;us-west1\&quot;. | [optional] 
**kms_project_id** | **str** | Optional. The gcp project id of the project where the kms key stored. If empty, the kms key is stored at the same project as customer&#39;s project and ecrypted with CMEK, otherwise, the kms key is stored in the tenant project and encrypted with GMEK | [optional] 
**kms_ring** | **str** | Required. A key ring organizes keys in a specific Google Cloud location and allows you to manage access control on groups of keys. A key ring&#39;s name does not need to be unique across a Google Cloud project, but must be unique within a given location. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_cloud_kms_config import GoogleCloudIntegrationsV1alphaCloudKmsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaCloudKmsConfig from a JSON string
google_cloud_integrations_v1alpha_cloud_kms_config_instance = GoogleCloudIntegrationsV1alphaCloudKmsConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaCloudKmsConfig.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_cloud_kms_config_dict = google_cloud_integrations_v1alpha_cloud_kms_config_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaCloudKmsConfig from a dict
google_cloud_integrations_v1alpha_cloud_kms_config_from_dict = GoogleCloudIntegrationsV1alphaCloudKmsConfig.from_dict(google_cloud_integrations_v1alpha_cloud_kms_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


