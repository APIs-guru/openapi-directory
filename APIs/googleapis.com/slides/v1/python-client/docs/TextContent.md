# TextContent

The general text content. The text must reside in a compatible shape (e.g. text box or rectangle) or a table cell in a page.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lists** | **Dict[str, List]** | The bulleted lists contained in this text, keyed by list ID. | [optional] 
**text_elements** | [**List[TextElement]**](TextElement.md) | The text contents broken down into its component parts, including styling information. This property is read-only. | [optional] 

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


