# EncryptionKey

Encryption Key value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kms_key_name** | **str** | The [KMS key name] with which the content of the Operation is encrypted. The expected format: &#x60;projects/*/locations/*/keyRings/*/cryptoKeys/*&#x60;. Will be empty string if google managed. | [optional] 
**type** | **str** | Type. | [optional] 

## Example

```python
from openapi_client.models.encryption_key import EncryptionKey

# TODO update the JSON string below
json = "{}"
# create an instance of EncryptionKey from a JSON string
encryption_key_instance = EncryptionKey.from_json(json)
# print the JSON string representation of the object
print(EncryptionKey.to_json())

# convert the object into a dict
encryption_key_dict = encryption_key_instance.to_dict()
# create an instance of EncryptionKey from a dict
encryption_key_from_dict = EncryptionKey.from_dict(encryption_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


