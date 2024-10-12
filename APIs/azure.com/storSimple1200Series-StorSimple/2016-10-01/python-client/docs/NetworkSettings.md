# NetworkSettings

The NetworkSettings of a device

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**NetworkSettingsProperties**](NetworkSettingsProperties.md) |  | 
**id** | **str** | The identifier. | [optional] [readonly] 
**name** | **str** | The name. | [optional] [readonly] 
**type** | **str** | The type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.network_settings import NetworkSettings

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkSettings from a JSON string
network_settings_instance = NetworkSettings.from_json(json)
# print the JSON string representation of the object
print(NetworkSettings.to_json())

# convert the object into a dict
network_settings_dict = network_settings_instance.to_dict()
# create an instance of NetworkSettings from a dict
network_settings_from_dict = NetworkSettings.from_dict(network_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


