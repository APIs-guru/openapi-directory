# NetworkSettingsPatch

Represents the patch request for the network settings of a device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**NetworkSettingsPatchProperties**](NetworkSettingsPatchProperties.md) |  | 

## Example

```python
from openapi_client.models.network_settings_patch import NetworkSettingsPatch

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkSettingsPatch from a JSON string
network_settings_patch_instance = NetworkSettingsPatch.from_json(json)
# print the JSON string representation of the object
print(NetworkSettingsPatch.to_json())

# convert the object into a dict
network_settings_patch_dict = network_settings_patch_instance.to_dict()
# create an instance of NetworkSettingsPatch from a dict
network_settings_patch_from_dict = NetworkSettingsPatch.from_dict(network_settings_patch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


