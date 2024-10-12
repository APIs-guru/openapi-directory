# NotificationSchemeId

The ID of a notification scheme.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of a notification scheme. | [readonly] 

## Example

```python
from openapi_client.models.notification_scheme_id import NotificationSchemeId

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationSchemeId from a JSON string
notification_scheme_id_instance = NotificationSchemeId.from_json(json)
# print the JSON string representation of the object
print(NotificationSchemeId.to_json())

# convert the object into a dict
notification_scheme_id_dict = notification_scheme_id_instance.to_dict()
# create an instance of NotificationSchemeId from a dict
notification_scheme_id_from_dict = NotificationSchemeId.from_dict(notification_scheme_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


