# NotificationCollection

Paged Notification list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[NotificationContract]**](NotificationContract.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.notification_collection import NotificationCollection

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationCollection from a JSON string
notification_collection_instance = NotificationCollection.from_json(json)
# print the JSON string representation of the object
print(NotificationCollection.to_json())

# convert the object into a dict
notification_collection_dict = notification_collection_instance.to_dict()
# create an instance of NotificationCollection from a dict
notification_collection_from_dict = NotificationCollection.from_dict(notification_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


