# BandwidthRateSettingProperties

The properties of the bandwidth setting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schedules** | [**List[BandwidthSchedule]**](BandwidthSchedule.md) | The schedules. | 
**volume_count** | **int** | The number of volumes that uses the bandwidth setting. | [optional] [readonly] 

## Example

```python
from openapi_client.models.bandwidth_rate_setting_properties import BandwidthRateSettingProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BandwidthRateSettingProperties from a JSON string
bandwidth_rate_setting_properties_instance = BandwidthRateSettingProperties.from_json(json)
# print the JSON string representation of the object
print(BandwidthRateSettingProperties.to_json())

# convert the object into a dict
bandwidth_rate_setting_properties_dict = bandwidth_rate_setting_properties_instance.to_dict()
# create an instance of BandwidthRateSettingProperties from a dict
bandwidth_rate_setting_properties_from_dict = BandwidthRateSettingProperties.from_dict(bandwidth_rate_setting_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


