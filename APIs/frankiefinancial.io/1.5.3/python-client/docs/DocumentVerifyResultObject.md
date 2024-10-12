# DocumentVerifyResultObject

Contains the results of a given document upload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_verification_results** | [**DocumentVerificationResultObject**](DocumentVerificationResultObject.md) |  | [optional] 
**request_id** | **str** | Unique identifier for every request. Can be used for tracking down answers with technical support.   Uses the ULID format (a time-based, sortable UUID)  Note: this will be different for every request.  | 

## Example

```python
from openapi_client.models.document_verify_result_object import DocumentVerifyResultObject

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentVerifyResultObject from a JSON string
document_verify_result_object_instance = DocumentVerifyResultObject.from_json(json)
# print the JSON string representation of the object
print(DocumentVerifyResultObject.to_json())

# convert the object into a dict
document_verify_result_object_dict = document_verify_result_object_instance.to_dict()
# create an instance of DocumentVerifyResultObject from a dict
document_verify_result_object_from_dict = DocumentVerifyResultObject.from_dict(document_verify_result_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


