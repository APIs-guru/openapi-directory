# GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRef

Represents a weak reference to a page element within a document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounding_poly** | [**GoogleCloudDocumentaiV1beta3BoundingPoly**](GoogleCloudDocumentaiV1beta3BoundingPoly.md) |  | [optional] 
**confidence** | **float** | Optional. Confidence of detected page element, if applicable. Range &#x60;[0, 1]&#x60;. | [optional] 
**layout_id** | **str** | Optional. Deprecated. Use PageRef.bounding_poly instead. | [optional] 
**layout_type** | **str** | Optional. The type of the layout element that is being referenced if any. | [optional] 
**page** | **str** | Required. Index into the Document.pages element, for example using &#x60;Document.pages&#x60; to locate the related page element. This field is skipped when its value is the default &#x60;0&#x60;. See https://developers.google.com/protocol-buffers/docs/proto3#json. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_document_page_anchor_page_ref import GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRef

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRef from a JSON string
google_cloud_documentai_v1beta3_document_page_anchor_page_ref_instance = GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRef.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRef.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_document_page_anchor_page_ref_dict = google_cloud_documentai_v1beta3_document_page_anchor_page_ref_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRef from a dict
google_cloud_documentai_v1beta3_document_page_anchor_page_ref_from_dict = GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRef.from_dict(google_cloud_documentai_v1beta3_document_page_anchor_page_ref_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


