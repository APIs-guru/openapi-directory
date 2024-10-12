# MediaMountEvent

Removable media was mounted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mount_point** | **str** | Mount point. | [optional] 
**volume_label** | **str** | Volume label. Redacted to empty string on organization-owned managed profile devices. | [optional] 

## Example

```python
from openapi_client.models.media_mount_event import MediaMountEvent

# TODO update the JSON string below
json = "{}"
# create an instance of MediaMountEvent from a JSON string
media_mount_event_instance = MediaMountEvent.from_json(json)
# print the JSON string representation of the object
print(MediaMountEvent.to_json())

# convert the object into a dict
media_mount_event_dict = media_mount_event_instance.to_dict()
# create an instance of MediaMountEvent from a dict
media_mount_event_from_dict = MediaMountEvent.from_dict(media_mount_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


