# BandwidthSetting

The bandwidth setting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**BandwidthRateSettingProperties**](BandwidthRateSettingProperties.md) |  | 
**id** | **str** | The path ID that uniquely identifies the object. | [optional] [readonly] 
**kind** | **str** | The Kind of the object. Currently only Series8000 is supported | [optional] 
**name** | **str** | The name of the object. | [optional] [readonly] 
**type** | **str** | The hierarchical type of the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.bandwidth_setting import BandwidthSetting

# TODO update the JSON string below
json = "{}"
# create an instance of BandwidthSetting from a JSON string
bandwidth_setting_instance = BandwidthSetting.from_json(json)
# print the JSON string representation of the object
print(BandwidthSetting.to_json())

# convert the object into a dict
bandwidth_setting_dict = bandwidth_setting_instance.to_dict()
# create an instance of BandwidthSetting from a dict
bandwidth_setting_from_dict = BandwidthSetting.from_dict(bandwidth_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


