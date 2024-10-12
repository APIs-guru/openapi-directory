# GoogleCloudDocumentaiV1beta2DocumentStyle

Annotation for common text style attributes. This adheres to CSS conventions as much as possible.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**background_color** | [**GoogleTypeColor**](GoogleTypeColor.md) |  | [optional] 
**color** | [**GoogleTypeColor**](GoogleTypeColor.md) |  | [optional] 
**font_family** | **str** | Font family such as &#x60;Arial&#x60;, &#x60;Times New Roman&#x60;. https://www.w3schools.com/cssref/pr_font_font-family.asp | [optional] 
**font_size** | [**GoogleCloudDocumentaiV1beta2DocumentStyleFontSize**](GoogleCloudDocumentaiV1beta2DocumentStyleFontSize.md) |  | [optional] 
**font_weight** | **str** | [Font weight](https://www.w3schools.com/cssref/pr_font_weight.asp). Possible values are &#x60;normal&#x60;, &#x60;bold&#x60;, &#x60;bolder&#x60;, and &#x60;lighter&#x60;. | [optional] 
**text_anchor** | [**GoogleCloudDocumentaiV1beta2DocumentTextAnchor**](GoogleCloudDocumentaiV1beta2DocumentTextAnchor.md) |  | [optional] 
**text_decoration** | **str** | [Text decoration](https://www.w3schools.com/cssref/pr_text_text-decoration.asp). Follows CSS standard.  | [optional] 
**text_style** | **str** | [Text style](https://www.w3schools.com/cssref/pr_font_font-style.asp). Possible values are &#x60;normal&#x60;, &#x60;italic&#x60;, and &#x60;oblique&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta2_document_style import GoogleCloudDocumentaiV1beta2DocumentStyle

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta2DocumentStyle from a JSON string
google_cloud_documentai_v1beta2_document_style_instance = GoogleCloudDocumentaiV1beta2DocumentStyle.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta2DocumentStyle.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta2_document_style_dict = google_cloud_documentai_v1beta2_document_style_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta2DocumentStyle from a dict
google_cloud_documentai_v1beta2_document_style_from_dict = GoogleCloudDocumentaiV1beta2DocumentStyle.from_dict(google_cloud_documentai_v1beta2_document_style_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


