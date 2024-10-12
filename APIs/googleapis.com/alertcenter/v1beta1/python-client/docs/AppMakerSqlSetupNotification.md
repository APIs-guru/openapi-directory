# AppMakerSqlSetupNotification

Alerts from App Maker to notify admins to set up default SQL instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_info** | [**List[RequestInfo]**](RequestInfo.md) | List of applications with requests for default SQL set up. | [optional] 

## Example

```python
from openapi_client.models.app_maker_sql_setup_notification import AppMakerSqlSetupNotification

# TODO update the JSON string below
json = "{}"
# create an instance of AppMakerSqlSetupNotification from a JSON string
app_maker_sql_setup_notification_instance = AppMakerSqlSetupNotification.from_json(json)
# print the JSON string representation of the object
print(AppMakerSqlSetupNotification.to_json())

# convert the object into a dict
app_maker_sql_setup_notification_dict = app_maker_sql_setup_notification_instance.to_dict()
# create an instance of AppMakerSqlSetupNotification from a dict
app_maker_sql_setup_notification_from_dict = AppMakerSqlSetupNotification.from_dict(app_maker_sql_setup_notification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


