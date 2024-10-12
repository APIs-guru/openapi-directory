# DeviceTierSet

A set of device tiers. A tier set determines what variation of app content gets served to a specific device, for device-targeted content. You should assign a priority level to each tier, which determines the ordering by which they are evaluated by Play. See the documentation of DeviceTier.level for more details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_tiers** | [**List[DeviceTier]**](DeviceTier.md) | Device tiers belonging to the set. | [optional] 

## Example

```python
from openapi_client.models.device_tier_set import DeviceTierSet

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceTierSet from a JSON string
device_tier_set_instance = DeviceTierSet.from_json(json)
# print the JSON string representation of the object
print(DeviceTierSet.to_json())

# convert the object into a dict
device_tier_set_dict = device_tier_set_instance.to_dict()
# create an instance of DeviceTierSet from a dict
device_tier_set_from_dict = DeviceTierSet.from_dict(device_tier_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


