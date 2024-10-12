# DocumentLanguage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detected_languages** | [**List[DetectedLanguage]**](DetectedLanguage.md) | A list of extracted languages. | 
**id** | **str** | Unique, non-empty document identifier. | 
**statistics** | [**DocumentStatistics**](DocumentStatistics.md) |  | [optional] 

## Example

```python
from openapi_client.models.document_language import DocumentLanguage

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentLanguage from a JSON string
document_language_instance = DocumentLanguage.from_json(json)
# print the JSON string representation of the object
print(DocumentLanguage.to_json())

# convert the object into a dict
document_language_dict = document_language_instance.to_dict()
# create an instance of DocumentLanguage from a dict
document_language_from_dict = DocumentLanguage.from_dict(document_language_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


