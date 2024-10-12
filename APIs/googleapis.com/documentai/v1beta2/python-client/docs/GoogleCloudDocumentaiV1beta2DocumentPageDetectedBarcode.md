# GoogleCloudDocumentaiV1beta2DocumentPageDetectedBarcode

A detected barcode.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**barcode** | [**GoogleCloudDocumentaiV1beta2Barcode**](GoogleCloudDocumentaiV1beta2Barcode.md) |  | [optional] 
**layout** | [**GoogleCloudDocumentaiV1beta2DocumentPageLayout**](GoogleCloudDocumentaiV1beta2DocumentPageLayout.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta2_document_page_detected_barcode import GoogleCloudDocumentaiV1beta2DocumentPageDetectedBarcode

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta2DocumentPageDetectedBarcode from a JSON string
google_cloud_documentai_v1beta2_document_page_detected_barcode_instance = GoogleCloudDocumentaiV1beta2DocumentPageDetectedBarcode.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta2DocumentPageDetectedBarcode.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta2_document_page_detected_barcode_dict = google_cloud_documentai_v1beta2_document_page_detected_barcode_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta2DocumentPageDetectedBarcode from a dict
google_cloud_documentai_v1beta2_document_page_detected_barcode_from_dict = GoogleCloudDocumentaiV1beta2DocumentPageDetectedBarcode.from_dict(google_cloud_documentai_v1beta2_document_page_detected_barcode_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


