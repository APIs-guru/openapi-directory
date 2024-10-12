# EncryptionConfig

Represents a custom encryption key configuration that can be applied to a resource. This will encrypt all disks in Virtual Machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kms_key** | **str** | The Cloud KMS resource identifier of the customer-managed encryption key used to protect a resource, such as a disks. It has the following format: &#x60;projects/{PROJECT_ID}/locations/{REGION}/keyRings/{KEY_RING_NAME}/cryptoKeys/{KEY_NAME}&#x60; | [optional] 

## Example

```python
from openapi_client.models.encryption_config import EncryptionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of EncryptionConfig from a JSON string
encryption_config_instance = EncryptionConfig.from_json(json)
# print the JSON string representation of the object
print(EncryptionConfig.to_json())

# convert the object into a dict
encryption_config_dict = encryption_config_instance.to_dict()
# create an instance of EncryptionConfig from a dict
encryption_config_from_dict = EncryptionConfig.from_dict(encryption_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


