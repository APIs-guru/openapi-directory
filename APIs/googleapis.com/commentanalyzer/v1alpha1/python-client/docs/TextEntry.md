# TextEntry

Represents a body of text.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **str** | UTF-8 encoded text. | [optional] 
**type** | **str** | Type of the text field. | [optional] 

## Example

```python
from openapi_client.models.text_entry import TextEntry

# TODO update the JSON string below
json = "{}"
# create an instance of TextEntry from a JSON string
text_entry_instance = TextEntry.from_json(json)
# print the JSON string representation of the object
print(TextEntry.to_json())

# convert the object into a dict
text_entry_dict = text_entry_instance.to_dict()
# create an instance of TextEntry from a dict
text_entry_from_dict = TextEntry.from_dict(text_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


