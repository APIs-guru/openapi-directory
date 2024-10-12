# GroupItem

A group item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**Errors**](Errors.md) |  | [optional] 
**etag** | **str** | The Etag of this resource. | [optional] 
**group_id** | **str** | The ID that YouTube uses to uniquely identify the group that contains the item. | [optional] 
**id** | **str** | The ID that YouTube uses to uniquely identify the &#x60;channel&#x60;, &#x60;video&#x60;, &#x60;playlist&#x60;, or &#x60;asset&#x60; resource that is included in the group. Note that this ID refers specifically to the inclusion of that resource in a particular group and is different than the channel ID, video ID, playlist ID, or asset ID that uniquely identifies the resource itself. The &#x60;resource.id&#x60; property&#39;s value specifies the unique channel, video, playlist, or asset ID. | [optional] 
**kind** | **str** | Identifies the API resource&#39;s type. The value will be &#x60;youtube#groupItem&#x60;. | [optional] 
**resource** | [**GroupItemResource**](GroupItemResource.md) |  | [optional] 

## Example

```python
from openapi_client.models.group_item import GroupItem

# TODO update the JSON string below
json = "{}"
# create an instance of GroupItem from a JSON string
group_item_instance = GroupItem.from_json(json)
# print the JSON string representation of the object
print(GroupItem.to_json())

# convert the object into a dict
group_item_dict = group_item_instance.to_dict()
# create an instance of GroupItem from a dict
group_item_from_dict = GroupItem.from_dict(group_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


