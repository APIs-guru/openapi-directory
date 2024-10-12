# UpdateNotificationSchemeDetails

Details of a notification scheme.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the notification scheme. | [optional] 
**name** | **str** | The name of the notification scheme. Must be unique. | [optional] 

## Example

```python
from openapi_client.models.update_notification_scheme_details import UpdateNotificationSchemeDetails

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNotificationSchemeDetails from a JSON string
update_notification_scheme_details_instance = UpdateNotificationSchemeDetails.from_json(json)
# print the JSON string representation of the object
print(UpdateNotificationSchemeDetails.to_json())

# convert the object into a dict
update_notification_scheme_details_dict = update_notification_scheme_details_instance.to_dict()
# create an instance of UpdateNotificationSchemeDetails from a dict
update_notification_scheme_details_from_dict = UpdateNotificationSchemeDetails.from_dict(update_notification_scheme_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


