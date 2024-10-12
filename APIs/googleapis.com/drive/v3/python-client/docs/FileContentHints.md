# FileContentHints

Additional information about the content of the file. These fields are never populated in responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**indexable_text** | **str** | Text to be indexed for the file to improve fullText queries. This is limited to 128KB in length and may contain HTML elements. | [optional] 
**thumbnail** | [**FileContentHintsThumbnail**](FileContentHintsThumbnail.md) |  | [optional] 

## Example

```python
from openapi_client.models.file_content_hints import FileContentHints

# TODO update the JSON string below
json = "{}"
# create an instance of FileContentHints from a JSON string
file_content_hints_instance = FileContentHints.from_json(json)
# print the JSON string representation of the object
print(FileContentHints.to_json())

# convert the object into a dict
file_content_hints_dict = file_content_hints_instance.to_dict()
# create an instance of FileContentHints from a dict
file_content_hints_from_dict = FileContentHints.from_dict(file_content_hints_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


