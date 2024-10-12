# Item

A single item of the form. `kind` defines which kind of item it is.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the item. | [optional] 
**image_item** | [**ImageItem**](ImageItem.md) |  | [optional] 
**item_id** | **str** | The item ID. On creation, it can be provided but the ID must not be already used in the form. If not provided, a new ID is assigned. | [optional] 
**page_break_item** | **object** | A page break. The title and description of this item are shown at the top of the new page. | [optional] 
**question_group_item** | [**QuestionGroupItem**](QuestionGroupItem.md) |  | [optional] 
**question_item** | [**QuestionItem**](QuestionItem.md) |  | [optional] 
**text_item** | **object** | A text item. | [optional] 
**title** | **str** | The title of the item. | [optional] 
**video_item** | [**VideoItem**](VideoItem.md) |  | [optional] 

## Example

```python
from openapi_client.models.item import Item

# TODO update the JSON string below
json = "{}"
# create an instance of Item from a JSON string
item_instance = Item.from_json(json)
# print the JSON string representation of the object
print(Item.to_json())

# convert the object into a dict
item_dict = item_instance.to_dict()
# create an instance of Item from a dict
item_from_dict = Item.from_dict(item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


