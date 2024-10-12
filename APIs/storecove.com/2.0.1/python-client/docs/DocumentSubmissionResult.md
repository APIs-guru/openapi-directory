# DocumentSubmissionResult

The result of a document submission

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**guid** | **str** | A (V4) GUID for the document submission | [optional] 

## Example

```python
from openapi_client.models.document_submission_result import DocumentSubmissionResult

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentSubmissionResult from a JSON string
document_submission_result_instance = DocumentSubmissionResult.from_json(json)
# print the JSON string representation of the object
print(DocumentSubmissionResult.to_json())

# convert the object into a dict
document_submission_result_dict = document_submission_result_instance.to_dict()
# create an instance of DocumentSubmissionResult from a dict
document_submission_result_from_dict = DocumentSubmissionResult.from_dict(document_submission_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


