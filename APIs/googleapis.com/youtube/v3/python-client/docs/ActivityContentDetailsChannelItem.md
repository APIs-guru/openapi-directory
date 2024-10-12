# ActivityContentDetailsChannelItem

Details about a resource which was added to a channel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_id** | [**ResourceId**](ResourceId.md) |  | [optional] 

## Example

```python
from openapi_client.models.activity_content_details_channel_item import ActivityContentDetailsChannelItem

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityContentDetailsChannelItem from a JSON string
activity_content_details_channel_item_instance = ActivityContentDetailsChannelItem.from_json(json)
# print the JSON string representation of the object
print(ActivityContentDetailsChannelItem.to_json())

# convert the object into a dict
activity_content_details_channel_item_dict = activity_content_details_channel_item_instance.to_dict()
# create an instance of ActivityContentDetailsChannelItem from a dict
activity_content_details_channel_item_from_dict = ActivityContentDetailsChannelItem.from_dict(activity_content_details_channel_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


