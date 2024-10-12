# MediaUnmountEvent

Removable media was unmounted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mount_point** | **str** | Mount point. | [optional] 
**volume_label** | **str** | Volume label. Redacted to empty string on organization-owned managed profile devices. | [optional] 

## Example

```python
from openapi_client.models.media_unmount_event import MediaUnmountEvent

# TODO update the JSON string below
json = "{}"
# create an instance of MediaUnmountEvent from a JSON string
media_unmount_event_instance = MediaUnmountEvent.from_json(json)
# print the JSON string representation of the object
print(MediaUnmountEvent.to_json())

# convert the object into a dict
media_unmount_event_dict = media_unmount_event_instance.to_dict()
# create an instance of MediaUnmountEvent from a dict
media_unmount_event_from_dict = MediaUnmountEvent.from_dict(media_unmount_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


