# TopicReply


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | **str** |  | [optional] 
**author_is_deleted** | **bool** |  | [optional] 
**author_path_alias** | **str** |  | [optional] 
**authorname** | **str** |  | [optional] 
**can_delete** | **bool** |  | [optional] 
**can_edit** | **bool** |  | [optional] 
**datecreate** | **str** |  | [optional] 
**iconfarm** | **str** |  | [optional] 
**iconserver** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**is_pro** | **bool** |  | [optional] 
**lastedit** | **str** |  | [optional] 
**message** | [**GetFavoritesContextByID200ResponseCount**](GetFavoritesContextByID200ResponseCount.md) |  | [optional] 

## Example

```python
from openapi_client.models.topic_reply import TopicReply

# TODO update the JSON string below
json = "{}"
# create an instance of TopicReply from a JSON string
topic_reply_instance = TopicReply.from_json(json)
# print the JSON string representation of the object
print(TopicReply.to_json())

# convert the object into a dict
topic_reply_dict = topic_reply_instance.to_dict()
# create an instance of TopicReply from a dict
topic_reply_from_dict = TopicReply.from_dict(topic_reply_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


