# DocumentVerificationResultObject

Contains the details of a check on a given data point

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_id** | **str** | This is a direct copy from the document object passed in for verifcation. | [optional] 
**process_result** | [**ProcessResultObject**](ProcessResultObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.document_verification_result_object import DocumentVerificationResultObject

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentVerificationResultObject from a JSON string
document_verification_result_object_instance = DocumentVerificationResultObject.from_json(json)
# print the JSON string representation of the object
print(DocumentVerificationResultObject.to_json())

# convert the object into a dict
document_verification_result_object_dict = document_verification_result_object_instance.to_dict()
# create an instance of DocumentVerificationResultObject from a dict
document_verification_result_object_from_dict = DocumentVerificationResultObject.from_dict(document_verification_result_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


