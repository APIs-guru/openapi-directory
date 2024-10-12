# SpaceReply


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parent_topic_id** | **str** | The Id of the parent topic | [optional] 
**space_item** | [**SpaceItem**](SpaceItem.md) |  | [optional] 

## Example

```python
from openapi_client.models.space_reply import SpaceReply

# TODO update the JSON string below
json = "{}"
# create an instance of SpaceReply from a JSON string
space_reply_instance = SpaceReply.from_json(json)
# print the JSON string representation of the object
print(SpaceReply.to_json())

# convert the object into a dict
space_reply_dict = space_reply_instance.to_dict()
# create an instance of SpaceReply from a dict
space_reply_from_dict = SpaceReply.from_dict(space_reply_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


