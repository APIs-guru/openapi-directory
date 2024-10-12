# WorkloadIdentityPoolProviderKey

Represents a public key configuration for your workload identity pool provider. The key can be configured in your identity provider to encrypt the SAML assertions. Google holds the corresponding private key which it uses to decrypt encrypted tokens.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expire_time** | **str** | Output only. Time after which the key will be permanently purged and cannot be recovered. Note that the key may get purged before this timestamp if the total limit of keys per provider is crossed. | [optional] [readonly] 
**key_data** | [**KeyData**](KeyData.md) |  | [optional] 
**name** | **str** | Output only. The resource name of the key. | [optional] [readonly] 
**state** | **str** | Output only. The state of the key. | [optional] [readonly] 
**use** | **str** | Required. The purpose of the key. | [optional] 

## Example

```python
from openapi_client.models.workload_identity_pool_provider_key import WorkloadIdentityPoolProviderKey

# TODO update the JSON string below
json = "{}"
# create an instance of WorkloadIdentityPoolProviderKey from a JSON string
workload_identity_pool_provider_key_instance = WorkloadIdentityPoolProviderKey.from_json(json)
# print the JSON string representation of the object
print(WorkloadIdentityPoolProviderKey.to_json())

# convert the object into a dict
workload_identity_pool_provider_key_dict = workload_identity_pool_provider_key_instance.to_dict()
# create an instance of WorkloadIdentityPoolProviderKey from a dict
workload_identity_pool_provider_key_from_dict = WorkloadIdentityPoolProviderKey.from_dict(workload_identity_pool_provider_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


