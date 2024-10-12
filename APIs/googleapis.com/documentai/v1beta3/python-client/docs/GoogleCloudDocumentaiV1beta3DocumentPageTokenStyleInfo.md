# GoogleCloudDocumentaiV1beta3DocumentPageTokenStyleInfo

Font and other text style attributes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**background_color** | [**GoogleTypeColor**](GoogleTypeColor.md) |  | [optional] 
**bold** | **bool** | Whether the text is bold (equivalent to font_weight is at least &#x60;700&#x60;). | [optional] 
**font_size** | **int** | Font size in points (&#x60;1&#x60; point is &#x60;¹⁄₇₂&#x60; inches). | [optional] 
**font_type** | **str** | Name or style of the font. | [optional] 
**font_weight** | **int** | TrueType weight on a scale &#x60;100&#x60; (thin) to &#x60;1000&#x60; (ultra-heavy). Normal is &#x60;400&#x60;, bold is &#x60;700&#x60;. | [optional] 
**handwritten** | **bool** | Whether the text is handwritten. | [optional] 
**italic** | **bool** | Whether the text is italic. | [optional] 
**letter_spacing** | **float** | Letter spacing in points. | [optional] 
**pixel_font_size** | **float** | Font size in pixels, equal to _unrounded font_size_ * _resolution_ ÷ &#x60;72.0&#x60;. | [optional] 
**smallcaps** | **bool** | Whether the text is in small caps. | [optional] 
**strikeout** | **bool** | Whether the text is strikethrough. | [optional] 
**subscript** | **bool** | Whether the text is a subscript. | [optional] 
**superscript** | **bool** | Whether the text is a superscript. | [optional] 
**text_color** | [**GoogleTypeColor**](GoogleTypeColor.md) |  | [optional] 
**underlined** | **bool** | Whether the text is underlined. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_document_page_token_style_info import GoogleCloudDocumentaiV1beta3DocumentPageTokenStyleInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3DocumentPageTokenStyleInfo from a JSON string
google_cloud_documentai_v1beta3_document_page_token_style_info_instance = GoogleCloudDocumentaiV1beta3DocumentPageTokenStyleInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3DocumentPageTokenStyleInfo.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_document_page_token_style_info_dict = google_cloud_documentai_v1beta3_document_page_token_style_info_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3DocumentPageTokenStyleInfo from a dict
google_cloud_documentai_v1beta3_document_page_token_style_info_from_dict = GoogleCloudDocumentaiV1beta3DocumentPageTokenStyleInfo.from_dict(google_cloud_documentai_v1beta3_document_page_token_style_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


