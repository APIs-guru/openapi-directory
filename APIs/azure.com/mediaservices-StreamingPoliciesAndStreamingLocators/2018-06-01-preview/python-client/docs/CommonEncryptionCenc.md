# CommonEncryptionCenc

Class for envelope encryption scheme

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clear_tracks** | [**List[TrackSelection]**](TrackSelection.md) | Representing which tracks should not be encrypted | [optional] 
**content_keys** | [**StreamingPolicyContentKeys**](StreamingPolicyContentKeys.md) |  | [optional] 
**drm** | [**CencDrmConfiguration**](CencDrmConfiguration.md) |  | [optional] 
**enabled_protocols** | [**EnabledProtocols**](EnabledProtocols.md) |  | [optional] 

## Example

```python
from openapi_client.models.common_encryption_cenc import CommonEncryptionCenc

# TODO update the JSON string below
json = "{}"
# create an instance of CommonEncryptionCenc from a JSON string
common_encryption_cenc_instance = CommonEncryptionCenc.from_json(json)
# print the JSON string representation of the object
print(CommonEncryptionCenc.to_json())

# convert the object into a dict
common_encryption_cenc_dict = common_encryption_cenc_instance.to_dict()
# create an instance of CommonEncryptionCenc from a dict
common_encryption_cenc_from_dict = CommonEncryptionCenc.from_dict(common_encryption_cenc_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


