# UrlNotification

`UrlNotification` is the resource used in all Indexing API calls. It describes one event in the life cycle of a Web Document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notify_time** | **str** | Creation timestamp for this notification. Users should _not_ specify it, the field is ignored at the request time. | [optional] 
**type** | **str** | The URL life cycle event that Google is being notified about. | [optional] 
**url** | **str** | The object of this notification. The URL must be owned by the publisher of this notification and, in case of &#x60;URL_UPDATED&#x60; notifications, it _must_ be crawlable by Google. | [optional] 

## Example

```python
from openapi_client.models.url_notification import UrlNotification

# TODO update the JSON string below
json = "{}"
# create an instance of UrlNotification from a JSON string
url_notification_instance = UrlNotification.from_json(json)
# print the JSON string representation of the object
print(UrlNotification.to_json())

# convert the object into a dict
url_notification_dict = url_notification_instance.to_dict()
# create an instance of UrlNotification from a dict
url_notification_from_dict = UrlNotification.from_dict(url_notification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


