# GoogleCloudDocumentaiV1DocumentPageVisualElement

Detected non-text visual elements e.g. checkbox, signature etc. on the page.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detected_languages** | [**List[GoogleCloudDocumentaiV1DocumentPageDetectedLanguage]**](GoogleCloudDocumentaiV1DocumentPageDetectedLanguage.md) | A list of detected languages together with confidence. | [optional] 
**layout** | [**GoogleCloudDocumentaiV1DocumentPageLayout**](GoogleCloudDocumentaiV1DocumentPageLayout.md) |  | [optional] 
**type** | **str** | Type of the VisualElement. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1_document_page_visual_element import GoogleCloudDocumentaiV1DocumentPageVisualElement

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1DocumentPageVisualElement from a JSON string
google_cloud_documentai_v1_document_page_visual_element_instance = GoogleCloudDocumentaiV1DocumentPageVisualElement.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1DocumentPageVisualElement.to_json())

# convert the object into a dict
google_cloud_documentai_v1_document_page_visual_element_dict = google_cloud_documentai_v1_document_page_visual_element_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1DocumentPageVisualElement from a dict
google_cloud_documentai_v1_document_page_visual_element_from_dict = GoogleCloudDocumentaiV1DocumentPageVisualElement.from_dict(google_cloud_documentai_v1_document_page_visual_element_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


