# DocumentComparisonResultObject

Contains the details of a comparison between two documents

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compare_document_id** | **str** | This is a direct copy from the compareDocument object passed in the request. You MUST supply this.  | [optional] 
**process_result** | [**ProcessResultObject**](ProcessResultObject.md) |  | [optional] 
**to_document_id** | **str** | This is a direct copy from the toDocument object passed in the request. You MUST supply this.  | [optional] 

## Example

```python
from openapi_client.models.document_comparison_result_object import DocumentComparisonResultObject

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentComparisonResultObject from a JSON string
document_comparison_result_object_instance = DocumentComparisonResultObject.from_json(json)
# print the JSON string representation of the object
print(DocumentComparisonResultObject.to_json())

# convert the object into a dict
document_comparison_result_object_dict = document_comparison_result_object_instance.to_dict()
# create an instance of DocumentComparisonResultObject from a dict
document_comparison_result_object_from_dict = DocumentComparisonResultObject.from_dict(document_comparison_result_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


