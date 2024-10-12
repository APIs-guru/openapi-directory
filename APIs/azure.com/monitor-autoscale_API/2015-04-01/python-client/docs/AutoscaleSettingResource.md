# AutoscaleSettingResource

The autoscale setting resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AutoscaleSetting**](AutoscaleSetting.md) |  | 
**id** | **str** | Azure resource Id | [optional] [readonly] 
**location** | **str** | Resource location | 
**name** | **str** | Azure resource name | [optional] [readonly] 
**tags** | **object** | Resource tags | [optional] 
**type** | **str** | Azure resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.autoscale_setting_resource import AutoscaleSettingResource

# TODO update the JSON string below
json = "{}"
# create an instance of AutoscaleSettingResource from a JSON string
autoscale_setting_resource_instance = AutoscaleSettingResource.from_json(json)
# print the JSON string representation of the object
print(AutoscaleSettingResource.to_json())

# convert the object into a dict
autoscale_setting_resource_dict = autoscale_setting_resource_instance.to_dict()
# create an instance of AutoscaleSettingResource from a dict
autoscale_setting_resource_from_dict = AutoscaleSettingResource.from_dict(autoscale_setting_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


