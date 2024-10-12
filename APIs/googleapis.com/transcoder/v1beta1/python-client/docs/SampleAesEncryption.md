# SampleAesEncryption

Configuration for SAMPLE-AES encryption.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_uri** | **str** | Required. URI of the key delivery service. This URI is inserted into the M3U8 header. | [optional] 

## Example

```python
from openapi_client.models.sample_aes_encryption import SampleAesEncryption

# TODO update the JSON string below
json = "{}"
# create an instance of SampleAesEncryption from a JSON string
sample_aes_encryption_instance = SampleAesEncryption.from_json(json)
# print the JSON string representation of the object
print(SampleAesEncryption.to_json())

# convert the object into a dict
sample_aes_encryption_dict = sample_aes_encryption_instance.to_dict()
# create an instance of SampleAesEncryption from a dict
sample_aes_encryption_from_dict = SampleAesEncryption.from_dict(sample_aes_encryption_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


