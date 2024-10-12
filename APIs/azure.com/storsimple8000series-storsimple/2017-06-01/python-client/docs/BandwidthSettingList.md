# BandwidthSettingList

The collection of bandwidth setting entities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[BandwidthSetting]**](BandwidthSetting.md) | The value. | 

## Example

```python
from openapi_client.models.bandwidth_setting_list import BandwidthSettingList

# TODO update the JSON string below
json = "{}"
# create an instance of BandwidthSettingList from a JSON string
bandwidth_setting_list_instance = BandwidthSettingList.from_json(json)
# print the JSON string representation of the object
print(BandwidthSettingList.to_json())

# convert the object into a dict
bandwidth_setting_list_dict = bandwidth_setting_list_instance.to_dict()
# create an instance of BandwidthSettingList from a dict
bandwidth_setting_list_from_dict = BandwidthSettingList.from_dict(bandwidth_setting_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


