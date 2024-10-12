# EnumDocumentStatus

Current status of a document. - \"INITIALISING\": the state whilst you're uploading and updating - \"SCAN_IN_PROGRESS\": the state whilst it's being scanned.  - \"DOC_SCANNED\": the document has been scanned and data extracted as best as possible. It's still possible to update the details and add more scans if you wish. - \"DOC_CHECKED\": the document has been used as part of a check that has been finalised in some way. You can no longer update this document and any attempt will generate an error. 

## Enum

* `INITIALISING` (value: `'INITIALISING'`)

* `SCAN_IN_PROGRESS` (value: `'SCAN_IN_PROGRESS'`)

* `DOC_SCANNED` (value: `'DOC_SCANNED'`)

* `DOC_CHECKED` (value: `'DOC_CHECKED'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


