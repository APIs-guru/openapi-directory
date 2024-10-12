# GoogleCloudDocumentaiV1beta2DocumentStyleFontSize

Font size with unit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**size** | **float** | Font size for the text. | [optional] 
**unit** | **str** | Unit for the font size. Follows CSS naming (such as &#x60;in&#x60;, &#x60;px&#x60;, and &#x60;pt&#x60;). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta2_document_style_font_size import GoogleCloudDocumentaiV1beta2DocumentStyleFontSize

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta2DocumentStyleFontSize from a JSON string
google_cloud_documentai_v1beta2_document_style_font_size_instance = GoogleCloudDocumentaiV1beta2DocumentStyleFontSize.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta2DocumentStyleFontSize.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta2_document_style_font_size_dict = google_cloud_documentai_v1beta2_document_style_font_size_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta2DocumentStyleFontSize from a dict
google_cloud_documentai_v1beta2_document_style_font_size_from_dict = GoogleCloudDocumentaiV1beta2DocumentStyleFontSize.from_dict(google_cloud_documentai_v1beta2_document_style_font_size_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


