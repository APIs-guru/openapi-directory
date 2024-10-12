# UrlNotificationMetadata

Summary of the most recent Indexing API notifications successfully received, for a given URL.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**latest_remove** | [**UrlNotification**](UrlNotification.md) |  | [optional] 
**latest_update** | [**UrlNotification**](UrlNotification.md) |  | [optional] 
**url** | **str** | URL to which this metadata refers. | [optional] 

## Example

```python
from openapi_client.models.url_notification_metadata import UrlNotificationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of UrlNotificationMetadata from a JSON string
url_notification_metadata_instance = UrlNotificationMetadata.from_json(json)
# print the JSON string representation of the object
print(UrlNotificationMetadata.to_json())

# convert the object into a dict
url_notification_metadata_dict = url_notification_metadata_instance.to_dict()
# create an instance of UrlNotificationMetadata from a dict
url_notification_metadata_from_dict = UrlNotificationMetadata.from_dict(url_notification_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


