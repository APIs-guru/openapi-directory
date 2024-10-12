# EnumScanDataRetrievalState

The reason why the scanData in a response is missing. - \"NORMAL\": The scanData was retrieved and is included. If it is empty then it was never provided or was provided empty. - \"EXCLUDED\": The retrieval request was not for 'full' data, or the object has 'ScanDelete' set so the scanData is not included - \"FAILED\": The scanData could not be retrieved from the secure document store.  The enumScanDataRetrievalState will not usually be set in a request. If a ScannedDocumentObject in a response has a 'FAILED' retrieval state then that object should not be sent back in a future possible update. It should either be omitted or the original data should be resent if it is available from another source. However it is safe to send the object in an update with the state received in a response. Any state other than 'NORMAL' (or '') will cause the blank scanData to be ignored, but other fields in the object will be updated if needed. 

## Enum

* `NORMAL` (value: `'NORMAL'`)

* `EXCLUDED` (value: `'EXCLUDED'`)

* `FAILED` (value: `'FAILED'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


