# SynchronizationSettingList

List response for get Synchronization settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The Url of next result page. | [optional] 
**value** | [**List[SynchronizationSetting]**](SynchronizationSetting.md) | Collection of items of type DataTransferObjects. | 

## Example

```python
from openapi_client.models.synchronization_setting_list import SynchronizationSettingList

# TODO update the JSON string below
json = "{}"
# create an instance of SynchronizationSettingList from a JSON string
synchronization_setting_list_instance = SynchronizationSettingList.from_json(json)
# print the JSON string representation of the object
print(SynchronizationSettingList.to_json())

# convert the object into a dict
synchronization_setting_list_dict = synchronization_setting_list_instance.to_dict()
# create an instance of SynchronizationSettingList from a dict
synchronization_setting_list_from_dict = SynchronizationSettingList.from_dict(synchronization_setting_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


