# InboxItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answer_id** | **int** |  | [optional] 
**body** | **str** |  | [optional] 
**comment_id** | **int** |  | [optional] 
**creation_date** | **int** |  | [optional] 
**is_unread** | **bool** |  | [optional] 
**item_type** | **str** |  | [optional] 
**link** | **str** |  | [optional] 
**question_id** | **int** |  | [optional] 
**site** | [**InboxItemsInnerSite**](InboxItemsInnerSite.md) |  | [optional] 
**title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.inbox_items_inner import InboxItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of InboxItemsInner from a JSON string
inbox_items_inner_instance = InboxItemsInner.from_json(json)
# print the JSON string representation of the object
print(InboxItemsInner.to_json())

# convert the object into a dict
inbox_items_inner_dict = inbox_items_inner_instance.to_dict()
# create an instance of InboxItemsInner from a dict
inbox_items_inner_from_dict = InboxItemsInner.from_dict(inbox_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


