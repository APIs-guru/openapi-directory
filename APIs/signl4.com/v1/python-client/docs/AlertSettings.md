# AlertSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter_action** | [**AlertFilterActions**](AlertFilterActions.md) |  | [optional] 
**filter_mode** | [**AlertFilterModes**](AlertFilterModes.md) |  | [optional] 
**opt_out_mode** | [**TeamCategoryOptOutModes**](TeamCategoryOptOutModes.md) |  | [optional] 
**persistent_notificication_mode** | [**PersistentNotificationModes**](PersistentNotificationModes.md) |  | [optional] 
**response_mode** | [**AlertResponseModes**](AlertResponseModes.md) |  | [optional] 
**response_time** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.alert_settings import AlertSettings

# TODO update the JSON string below
json = "{}"
# create an instance of AlertSettings from a JSON string
alert_settings_instance = AlertSettings.from_json(json)
# print the JSON string representation of the object
print(AlertSettings.to_json())

# convert the object into a dict
alert_settings_dict = alert_settings_instance.to_dict()
# create an instance of AlertSettings from a dict
alert_settings_from_dict = AlertSettings.from_dict(alert_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


