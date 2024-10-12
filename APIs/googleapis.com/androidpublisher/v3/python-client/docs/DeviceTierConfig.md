# DeviceTierConfig

Configuration describing device targeting criteria for the content of an app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_groups** | [**List[DeviceGroup]**](DeviceGroup.md) | Definition of device groups for the app. | [optional] 
**device_tier_config_id** | **str** | Output only. The device tier config ID. | [optional] [readonly] 
**device_tier_set** | [**DeviceTierSet**](DeviceTierSet.md) |  | [optional] 
**user_country_sets** | [**List[UserCountrySet]**](UserCountrySet.md) | Definition of user country sets for the app. | [optional] 

## Example

```python
from openapi_client.models.device_tier_config import DeviceTierConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceTierConfig from a JSON string
device_tier_config_instance = DeviceTierConfig.from_json(json)
# print the JSON string representation of the object
print(DeviceTierConfig.to_json())

# convert the object into a dict
device_tier_config_dict = device_tier_config_instance.to_dict()
# create an instance of DeviceTierConfig from a dict
device_tier_config_from_dict = DeviceTierConfig.from_dict(device_tier_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


