# Topic


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | **str** |  | [optional] 
**author_is_deleted** | **bool** |  | [optional] 
**author_path_alias** | **str** |  | [optional] 
**authorname** | **str** |  | [optional] 
**can_delete** | **bool** |  | [optional] 
**can_edit** | **bool** |  | [optional] 
**can_reply** | **bool** |  | [optional] 
**count_replies** | **int** |  | [optional] 
**datecreate** | **str** |  | [optional] 
**datelastpost** | **str** |  | [optional] 
**iconfarm** | **str** |  | [optional] 
**iconserver** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**is_locked** | **bool** |  | [optional] 
**is_pro** | **bool** |  | [optional] 
**is_sticky** | **bool** |  | [optional] 
**last_reply** | **str** |  | [optional] 
**lastedit** | **str** |  | [optional] 
**message** | [**GetFavoritesContextByID200ResponseCount**](GetFavoritesContextByID200ResponseCount.md) |  | [optional] 
**role** | **str** |  | [optional] 
**subject** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.topic import Topic

# TODO update the JSON string below
json = "{}"
# create an instance of Topic from a JSON string
topic_instance = Topic.from_json(json)
# print the JSON string representation of the object
print(Topic.to_json())

# convert the object into a dict
topic_dict = topic_instance.to_dict()
# create an instance of Topic from a dict
topic_from_dict = Topic.from_dict(topic_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


