# AlertHistoryInfoEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**timestamp** | **datetime** |  | [optional] 
**type** | [**AlertHistoryInfoUserEntryType**](AlertHistoryInfoUserEntryType.md) |  | [optional] 
**user_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.alert_history_info_entry import AlertHistoryInfoEntry

# TODO update the JSON string below
json = "{}"
# create an instance of AlertHistoryInfoEntry from a JSON string
alert_history_info_entry_instance = AlertHistoryInfoEntry.from_json(json)
# print the JSON string representation of the object
print(AlertHistoryInfoEntry.to_json())

# convert the object into a dict
alert_history_info_entry_dict = alert_history_info_entry_instance.to_dict()
# create an instance of AlertHistoryInfoEntry from a dict
alert_history_info_entry_from_dict = AlertHistoryInfoEntry.from_dict(alert_history_info_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


