# GoogleCloudDocumentaiV1beta2DocumentPageLayout

Visual element describing a layout unit on a page.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounding_poly** | [**GoogleCloudDocumentaiV1beta2BoundingPoly**](GoogleCloudDocumentaiV1beta2BoundingPoly.md) |  | [optional] 
**confidence** | **float** | Confidence of the current Layout within context of the object this layout is for. e.g. confidence can be for a single token, a table, a visual element, etc. depending on context. Range &#x60;[0, 1]&#x60;. | [optional] 
**orientation** | **str** | Detected orientation for the Layout. | [optional] 
**text_anchor** | [**GoogleCloudDocumentaiV1beta2DocumentTextAnchor**](GoogleCloudDocumentaiV1beta2DocumentTextAnchor.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta2_document_page_layout import GoogleCloudDocumentaiV1beta2DocumentPageLayout

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta2DocumentPageLayout from a JSON string
google_cloud_documentai_v1beta2_document_page_layout_instance = GoogleCloudDocumentaiV1beta2DocumentPageLayout.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta2DocumentPageLayout.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta2_document_page_layout_dict = google_cloud_documentai_v1beta2_document_page_layout_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta2DocumentPageLayout from a dict
google_cloud_documentai_v1beta2_document_page_layout_from_dict = GoogleCloudDocumentaiV1beta2DocumentPageLayout.from_dict(google_cloud_documentai_v1beta2_document_page_layout_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


