# ChangeAlertStatusInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**user_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.change_alert_status_info import ChangeAlertStatusInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ChangeAlertStatusInfo from a JSON string
change_alert_status_info_instance = ChangeAlertStatusInfo.from_json(json)
# print the JSON string representation of the object
print(ChangeAlertStatusInfo.to_json())

# convert the object into a dict
change_alert_status_info_dict = change_alert_status_info_instance.to_dict()
# create an instance of ChangeAlertStatusInfo from a dict
change_alert_status_info_from_dict = ChangeAlertStatusInfo.from_dict(change_alert_status_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


