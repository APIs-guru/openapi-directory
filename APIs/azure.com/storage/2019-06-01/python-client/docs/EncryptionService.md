# EncryptionService

A service that allows server-side encryption to be used.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | A boolean indicating whether or not the service encrypts the data as it is stored. | [optional] 
**key_type** | **str** | Encryption key type to be used for the encryption service. &#39;Account&#39; key type implies that an account-scoped encryption key will be used. &#39;Service&#39; key type implies that a default service key is used. | [optional] 
**last_enabled_time** | **datetime** | Gets a rough estimate of the date/time when the encryption was last enabled by the user. Only returned when encryption is enabled. There might be some unencrypted blobs which were written after this time, as it is just a rough estimate. | [optional] [readonly] 

## Example

```python
from openapi_client.models.encryption_service import EncryptionService

# TODO update the JSON string below
json = "{}"
# create an instance of EncryptionService from a JSON string
encryption_service_instance = EncryptionService.from_json(json)
# print the JSON string representation of the object
print(EncryptionService.to_json())

# convert the object into a dict
encryption_service_dict = encryption_service_instance.to_dict()
# create an instance of EncryptionService from a dict
encryption_service_from_dict = EncryptionService.from_dict(encryption_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


