# GoogleCloudDocumentaiV1beta3DocumentPageVisualElement

Detected non-text visual elements e.g. checkbox, signature etc. on the page.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detected_languages** | [**List[GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage]**](GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage.md) | A list of detected languages together with confidence. | [optional] 
**layout** | [**GoogleCloudDocumentaiV1beta3DocumentPageLayout**](GoogleCloudDocumentaiV1beta3DocumentPageLayout.md) |  | [optional] 
**type** | **str** | Type of the VisualElement. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_document_page_visual_element import GoogleCloudDocumentaiV1beta3DocumentPageVisualElement

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3DocumentPageVisualElement from a JSON string
google_cloud_documentai_v1beta3_document_page_visual_element_instance = GoogleCloudDocumentaiV1beta3DocumentPageVisualElement.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3DocumentPageVisualElement.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_document_page_visual_element_dict = google_cloud_documentai_v1beta3_document_page_visual_element_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3DocumentPageVisualElement from a dict
google_cloud_documentai_v1beta3_document_page_visual_element_from_dict = GoogleCloudDocumentaiV1beta3DocumentPageVisualElement.from_dict(google_cloud_documentai_v1beta3_document_page_visual_element_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


