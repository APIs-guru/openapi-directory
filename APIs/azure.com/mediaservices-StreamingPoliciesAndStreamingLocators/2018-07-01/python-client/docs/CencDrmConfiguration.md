# CencDrmConfiguration

Class to specify DRM configurations of CommonEncryptionCenc scheme in Streaming Policy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**play_ready** | [**StreamingPolicyPlayReadyConfiguration**](StreamingPolicyPlayReadyConfiguration.md) |  | [optional] 
**widevine** | [**StreamingPolicyWidevineConfiguration**](StreamingPolicyWidevineConfiguration.md) |  | [optional] 

## Example

```python
from openapi_client.models.cenc_drm_configuration import CencDrmConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of CencDrmConfiguration from a JSON string
cenc_drm_configuration_instance = CencDrmConfiguration.from_json(json)
# print the JSON string representation of the object
print(CencDrmConfiguration.to_json())

# convert the object into a dict
cenc_drm_configuration_dict = cenc_drm_configuration_instance.to_dict()
# create an instance of CencDrmConfiguration from a dict
cenc_drm_configuration_from_dict = CencDrmConfiguration.from_dict(cenc_drm_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


