# DocumentScanResultObject

The result of a scan will contain 4 parts  * The requestid - that's always there, and is the same that was passed in in the header.  * The results of the process and the meta data around it, including confidence levels, service used and the like  * extractedDocument - this will be an updated version of the document object passed in for scanning with results of the scan inserted. You can subsequently update this data as needed (say after confirmation with the end-consumer) through the various update functions.     * Any additional data extracted from the service that does not fit into the standard identity document fields will be placed into the extraData KVPs.    * extractedEntity - the service will attempt to create the basics of an entity's name, address, DoB, gender from the data returned from the scan.    You can then use this entity data to create a new entity for a wider check if needed.      * Note if you plan on doing this, make sure you include the extractedDocument reference in the \"new\" entity.    * EXTRA SPECIAL NOTE: If no useful data was returned in the scan, extractedDocument will be left unchanged, and extractedEntity will be left out 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extracted_document** | [**IdentityDocumentObject**](IdentityDocumentObject.md) |  | [optional] 
**extracted_entity** | [**EntityObject**](EntityObject.md) |  | [optional] 
**process_result** | [**ProcessResultObject**](ProcessResultObject.md) |  | 
**request_id** | **str** | Unique identifier for every request. Can be used for tracking down answers with technical support.   Uses the ULID format (a time-based, sortable UUID)  Note: this will be different for every request.  | 

## Example

```python
from openapi_client.models.document_scan_result_object import DocumentScanResultObject

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentScanResultObject from a JSON string
document_scan_result_object_instance = DocumentScanResultObject.from_json(json)
# print the JSON string representation of the object
print(DocumentScanResultObject.to_json())

# convert the object into a dict
document_scan_result_object_dict = document_scan_result_object_instance.to_dict()
# create an instance of DocumentScanResultObject from a dict
document_scan_result_object_from_dict = DocumentScanResultObject.from_dict(document_scan_result_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


