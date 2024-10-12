# ModuleTargeting

Targeting on the module level.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_feature_targeting** | [**List[DeviceFeatureTargeting]**](DeviceFeatureTargeting.md) | Targeting for device features. | [optional] 
**sdk_version_targeting** | [**SdkVersionTargeting**](SdkVersionTargeting.md) |  | [optional] 
**user_countries_targeting** | [**UserCountriesTargeting**](UserCountriesTargeting.md) |  | [optional] 

## Example

```python
from openapi_client.models.module_targeting import ModuleTargeting

# TODO update the JSON string below
json = "{}"
# create an instance of ModuleTargeting from a JSON string
module_targeting_instance = ModuleTargeting.from_json(json)
# print the JSON string representation of the object
print(ModuleTargeting.to_json())

# convert the object into a dict
module_targeting_dict = module_targeting_instance.to_dict()
# create an instance of ModuleTargeting from a dict
module_targeting_from_dict = ModuleTargeting.from_dict(module_targeting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


