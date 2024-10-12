# BatchUpdateDocumentResponse

Response message from a BatchUpdateDocument request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_id** | **str** | The ID of the document to which the updates were applied to. | [optional] 
**replies** | [**List[Response]**](Response.md) | The reply of the updates. This maps 1:1 with the updates, although replies to some requests may be empty. | [optional] 
**write_control** | [**WriteControl**](WriteControl.md) |  | [optional] 

## Example

```python
from openapi_client.models.batch_update_document_response import BatchUpdateDocumentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchUpdateDocumentResponse from a JSON string
batch_update_document_response_instance = BatchUpdateDocumentResponse.from_json(json)
# print the JSON string representation of the object
print(BatchUpdateDocumentResponse.to_json())

# convert the object into a dict
batch_update_document_response_dict = batch_update_document_response_instance.to_dict()
# create an instance of BatchUpdateDocumentResponse from a dict
batch_update_document_response_from_dict = BatchUpdateDocumentResponse.from_dict(batch_update_document_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


