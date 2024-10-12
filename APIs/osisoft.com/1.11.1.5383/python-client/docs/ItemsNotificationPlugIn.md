# ItemsNotificationPlugIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[NotificationPlugIn]**](NotificationPlugIn.md) |  | [optional] 
**links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.items_notification_plug_in import ItemsNotificationPlugIn

# TODO update the JSON string below
json = "{}"
# create an instance of ItemsNotificationPlugIn from a JSON string
items_notification_plug_in_instance = ItemsNotificationPlugIn.from_json(json)
# print the JSON string representation of the object
print(ItemsNotificationPlugIn.to_json())

# convert the object into a dict
items_notification_plug_in_dict = items_notification_plug_in_instance.to_dict()
# create an instance of ItemsNotificationPlugIn from a dict
items_notification_plug_in_from_dict = ItemsNotificationPlugIn.from_dict(items_notification_plug_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


