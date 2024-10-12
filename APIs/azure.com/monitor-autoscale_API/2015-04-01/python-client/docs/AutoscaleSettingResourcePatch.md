# AutoscaleSettingResourcePatch

The autoscale setting object for patch operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AutoscaleSetting**](AutoscaleSetting.md) |  | [optional] 
**tags** | **object** | Resource tags | [optional] 

## Example

```python
from openapi_client.models.autoscale_setting_resource_patch import AutoscaleSettingResourcePatch

# TODO update the JSON string below
json = "{}"
# create an instance of AutoscaleSettingResourcePatch from a JSON string
autoscale_setting_resource_patch_instance = AutoscaleSettingResourcePatch.from_json(json)
# print the JSON string representation of the object
print(AutoscaleSettingResourcePatch.to_json())

# convert the object into a dict
autoscale_setting_resource_patch_dict = autoscale_setting_resource_patch_instance.to_dict()
# create an instance of AutoscaleSettingResourcePatch from a dict
autoscale_setting_resource_patch_from_dict = AutoscaleSettingResourcePatch.from_dict(autoscale_setting_resource_patch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


