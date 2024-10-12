# ServiceAccountKey

Represents a service account key. A service account has two sets of key-pairs: user-managed, and system-managed. User-managed key-pairs can be created and deleted by users. Users are responsible for rotating these keys periodically to ensure security of their service accounts. Users retain the private key of these key-pairs, and Google retains ONLY the public key. System-managed keys are automatically rotated by Google, and are used for signing for a maximum of two weeks. The rotation process is probabilistic, and usage of the new key will gradually ramp up and down over the key's lifetime. If you cache the public key set for a service account, we recommend that you update the cache every 15 minutes. User-managed keys can be added and removed at any time, so it is important to update the cache frequently. For Google-managed keys, Google will publish a key at least 6 hours before it is first used for signing and will keep publishing it for at least 6 hours after it was last used for signing. Public keys for all service accounts are also published at the OAuth2 Service Account API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disabled** | **bool** | The key status. | [optional] 
**key_algorithm** | **str** | Specifies the algorithm (and possibly key size) for the key. | [optional] 
**key_origin** | **str** | The key origin. | [optional] 
**key_type** | **str** | The key type. | [optional] 
**name** | **str** | The resource name of the service account key in the following format &#x60;projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}/keys/{key}&#x60;. | [optional] 
**private_key_data** | **bytearray** | The private key data. Only provided in &#x60;CreateServiceAccountKey&#x60; responses. Make sure to keep the private key data secure because it allows for the assertion of the service account identity. When base64 decoded, the private key data can be used to authenticate with Google API client libraries and with gcloud auth activate-service-account. | [optional] 
**private_key_type** | **str** | The output format for the private key. Only provided in &#x60;CreateServiceAccountKey&#x60; responses, not in &#x60;GetServiceAccountKey&#x60; or &#x60;ListServiceAccountKey&#x60; responses. Google never exposes system-managed private keys, and never retains user-managed private keys. | [optional] 
**public_key_data** | **bytearray** | The public key data. Only provided in &#x60;GetServiceAccountKey&#x60; responses. | [optional] 
**valid_after_time** | **str** | The key can be used after this timestamp. | [optional] 
**valid_before_time** | **str** | The key can be used before this timestamp. For system-managed key pairs, this timestamp is the end time for the private key signing operation. The public key could still be used for verification for a few hours after this time. | [optional] 

## Example

```python
from openapi_client.models.service_account_key import ServiceAccountKey

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceAccountKey from a JSON string
service_account_key_instance = ServiceAccountKey.from_json(json)
# print the JSON string representation of the object
print(ServiceAccountKey.to_json())

# convert the object into a dict
service_account_key_dict = service_account_key_instance.to_dict()
# create an instance of ServiceAccountKey from a dict
service_account_key_from_dict = ServiceAccountKey.from_dict(service_account_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


