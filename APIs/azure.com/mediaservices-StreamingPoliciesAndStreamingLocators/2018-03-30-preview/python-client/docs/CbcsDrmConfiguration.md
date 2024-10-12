# CbcsDrmConfiguration

Class to specify drm configurations of CommonEncryptionCbcs scheme in Streaming Policy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fair_play** | [**StreamingPolicyFairPlayConfiguration**](StreamingPolicyFairPlayConfiguration.md) |  | [optional] 
**play_ready** | [**StreamingPolicyPlayReadyConfiguration**](StreamingPolicyPlayReadyConfiguration.md) |  | [optional] 
**widevine** | [**StreamingPolicyWidevineConfiguration**](StreamingPolicyWidevineConfiguration.md) |  | [optional] 

## Example

```python
from openapi_client.models.cbcs_drm_configuration import CbcsDrmConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of CbcsDrmConfiguration from a JSON string
cbcs_drm_configuration_instance = CbcsDrmConfiguration.from_json(json)
# print the JSON string representation of the object
print(CbcsDrmConfiguration.to_json())

# convert the object into a dict
cbcs_drm_configuration_dict = cbcs_drm_configuration_instance.to_dict()
# create an instance of CbcsDrmConfiguration from a dict
cbcs_drm_configuration_from_dict = CbcsDrmConfiguration.from_dict(cbcs_drm_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


