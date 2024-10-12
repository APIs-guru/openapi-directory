# DeviceTier

A single device tier. Devices matching any of the device groups in device_group_names are considered to match the tier.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_group_names** | **List[str]** | Groups of devices included in this tier. These groups must be defined explicitly under device_groups in this configuration. | [optional] 
**level** | **int** | The priority level of the tier. Tiers are evaluated in descending order of level: the highest level tier has the highest priority. The highest tier matching a given device is selected for that device. You should use a contiguous range of levels for your tiers in a tier set; tier levels in a tier set must be unique. For instance, if your tier set has 4 tiers (including the global fallback), you should define tiers 1, 2 and 3 in this configuration. Note: tier 0 is implicitly defined as a global fallback and selected for devices that don&#39;t match any of the tiers explicitly defined here. You mustn&#39;t define level 0 explicitly in this configuration. | [optional] 

## Example

```python
from openapi_client.models.device_tier import DeviceTier

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceTier from a JSON string
device_tier_instance = DeviceTier.from_json(json)
# print the JSON string representation of the object
print(DeviceTier.to_json())

# convert the object into a dict
device_tier_dict = device_tier_instance.to_dict()
# create an instance of DeviceTier from a dict
device_tier_from_dict = DeviceTier.from_dict(device_tier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


