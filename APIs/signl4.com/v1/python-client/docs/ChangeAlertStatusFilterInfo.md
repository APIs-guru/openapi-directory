# ChangeAlertStatusFilterInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category_ids** | **List[str]** |  | [optional] 
**max_date** | **datetime** |  | [optional] 
**min_date** | **datetime** |  | [optional] 
**scope** | [**StatusChangeScope**](StatusChangeScope.md) |  | [optional] 
**team_ids** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.change_alert_status_filter_info import ChangeAlertStatusFilterInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ChangeAlertStatusFilterInfo from a JSON string
change_alert_status_filter_info_instance = ChangeAlertStatusFilterInfo.from_json(json)
# print the JSON string representation of the object
print(ChangeAlertStatusFilterInfo.to_json())

# convert the object into a dict
change_alert_status_filter_info_dict = change_alert_status_filter_info_instance.to_dict()
# create an instance of ChangeAlertStatusFilterInfo from a dict
change_alert_status_filter_info_from_dict = ChangeAlertStatusFilterInfo.from_dict(change_alert_status_filter_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


