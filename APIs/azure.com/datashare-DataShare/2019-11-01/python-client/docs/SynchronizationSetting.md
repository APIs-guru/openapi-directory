# SynchronizationSetting

A Synchronization Setting data transfer object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Kind of synchronization | 
**id** | **str** | The resource id of the azure resource | [optional] [readonly] 
**name** | **str** | Name of the azure resource | [optional] [readonly] 
**type** | **str** | Type of the azure resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.synchronization_setting import SynchronizationSetting

# TODO update the JSON string below
json = "{}"
# create an instance of SynchronizationSetting from a JSON string
synchronization_setting_instance = SynchronizationSetting.from_json(json)
# print the JSON string representation of the object
print(SynchronizationSetting.to_json())

# convert the object into a dict
synchronization_setting_dict = synchronization_setting_instance.to_dict()
# create an instance of SynchronizationSetting from a dict
synchronization_setting_from_dict = SynchronizationSetting.from_dict(synchronization_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


