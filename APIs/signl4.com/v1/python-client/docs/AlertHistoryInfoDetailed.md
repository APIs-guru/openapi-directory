# AlertHistoryInfoDetailed


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acknowledged** | **datetime** |  | [optional] 
**acknowledgedgements** | **List[str]** |  | [optional] 
**closed** | **datetime** |  | [optional] 
**closed_by** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] 
**history_entries** | [**List[AlertHistoryInfoEntry]**](AlertHistoryInfoEntry.md) |  | [optional] 

## Example

```python
from openapi_client.models.alert_history_info_detailed import AlertHistoryInfoDetailed

# TODO update the JSON string below
json = "{}"
# create an instance of AlertHistoryInfoDetailed from a JSON string
alert_history_info_detailed_instance = AlertHistoryInfoDetailed.from_json(json)
# print the JSON string representation of the object
print(AlertHistoryInfoDetailed.to_json())

# convert the object into a dict
alert_history_info_detailed_dict = alert_history_info_detailed_instance.to_dict()
# create an instance of AlertHistoryInfoDetailed from a dict
alert_history_info_detailed_from_dict = AlertHistoryInfoDetailed.from_dict(alert_history_info_detailed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


