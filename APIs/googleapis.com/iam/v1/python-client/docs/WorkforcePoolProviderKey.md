# WorkforcePoolProviderKey

Represents a public key configuration for a Workforce Pool Provider. The key can be configured in your identity provider to encrypt SAML assertions. Google holds the corresponding private key, which it uses to decrypt encrypted tokens.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expire_time** | **str** | Output only. The time after which the key will be permanently deleted and cannot be recovered. Note that the key may get purged before this time if the total limit of keys per provider is exceeded. | [optional] [readonly] 
**key_data** | [**KeyData**](KeyData.md) |  | [optional] 
**name** | **str** | Output only. The resource name of the key. | [optional] [readonly] 
**state** | **str** | Output only. The state of the key. | [optional] [readonly] 
**use** | **str** | Required. The purpose of the key. | [optional] 

## Example

```python
from openapi_client.models.workforce_pool_provider_key import WorkforcePoolProviderKey

# TODO update the JSON string below
json = "{}"
# create an instance of WorkforcePoolProviderKey from a JSON string
workforce_pool_provider_key_instance = WorkforcePoolProviderKey.from_json(json)
# print the JSON string representation of the object
print(WorkforcePoolProviderKey.to_json())

# convert the object into a dict
workforce_pool_provider_key_dict = workforce_pool_provider_key_instance.to_dict()
# create an instance of WorkforcePoolProviderKey from a dict
workforce_pool_provider_key_from_dict = WorkforcePoolProviderKey.from_dict(workforce_pool_provider_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


