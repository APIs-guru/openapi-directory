# GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage

Detected language for a structural component.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **float** | Confidence of detected language. Range &#x60;[0, 1]&#x60;. | [optional] 
**language_code** | **str** | The [BCP-47 language code](https://www.unicode.org/reports/tr35/#Unicode_locale_identifier), such as &#x60;en-US&#x60; or &#x60;sr-Latn&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_document_page_detected_language import GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage from a JSON string
google_cloud_documentai_v1beta3_document_page_detected_language_instance = GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_document_page_detected_language_dict = google_cloud_documentai_v1beta3_document_page_detected_language_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage from a dict
google_cloud_documentai_v1beta3_document_page_detected_language_from_dict = GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage.from_dict(google_cloud_documentai_v1beta3_document_page_detected_language_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


