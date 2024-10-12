# SendableDocument

The document to send.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_type** | **str** | The type of document to be sent. | 
**invoice** | [**Invoice**](Invoice.md) |  | [optional] 
**invoice_response** | [**DocumentInvoiceResponse**](DocumentInvoiceResponse.md) |  | [optional] 
**order** | [**DocumentOrder**](DocumentOrder.md) |  | [optional] 
**raw_document_data** | [**RawDocumentData**](RawDocumentData.md) |  | [optional] 

## Example

```python
from openapi_client.models.sendable_document import SendableDocument

# TODO update the JSON string below
json = "{}"
# create an instance of SendableDocument from a JSON string
sendable_document_instance = SendableDocument.from_json(json)
# print the JSON string representation of the object
print(SendableDocument.to_json())

# convert the object into a dict
sendable_document_dict = sendable_document_instance.to_dict()
# create an instance of SendableDocument from a dict
sendable_document_from_dict = SendableDocument.from_dict(sendable_document_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


