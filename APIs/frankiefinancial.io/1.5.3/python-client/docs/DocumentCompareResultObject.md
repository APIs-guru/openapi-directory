# DocumentCompareResultObject

Contains the results of a given document upload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_comparison_results** | [**DocumentComparisonResultObject**](DocumentComparisonResultObject.md) |  | 
**request_id** | **str** | Unique identifier for every request. Can be used for tracking down answers with technical support.   Uses the ULID format (a time-based, sortable UUID)  Note: this will be different for every request.  | 

## Example

```python
from openapi_client.models.document_compare_result_object import DocumentCompareResultObject

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentCompareResultObject from a JSON string
document_compare_result_object_instance = DocumentCompareResultObject.from_json(json)
# print the JSON string representation of the object
print(DocumentCompareResultObject.to_json())

# convert the object into a dict
document_compare_result_object_dict = document_compare_result_object_instance.to_dict()
# create an instance of DocumentCompareResultObject from a dict
document_compare_result_object_from_dict = DocumentCompareResultObject.from_dict(document_compare_result_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


