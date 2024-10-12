# GoogleCloudDocumentaiV1DocumentStyle

Annotation for common text style attributes. This adheres to CSS conventions as much as possible.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**background_color** | [**GoogleTypeColor**](GoogleTypeColor.md) |  | [optional] 
**color** | [**GoogleTypeColor**](GoogleTypeColor.md) |  | [optional] 
**font_family** | **str** | Font family such as &#x60;Arial&#x60;, &#x60;Times New Roman&#x60;. https://www.w3schools.com/cssref/pr_font_font-family.asp | [optional] 
**font_size** | [**GoogleCloudDocumentaiV1DocumentStyleFontSize**](GoogleCloudDocumentaiV1DocumentStyleFontSize.md) |  | [optional] 
**font_weight** | **str** | [Font weight](https://www.w3schools.com/cssref/pr_font_weight.asp). Possible values are &#x60;normal&#x60;, &#x60;bold&#x60;, &#x60;bolder&#x60;, and &#x60;lighter&#x60;. | [optional] 
**text_anchor** | [**GoogleCloudDocumentaiV1DocumentTextAnchor**](GoogleCloudDocumentaiV1DocumentTextAnchor.md) |  | [optional] 
**text_decoration** | **str** | [Text decoration](https://www.w3schools.com/cssref/pr_text_text-decoration.asp). Follows CSS standard.  | [optional] 
**text_style** | **str** | [Text style](https://www.w3schools.com/cssref/pr_font_font-style.asp). Possible values are &#x60;normal&#x60;, &#x60;italic&#x60;, and &#x60;oblique&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1_document_style import GoogleCloudDocumentaiV1DocumentStyle

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1DocumentStyle from a JSON string
google_cloud_documentai_v1_document_style_instance = GoogleCloudDocumentaiV1DocumentStyle.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1DocumentStyle.to_json())

# convert the object into a dict
google_cloud_documentai_v1_document_style_dict = google_cloud_documentai_v1_document_style_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1DocumentStyle from a dict
google_cloud_documentai_v1_document_style_from_dict = GoogleCloudDocumentaiV1DocumentStyle.from_dict(google_cloud_documentai_v1_document_style_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


