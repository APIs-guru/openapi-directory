# ContaineranalysisGoogleDevtoolsCloudbuildV1Secret

Pairs a set of secret environment variables containing encrypted values with the Cloud KMS key to use to decrypt the value. Note: Use `kmsKeyName` with `available_secrets` instead of using `kmsKeyName` with `secret`. For instructions see: https://cloud.google.com/cloud-build/docs/securing-builds/use-encrypted-credentials.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kms_key_name** | **str** | Cloud KMS key name to use to decrypt these envs. | [optional] 
**secret_env** | **Dict[str, bytearray]** | Map of environment variable name to its encrypted value. Secret environment variables must be unique across all of a build&#39;s secrets, and must be used by at least one build step. Values can be at most 64 KB in size. There can be at most 100 secret values across all of a build&#39;s secrets. | [optional] 

## Example

```python
from openapi_client.models.containeranalysis_google_devtools_cloudbuild_v1_secret import ContaineranalysisGoogleDevtoolsCloudbuildV1Secret

# TODO update the JSON string below
json = "{}"
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1Secret from a JSON string
containeranalysis_google_devtools_cloudbuild_v1_secret_instance = ContaineranalysisGoogleDevtoolsCloudbuildV1Secret.from_json(json)
# print the JSON string representation of the object
print(ContaineranalysisGoogleDevtoolsCloudbuildV1Secret.to_json())

# convert the object into a dict
containeranalysis_google_devtools_cloudbuild_v1_secret_dict = containeranalysis_google_devtools_cloudbuild_v1_secret_instance.to_dict()
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1Secret from a dict
containeranalysis_google_devtools_cloudbuild_v1_secret_from_dict = ContaineranalysisGoogleDevtoolsCloudbuildV1Secret.from_dict(containeranalysis_google_devtools_cloudbuild_v1_secret_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


