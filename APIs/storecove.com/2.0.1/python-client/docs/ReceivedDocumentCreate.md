# ReceivedDocumentCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document** | **str** | The Base64 encoded document. | 
**parse_strategy** | **str** | The attachment content type (mime type). | 

## Example

```python
from openapi_client.models.received_document_create import ReceivedDocumentCreate

# TODO update the JSON string below
json = "{}"
# create an instance of ReceivedDocumentCreate from a JSON string
received_document_create_instance = ReceivedDocumentCreate.from_json(json)
# print the JSON string representation of the object
print(ReceivedDocumentCreate.to_json())

# convert the object into a dict
received_document_create_dict = received_document_create_instance.to_dict()
# create an instance of ReceivedDocumentCreate from a dict
received_document_create_from_dict = ReceivedDocumentCreate.from_dict(received_document_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


