# MpegCommonEncryption

Configuration for MPEG Common Encryption (MPEG-CENC).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scheme** | **str** | Required. Specify the encryption scheme. Supported encryption schemes: - &#x60;cenc&#x60; - &#x60;cbcs&#x60; | [optional] 

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


