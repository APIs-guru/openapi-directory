# RegionalSettings

Regional Settings details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encryption_config** | [**EncryptionConfig**](EncryptionConfig.md) |  | [optional] 
**name** | **str** | Output only. Resource name of the Connection. Format: projects/{project}/locations/{location}/regionalSettings | [optional] [readonly] 
**network_config** | [**NetworkConfig**](NetworkConfig.md) |  | [optional] 
**provisioned** | **bool** | Output only. Specifies whether the region is provisioned. | [optional] [readonly] 

## Example

```python
from openapi_client.models.regional_settings import RegionalSettings

# TODO update the JSON string below
json = "{}"
# create an instance of RegionalSettings from a JSON string
regional_settings_instance = RegionalSettings.from_json(json)
# print the JSON string representation of the object
print(RegionalSettings.to_json())

# convert the object into a dict
regional_settings_dict = regional_settings_instance.to_dict()
# create an instance of RegionalSettings from a dict
regional_settings_from_dict = RegionalSettings.from_dict(regional_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


