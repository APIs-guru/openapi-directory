# GoogleCloudDocumentaiV1beta3DocumentPageImage

Rendered image contents for this page.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **bytearray** | Raw byte content of the image. | [optional] 
**height** | **int** | Height of the image in pixels. | [optional] 
**mime_type** | **str** | Encoding [media type (MIME type)](https://www.iana.org/assignments/media-types/media-types.xhtml) for the image. | [optional] 
**width** | **int** | Width of the image in pixels. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_document_page_image import GoogleCloudDocumentaiV1beta3DocumentPageImage

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3DocumentPageImage from a JSON string
google_cloud_documentai_v1beta3_document_page_image_instance = GoogleCloudDocumentaiV1beta3DocumentPageImage.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3DocumentPageImage.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_document_page_image_dict = google_cloud_documentai_v1beta3_document_page_image_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3DocumentPageImage from a dict
google_cloud_documentai_v1beta3_document_page_image_from_dict = GoogleCloudDocumentaiV1beta3DocumentPageImage.from_dict(google_cloud_documentai_v1beta3_document_page_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


