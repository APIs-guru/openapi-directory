# FileIndexableText

Indexable text attributes for the file (can only be written)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **str** | The text to be indexed for this file. | [optional] 

## Example

```python
from openapi_client.models.file_indexable_text import FileIndexableText

# TODO update the JSON string below
json = "{}"
# create an instance of FileIndexableText from a JSON string
file_indexable_text_instance = FileIndexableText.from_json(json)
# print the JSON string representation of the object
print(FileIndexableText.to_json())

# convert the object into a dict
file_indexable_text_dict = file_indexable_text_instance.to_dict()
# create an instance of FileIndexableText from a dict
file_indexable_text_from_dict = FileIndexableText.from_dict(file_indexable_text_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


