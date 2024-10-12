# GoogleCloudAiplatformV1ShieldedVmConfig

A set of Shielded Instance options. See [Images using supported Shielded VM features](https://cloud.google.com/compute/docs/instances/modifying-shielded-vm).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_secure_boot** | **bool** | Defines whether the instance has [Secure Boot](https://cloud.google.com/compute/shielded-vm/docs/shielded-vm#secure-boot) enabled. Secure Boot helps ensure that the system only runs authentic software by verifying the digital signature of all boot components, and halting the boot process if signature verification fails. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_shielded_vm_config import GoogleCloudAiplatformV1ShieldedVmConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ShieldedVmConfig from a JSON string
google_cloud_aiplatform_v1_shielded_vm_config_instance = GoogleCloudAiplatformV1ShieldedVmConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ShieldedVmConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_shielded_vm_config_dict = google_cloud_aiplatform_v1_shielded_vm_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ShieldedVmConfig from a dict
google_cloud_aiplatform_v1_shielded_vm_config_from_dict = GoogleCloudAiplatformV1ShieldedVmConfig.from_dict(google_cloud_aiplatform_v1_shielded_vm_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


