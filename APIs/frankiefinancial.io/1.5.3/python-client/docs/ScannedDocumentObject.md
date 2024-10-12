# ScannedDocumentObject

the document to be attached and optionally scanned (if supported)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scan_delete** | **bool** | Used as a way of indicating to the service that the original scanned document is not to be kept after it has been processed. We will retain any metadata and the results of processing (where required by regulation or the customer), but the original file uploaded will eventually be remnoved once processing is complete.   If ScanDelete is set to true, any call with /full at the end will still not return the file contents, regardless of whether the file has been deleted yet (the deletion process is a background task that can take a few minutes to occur)  | [optional] 
**scan_created** | **datetime** | The date and time the scan was created. Not the date of the scanned document, which should be in the idIssued attribute of the document that owns this scan.  | [optional] 
**scan_data** | **bytearray** | Base64 encoded string of a photo or scan of an ID document to be verified. If supplied and of a supported type, the Frankie service will attempt to use OCR tech to extract the data from the scanned doc/image.  In a result message, this field will be left blank, unless the \&quot;full\&quot; action is requested.  | [optional] 
**scan_data_retrieval_state** | [**EnumScanDataRetrievalState**](EnumScanDataRetrievalState.md) |  | [optional] 
**scan_doc_id** | **str** | When an document scan is created/uploaded, it is assigned a scanDocId. You&#39;ll see this in a successful response or successfully accepted response. This can then be referenced in subsequent calls if you&#39;re uploading more/updated data.  | [optional] 
**scan_filename** | **str** | If you&#39;re uploading a file where it&#39;s important to keep the original filename, then you can provide that here. Otherwise the Frankie service will assign an arbitrary name based on the scanDocIdand an extension based on the MIME type  | [optional] 
**scan_mime** | [**EnumMIMEType**](EnumMIMEType.md) |  | [optional] 
**scan_page_num** | **int** | If uploading multiple pages - it&#39;s handy to keep a track of these. There is no enforcement of these numbers at all. You can have 10 page 1&#39;s and a page 29 if you wish.  | [optional] 
**scan_side** | [**EnumScanSide**](EnumScanSide.md) |  | [optional] 
**scan_type** | [**EnumScanType**](EnumScanType.md) |  | [optional] 

## Example

```python
from openapi_client.models.scanned_document_object import ScannedDocumentObject

# TODO update the JSON string below
json = "{}"
# create an instance of ScannedDocumentObject from a JSON string
scanned_document_object_instance = ScannedDocumentObject.from_json(json)
# print the JSON string representation of the object
print(ScannedDocumentObject.to_json())

# convert the object into a dict
scanned_document_object_dict = scanned_document_object_instance.to_dict()
# create an instance of ScannedDocumentObject from a dict
scanned_document_object_from_dict = ScannedDocumentObject.from_dict(scanned_document_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


