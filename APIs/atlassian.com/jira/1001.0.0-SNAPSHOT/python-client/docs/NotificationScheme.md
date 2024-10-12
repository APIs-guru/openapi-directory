# NotificationScheme

Details about a notification scheme.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the notification scheme. | [optional] 
**expand** | **str** | Expand options that include additional notification scheme details in the response. | [optional] 
**id** | **int** | The ID of the notification scheme. | [optional] 
**name** | **str** | The name of the notification scheme. | [optional] 
**notification_scheme_events** | [**List[NotificationSchemeEvent]**](NotificationSchemeEvent.md) | The notification events and associated recipients. | [optional] 
**projects** | **List[int]** | The list of project IDs associated with the notification scheme. | [optional] 
**scope** | [**Scope**](Scope.md) | The scope of the notification scheme. | [optional] 
**var_self** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.notification_scheme import NotificationScheme

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationScheme from a JSON string
notification_scheme_instance = NotificationScheme.from_json(json)
# print the JSON string representation of the object
print(NotificationScheme.to_json())

# convert the object into a dict
notification_scheme_dict = notification_scheme_instance.to_dict()
# create an instance of NotificationScheme from a dict
notification_scheme_from_dict = NotificationScheme.from_dict(notification_scheme_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


