# ListContent

The list of items for a single list note.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**list_items** | [**List[ListItem]**](ListItem.md) | The items in the list. The number of items must be less than 1,000. | [optional] 

## Example

```python
from openapi_client.models.list_content import ListContent

# TODO update the JSON string below
json = "{}"
# create an instance of ListContent from a JSON string
list_content_instance = ListContent.from_json(json)
# print the JSON string representation of the object
print(ListContent.to_json())

# convert the object into a dict
list_content_dict = list_content_instance.to_dict()
# create an instance of ListContent from a dict
list_content_from_dict = ListContent.from_dict(list_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


