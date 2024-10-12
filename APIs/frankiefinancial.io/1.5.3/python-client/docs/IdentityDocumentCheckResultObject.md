# IdentityDocumentCheckResultObject

This object holds the identityDocument that was checked and the results associated with said checks. You can also leave the checkResult blank/nil if there are no results for that identityDocument if you wish.  This is useful for returning results on a freshly crerated entity where the API user would want to confirm that the data has indeed been stored, and be able to capture relevant documentIds - perhaps to address issues as to why it wasn't checked. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check_result** | [**List[GeneralCheckResultObject]**](GeneralCheckResultObject.md) | An array in reverse chronological order of all checks done on this data point for the given entity. Older checks may have been previously done by you or another institution, and if so, these will be listed. | [optional] 
**id_document** | [**IdentityDocumentObject**](IdentityDocumentObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.identity_document_check_result_object import IdentityDocumentCheckResultObject

# TODO update the JSON string below
json = "{}"
# create an instance of IdentityDocumentCheckResultObject from a JSON string
identity_document_check_result_object_instance = IdentityDocumentCheckResultObject.from_json(json)
# print the JSON string representation of the object
print(IdentityDocumentCheckResultObject.to_json())

# convert the object into a dict
identity_document_check_result_object_dict = identity_document_check_result_object_instance.to_dict()
# create an instance of IdentityDocumentCheckResultObject from a dict
identity_document_check_result_object_from_dict = IdentityDocumentCheckResultObject.from_dict(identity_document_check_result_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


