# LabeledItem

A single item in a labeled column.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Internal id associated with the item. | [optional] 
**name** | **str** | Display string as entered by user. | [optional] 

## Example

```python
from openapi_client.models.labeled_item import LabeledItem

# TODO update the JSON string below
json = "{}"
# create an instance of LabeledItem from a JSON string
labeled_item_instance = LabeledItem.from_json(json)
# print the JSON string representation of the object
print(LabeledItem.to_json())

# convert the object into a dict
labeled_item_dict = labeled_item_instance.to_dict()
# create an instance of LabeledItem from a dict
labeled_item_from_dict = LabeledItem.from_dict(labeled_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


