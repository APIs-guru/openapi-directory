# ChangeAlertStatusMultipleInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_ids** | **List[str]** |  | [optional] 
**description** | **str** |  | [optional] 
**user_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.change_alert_status_multiple_info import ChangeAlertStatusMultipleInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ChangeAlertStatusMultipleInfo from a JSON string
change_alert_status_multiple_info_instance = ChangeAlertStatusMultipleInfo.from_json(json)
# print the JSON string representation of the object
print(ChangeAlertStatusMultipleInfo.to_json())

# convert the object into a dict
change_alert_status_multiple_info_dict = change_alert_status_multiple_info_instance.to_dict()
# create an instance of ChangeAlertStatusMultipleInfo from a dict
change_alert_status_multiple_info_from_dict = ChangeAlertStatusMultipleInfo.from_dict(change_alert_status_multiple_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


