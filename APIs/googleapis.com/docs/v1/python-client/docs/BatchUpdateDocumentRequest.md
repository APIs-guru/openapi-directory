# BatchUpdateDocumentRequest

Request message for BatchUpdateDocument.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | [**List[Request]**](Request.md) | A list of updates to apply to the document. | [optional] 
**write_control** | [**WriteControl**](WriteControl.md) |  | [optional] 

## Example

```python
from openapi_client.models.batch_update_document_request import BatchUpdateDocumentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchUpdateDocumentRequest from a JSON string
batch_update_document_request_instance = BatchUpdateDocumentRequest.from_json(json)
# print the JSON string representation of the object
print(BatchUpdateDocumentRequest.to_json())

# convert the object into a dict
batch_update_document_request_dict = batch_update_document_request_instance.to_dict()
# create an instance of BatchUpdateDocumentRequest from a dict
batch_update_document_request_from_dict = BatchUpdateDocumentRequest.from_dict(batch_update_document_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


