# PowerOutletTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** |  | [optional] [readonly] 
**description** | **str** |  | [optional] 
**device_type** | [**NestedDeviceType**](NestedDeviceType.md) |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**feed_leg** | [**FeedLeg**](FeedLeg.md) |  | [optional] 
**id** | **int** |  | [optional] [readonly] 
**label** | **str** | Physical label | [optional] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**module_type** | [**NestedModuleType**](NestedModuleType.md) |  | [optional] 
**name** | **str** |  {module} is accepted as a substitution for the module bay position when attached to a module type.  | 
**power_port** | [**NestedPowerPortTemplate**](NestedPowerPortTemplate.md) |  | [optional] 
**type** | [**Type6**](Type6.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.power_outlet_template import PowerOutletTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of PowerOutletTemplate from a JSON string
power_outlet_template_instance = PowerOutletTemplate.from_json(json)
# print the JSON string representation of the object
print(PowerOutletTemplate.to_json())

# convert the object into a dict
power_outlet_template_dict = power_outlet_template_instance.to_dict()
# create an instance of PowerOutletTemplate from a dict
power_outlet_template_from_dict = PowerOutletTemplate.from_dict(power_outlet_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


