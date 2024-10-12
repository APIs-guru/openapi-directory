# MpegCommonEncryption

Configuration for MPEG Common Encryption (MPEG-CENC).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_id** | **str** | Required. 128 bit Key ID represented as lowercase hexadecimal digits for use with common encryption. | [optional] 
**scheme** | **str** | Required. Specify the encryption scheme. Supported encryption schemes: - &#39;cenc&#39; - &#39;cbcs&#39; | [optional] 

## Example

```python
from openapi_client.models.mpeg_common_encryption import MpegCommonEncryption

# TODO update the JSON string below
json = "{}"
# create an instance of MpegCommonEncryption from a JSON string
mpeg_common_encryption_instance = MpegCommonEncryption.from_json(json)
# print the JSON string representation of the object
print(MpegCommonEncryption.to_json())

# convert the object into a dict
mpeg_common_encryption_dict = mpeg_common_encryption_instance.to_dict()
# create an instance of MpegCommonEncryption from a dict
mpeg_common_encryption_from_dict = MpegCommonEncryption.from_dict(mpeg_common_encryption_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


