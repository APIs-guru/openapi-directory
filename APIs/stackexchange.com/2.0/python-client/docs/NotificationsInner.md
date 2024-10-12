# NotificationsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** |  | [optional] 
**creation_date** | **int** |  | [optional] 
**is_unread** | **bool** |  | [optional] 
**notification_type** | **str** |  | [optional] 
**post_id** | **int** |  | [optional] 
**site** | [**InboxItemsInnerSite**](InboxItemsInnerSite.md) |  | [optional] 

## Example

```python
from openapi_client.models.notifications_inner import NotificationsInner

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationsInner from a JSON string
notifications_inner_instance = NotificationsInner.from_json(json)
# print the JSON string representation of the object
print(NotificationsInner.to_json())

# convert the object into a dict
notifications_inner_dict = notifications_inner_instance.to_dict()
# create an instance of NotificationsInner from a dict
notifications_inner_from_dict = NotificationsInner.from_dict(notifications_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


