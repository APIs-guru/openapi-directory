# PostReferenceFilesLocaleCode201ResponseErrorsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **str** | Channel for which the variation file generation failed | [optional] 
**locale** | **str** | Locale for which the variation file generation failed | [optional] 
**message** | **str** | Message explaining why the variation file generation failed | [optional] 

## Example

```python
from openapi_client.models.post_reference_files_locale_code201_response_errors_inner import PostReferenceFilesLocaleCode201ResponseErrorsInner

# TODO update the JSON string below
json = "{}"
# create an instance of PostReferenceFilesLocaleCode201ResponseErrorsInner from a JSON string
post_reference_files_locale_code201_response_errors_inner_instance = PostReferenceFilesLocaleCode201ResponseErrorsInner.from_json(json)
# print the JSON string representation of the object
print(PostReferenceFilesLocaleCode201ResponseErrorsInner.to_json())

# convert the object into a dict
post_reference_files_locale_code201_response_errors_inner_dict = post_reference_files_locale_code201_response_errors_inner_instance.to_dict()
# create an instance of PostReferenceFilesLocaleCode201ResponseErrorsInner from a dict
post_reference_files_locale_code201_response_errors_inner_from_dict = PostReferenceFilesLocaleCode201ResponseErrorsInner.from_dict(post_reference_files_locale_code201_response_errors_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


