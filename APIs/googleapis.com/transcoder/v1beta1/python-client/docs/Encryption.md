# Encryption

Encryption settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aes128** | [**Aes128Encryption**](Aes128Encryption.md) |  | [optional] 
**iv** | **str** | Required. 128 bit Initialization Vector (IV) represented as lowercase hexadecimal digits. | [optional] 
**key** | **str** | Required. 128 bit encryption key represented as lowercase hexadecimal digits. | [optional] 
**mpeg_cenc** | [**MpegCommonEncryption**](MpegCommonEncryption.md) |  | [optional] 
**sample_aes** | [**SampleAesEncryption**](SampleAesEncryption.md) |  | [optional] 

## Example

```python
from openapi_client.models.encryption import Encryption

# TODO update the JSON string below
json = "{}"
# create an instance of Encryption from a JSON string
encryption_instance = Encryption.from_json(json)
# print the JSON string representation of the object
print(Encryption.to_json())

# convert the object into a dict
encryption_dict = encryption_instance.to_dict()
# create an instance of Encryption from a dict
encryption_from_dict = Encryption.from_dict(encryption_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


