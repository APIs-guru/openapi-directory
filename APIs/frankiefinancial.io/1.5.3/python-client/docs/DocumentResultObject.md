# DocumentResultObject

Contains the results of a given document upload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document** | [**IdentityDocumentObject**](IdentityDocumentObject.md) |  | 
**request_id** | **str** | Unique identifier for every request. Can be used for tracking down answers with technical support.   Uses the ULID format (a time-based, sortable UUID)  Note: this will be different for every request.  | 

## Example

```python
from openapi_client.models.document_result_object import DocumentResultObject

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentResultObject from a JSON string
document_result_object_instance = DocumentResultObject.from_json(json)
# print the JSON string representation of the object
print(DocumentResultObject.to_json())

# convert the object into a dict
document_result_object_dict = document_result_object_instance.to_dict()
# create an instance of DocumentResultObject from a dict
document_result_object_from_dict = DocumentResultObject.from_dict(document_result_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


