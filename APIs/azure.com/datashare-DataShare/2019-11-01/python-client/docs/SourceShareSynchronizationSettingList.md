# SourceShareSynchronizationSettingList

List response for get source share Synchronization settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The Url of next result page. | [optional] 
**value** | [**List[SourceShareSynchronizationSetting]**](SourceShareSynchronizationSetting.md) | Collection of items of type DataTransferObjects. | 

## Example

```python
from openapi_client.models.source_share_synchronization_setting_list import SourceShareSynchronizationSettingList

# TODO update the JSON string below
json = "{}"
# create an instance of SourceShareSynchronizationSettingList from a JSON string
source_share_synchronization_setting_list_instance = SourceShareSynchronizationSettingList.from_json(json)
# print the JSON string representation of the object
print(SourceShareSynchronizationSettingList.to_json())

# convert the object into a dict
source_share_synchronization_setting_list_dict = source_share_synchronization_setting_list_instance.to_dict()
# create an instance of SourceShareSynchronizationSettingList from a dict
source_share_synchronization_setting_list_from_dict = SourceShareSynchronizationSettingList.from_dict(source_share_synchronization_setting_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


