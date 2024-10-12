# SelectionItems

List of widget autocomplete results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[GoogleAppsCardV1SelectionItem]**](GoogleAppsCardV1SelectionItem.md) | An array of the SelectionItem objects. | [optional] 

## Example

```python
from openapi_client.models.selection_items import SelectionItems

# TODO update the JSON string below
json = "{}"
# create an instance of SelectionItems from a JSON string
selection_items_instance = SelectionItems.from_json(json)
# print the JSON string representation of the object
print(SelectionItems.to_json())

# convert the object into a dict
selection_items_dict = selection_items_instance.to_dict()
# create an instance of SelectionItems from a dict
selection_items_from_dict = SelectionItems.from_dict(selection_items_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


