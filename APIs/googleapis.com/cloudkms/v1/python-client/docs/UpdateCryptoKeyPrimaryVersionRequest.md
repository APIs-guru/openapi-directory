# UpdateCryptoKeyPrimaryVersionRequest

Request message for KeyManagementService.UpdateCryptoKeyPrimaryVersion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**crypto_key_version_id** | **str** | Required. The id of the child CryptoKeyVersion to use as primary. | [optional] 

## Example

```python
from openapi_client.models.update_crypto_key_primary_version_request import UpdateCryptoKeyPrimaryVersionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCryptoKeyPrimaryVersionRequest from a JSON string
update_crypto_key_primary_version_request_instance = UpdateCryptoKeyPrimaryVersionRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateCryptoKeyPrimaryVersionRequest.to_json())

# convert the object into a dict
update_crypto_key_primary_version_request_dict = update_crypto_key_primary_version_request_instance.to_dict()
# create an instance of UpdateCryptoKeyPrimaryVersionRequest from a dict
update_crypto_key_primary_version_request_from_dict = UpdateCryptoKeyPrimaryVersionRequest.from_dict(update_crypto_key_primary_version_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


