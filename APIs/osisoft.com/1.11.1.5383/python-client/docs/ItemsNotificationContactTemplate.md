# ItemsNotificationContactTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[NotificationContactTemplate]**](NotificationContactTemplate.md) |  | [optional] 
**links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.items_notification_contact_template import ItemsNotificationContactTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of ItemsNotificationContactTemplate from a JSON string
items_notification_contact_template_instance = ItemsNotificationContactTemplate.from_json(json)
# print the JSON string representation of the object
print(ItemsNotificationContactTemplate.to_json())

# convert the object into a dict
items_notification_contact_template_dict = items_notification_contact_template_instance.to_dict()
# create an instance of ItemsNotificationContactTemplate from a dict
items_notification_contact_template_from_dict = ItemsNotificationContactTemplate.from_dict(items_notification_contact_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


