# TextSnippet

A representation of a text snippet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | Required. The content of the text snippet as a string. Up to 250000 characters long. | [optional] 
**content_uri** | **str** | Output only. HTTP URI where you can download the content. | [optional] 
**mime_type** | **str** | Optional. The format of content. Currently the only two allowed values are \&quot;text/html\&quot; and \&quot;text/plain\&quot;. If left blank, the format is automatically determined from the type of the uploaded content. | [optional] 

## Example

```python
from openapi_client.models.text_snippet import TextSnippet

# TODO update the JSON string below
json = "{}"
# create an instance of TextSnippet from a JSON string
text_snippet_instance = TextSnippet.from_json(json)
# print the JSON string representation of the object
print(TextSnippet.to_json())

# convert the object into a dict
text_snippet_dict = text_snippet_instance.to_dict()
# create an instance of TextSnippet from a dict
text_snippet_from_dict = TextSnippet.from_dict(text_snippet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


