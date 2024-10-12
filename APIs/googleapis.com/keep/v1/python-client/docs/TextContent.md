# TextContent

The block of text for a single text section or list item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **str** | The text of the note. The limits on this vary with the specific field using this type. | [optional] 

## Example

```python
from openapi_client.models.text_content import TextContent

# TODO update the JSON string below
json = "{}"
# create an instance of TextContent from a JSON string
text_content_instance = TextContent.from_json(json)
# print the JSON string representation of the object
print(TextContent.to_json())

# convert the object into a dict
text_content_dict = text_content_instance.to_dict()
# create an instance of TextContent from a dict
text_content_from_dict = TextContent.from_dict(text_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


