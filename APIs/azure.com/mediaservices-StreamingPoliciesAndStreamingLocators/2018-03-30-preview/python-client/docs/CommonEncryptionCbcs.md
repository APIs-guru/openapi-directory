# CommonEncryptionCbcs

Class for CommonEncryptionCbcs encryption scheme

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clear_tracks** | [**List[TrackSelection]**](TrackSelection.md) | Representing which tracks should not be encrypted | [optional] 
**content_keys** | [**StreamingPolicyContentKeys**](StreamingPolicyContentKeys.md) |  | [optional] 
**drm** | [**CbcsDrmConfiguration**](CbcsDrmConfiguration.md) |  | [optional] 
**enabled_protocols** | [**EnabledProtocols**](EnabledProtocols.md) |  | [optional] 

## Example

```python
from openapi_client.models.common_encryption_cbcs import CommonEncryptionCbcs

# TODO update the JSON string below
json = "{}"
# create an instance of CommonEncryptionCbcs from a JSON string
common_encryption_cbcs_instance = CommonEncryptionCbcs.from_json(json)
# print the JSON string representation of the object
print(CommonEncryptionCbcs.to_json())

# convert the object into a dict
common_encryption_cbcs_dict = common_encryption_cbcs_instance.to_dict()
# create an instance of CommonEncryptionCbcs from a dict
common_encryption_cbcs_from_dict = CommonEncryptionCbcs.from_dict(common_encryption_cbcs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


